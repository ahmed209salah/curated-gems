-- Create enum types for platform, pricing, and category tags
CREATE TYPE public.platform_tag AS ENUM ('web', 'ios', 'android', 'windows', 'mac', 'linux');
CREATE TYPE public.pricing_tag AS ENUM ('free', 'freemium', 'paid', 'open_source');
CREATE TYPE public.category_tag AS ENUM (
  'productivity', 'design', 'ai', 'development', 'marketing', 
  'communication', 'security', 'finance', 'education', 'entertainment',
  'photography', 'music', 'video', 'writing', 'business', 'utilities'
);

-- Create products table (main software/tools listing)
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  short_description TEXT,
  official_url TEXT,
  icon_url TEXT,
  platforms platform_tag[] DEFAULT '{}',
  pricing pricing_tag DEFAULT 'free',
  categories category_tag[] DEFAULT '{}',
  upvote_count INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create upvotes table
CREATE TABLE public.upvotes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(product_id, user_id)
);

-- Create alternatives table (links products as alternatives to each other)
CREATE TABLE public.alternatives (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  alternative_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  relevance_score INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(product_id, alternative_id),
  CHECK (product_id != alternative_id)
);

-- Create suggestions table (user-submitted alternatives)
CREATE TABLE public.suggestions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  suggested_name TEXT NOT NULL,
  suggested_url TEXT,
  reason TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.upvotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alternatives ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.suggestions ENABLE ROW LEVEL SECURITY;

-- Products: Anyone can read
CREATE POLICY "Products are publicly viewable" 
ON public.products FOR SELECT 
USING (true);

-- Upvotes: Anyone can read, authenticated users can manage their own
CREATE POLICY "Upvotes are publicly viewable" 
ON public.upvotes FOR SELECT 
USING (true);

CREATE POLICY "Users can create their own upvotes" 
ON public.upvotes FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own upvotes" 
ON public.upvotes FOR DELETE 
USING (auth.uid() = user_id);

-- Alternatives: Anyone can read
CREATE POLICY "Alternatives are publicly viewable" 
ON public.alternatives FOR SELECT 
USING (true);

-- Suggestions: Anyone can read approved, authenticated users can create
CREATE POLICY "Approved suggestions are publicly viewable" 
ON public.suggestions FOR SELECT 
USING (status = 'approved' OR auth.uid() = user_id);

CREATE POLICY "Users can create suggestions" 
ON public.suggestions FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create function to update upvote count
CREATE OR REPLACE FUNCTION public.update_product_upvote_count()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE products SET upvote_count = upvote_count + 1 WHERE id = NEW.product_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE products SET upvote_count = upvote_count - 1 WHERE id = OLD.product_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$;

-- Create trigger for upvote count
CREATE TRIGGER on_upvote_change
AFTER INSERT OR DELETE ON public.upvotes
FOR EACH ROW
EXECUTE FUNCTION public.update_product_upvote_count();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for products timestamp
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for performance
CREATE INDEX idx_products_slug ON public.products(slug);
CREATE INDEX idx_products_upvote_count ON public.products(upvote_count DESC);
CREATE INDEX idx_products_categories ON public.products USING GIN(categories);
CREATE INDEX idx_products_platforms ON public.products USING GIN(platforms);
CREATE INDEX idx_products_pricing ON public.products(pricing);
CREATE INDEX idx_alternatives_product_id ON public.alternatives(product_id);
CREATE INDEX idx_upvotes_product_id ON public.upvotes(product_id);