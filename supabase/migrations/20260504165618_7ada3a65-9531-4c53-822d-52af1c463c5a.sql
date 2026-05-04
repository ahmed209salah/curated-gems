DROP POLICY IF EXISTS "Upvotes are publicly viewable" ON public.upvotes;
CREATE POLICY "Users can view their own upvotes"
ON public.upvotes
FOR SELECT
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Approved suggestions are publicly viewable" ON public.suggestions;
CREATE POLICY "Approved or own suggestions are viewable"
ON public.suggestions
FOR SELECT
USING (
  (status = 'approved' AND user_id IS NOT NULL)
  OR (auth.uid() IS NOT NULL AND auth.uid() = user_id)
);

ALTER TABLE public.suggestions ALTER COLUMN user_id SET NOT NULL;