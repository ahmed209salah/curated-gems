export interface Tool {
  id: string
  name: string
  description: string
  detailedReview?: string
  thumbnail: string
  website: string
  trustRating: 'excellent' | 'good' | 'average' | 'poor'
  rating: number
  badges: Array<{
    text: string
    type: 'trending' | 'hidden-gem' | 'lifetime-free' | 'mobile-friendly' | 'creator-recommended'
  }>
  category: string
  tags: string[]
  featured?: boolean
  bestFor?: 'beginners' | 'pros' | 'teams' | 'freelancers' | 'students'
}

export const sampleTools: Tool[] = [
  // Design Tools (20)
  {
    id: 'd1',
    name: 'Figma',
    description: 'Collaborative interface design tool with real-time editing and prototyping',
    detailedReview: 'Figma revolutionized UI/UX design by introducing browser-based collaboration that rivals desktop apps. Teams can work simultaneously on the same file, leave comments, and create interactive prototypes without switching tools. The free tier is generous for individuals and small teams, making it accessible for startups and freelancers. Advanced features like auto-layout, components, and design systems make scaling projects effortless.',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    website: 'https://figma.com',
    trustRating: 'excellent',
    rating: 4.8,
    badges: [
      { text: '🔥 Trending', type: 'trending' },
      { text: '👨‍💻 Dev Favorite', type: 'creator-recommended' }
    ],
    category: 'design',
    tags: ['ui', 'design', 'collaboration', 'prototyping'],
    featured: true,
    bestFor: 'teams'
  },
  {
    id: 'd2',
    name: 'Canva',
    description: 'Easy drag-and-drop design tool for social media, presentations, and marketing',
    detailedReview: 'Canva democratized graphic design by making professional templates accessible to everyone. With thousands of pre-made designs for social media, presentations, and print materials, even complete beginners can create stunning visuals in minutes. The mobile app lets you design on-the-go, and the brand kit feature keeps your colors and fonts consistent. Perfect for marketers, educators, and small business owners who need quick, polished graphics without hiring a designer.',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://canva.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'design',
    tags: ['graphics', 'templates', 'social-media', 'marketing'],
    featured: true,
    bestFor: 'beginners'
  },
  {
    id: 'd3',
    name: 'GIMP',
    description: 'Free and open-source image editor with advanced photo manipulation tools',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://gimp.org',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'design',
    tags: ['photo-editing', 'open-source', 'advanced']
  },
  {
    id: 'd4',
    name: 'Inkscape',
    description: 'Professional vector graphics software for logos, illustrations, and scalable graphics',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://inkscape.org',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Designer Pick', type: 'creator-recommended' }
    ],
    category: 'design',
    tags: ['vector', 'logos', 'svg', 'illustrations']
  },
  {
    id: 'd5',
    name: 'Blender',
    description: '3D creation suite for modeling, animation, rendering, and game development',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://blender.org',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Pro Tool', type: 'creator-recommended' }
    ],
    category: 'design',
    tags: ['3d', 'animation', 'modeling', 'rendering']
  },
  {
    id: 'd6',
    name: 'Unsplash',
    description: 'High-quality stock photos available for free commercial use',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://unsplash.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📸 Creator Favorite', type: 'creator-recommended' }
    ],
    category: 'design',
    tags: ['stock-photos', 'free', 'commercial-use']
  },
  {
    id: 'd7',
    name: 'Pexels',
    description: 'Free stock photos and videos for websites, apps, and other projects',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://pexels.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'design',
    tags: ['stock-photos', 'videos', 'free', 'commercial']
  },
  {
    id: 'd8',
    name: 'Pixabay',
    description: 'Free images, vectors, and videos for creative projects',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://pixabay.com',
    trustRating: 'good',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'design',
    tags: ['stock-images', 'vectors', 'illustrations']
  },
  {
    id: 'd9',
    name: 'Color Hunt',
    description: 'Curated collection of beautiful color palettes for designers',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://colorhunt.co',
    trustRating: 'good',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Designer Pick', type: 'creator-recommended' }
    ],
    category: 'design',
    tags: ['colors', 'palettes', 'inspiration']
  },
  {
    id: 'd10',
    name: 'Google Fonts',
    description: 'Free web fonts that are easy to use and open source',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://fonts.google.com',
    trustRating: 'excellent',
    rating: 4.8,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Essential', type: 'creator-recommended' }
    ],
    category: 'design',
    tags: ['fonts', 'typography', 'web-fonts']
  },
  {
    id: 'd11',
    name: 'Coolors',
    description: 'Fast color scheme generator for designers and artists',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://coolors.co',
    trustRating: 'good',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'design',
    tags: ['color-generator', 'palettes', 'tools']
  },
  {
    id: 'd12',
    name: 'Sketch.io',
    description: 'Free online drawing and design tool for quick sketches',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://sketch.io',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' },
      { text: '📱 Web-based', type: 'mobile-friendly' }
    ],
    category: 'design',
    tags: ['drawing', 'sketching', 'online-tool']
  },
  {
    id: 'd13',
    name: 'Icons8',
    description: 'Free icons, photos, vectors, music, and tools for your projects',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://icons8.com',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'design',
    tags: ['icons', 'graphics', 'resources']
  },
  {
    id: 'd14',
    name: 'Flaticon',
    description: 'Largest database of free icons in PNG, SVG, EPS, PSD and BASE 64 formats',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://flaticon.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'design',
    tags: ['icons', 'svg', 'png']
  },
  {
    id: 'd15',
    name: 'Feather Icons',
    description: 'Beautiful, customizable open source icons',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://feathericons.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Favorite', type: 'creator-recommended' }
    ],
    category: 'design',
    tags: ['icons', 'svg', 'open-source']
  },
  {
    id: 'd16',
    name: 'Dribbble',
    description: 'Design inspiration and portfolio showcase for creative professionals',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://dribbble.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Browsing', type: 'lifetime-free' },
      { text: '👨‍💻 Designer Network', type: 'creator-recommended' }
    ],
    category: 'design',
    tags: ['inspiration', 'portfolio', 'community']
  },
  {
    id: 'd17',
    name: 'Behance',
    description: 'Creative portfolio platform to showcase and discover creative work',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://behance.net',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'design',
    tags: ['portfolio', 'showcase', 'creative']
  },
  {
    id: 'd18',
    name: 'Adobe Color',
    description: 'Create color themes and palettes with the color wheel',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://color.adobe.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'design',
    tags: ['colors', 'palettes', 'adobe']
  },
  {
    id: 'd19',
    name: 'Photopea',
    description: 'Free online photo editor supporting PSD, XCF, Sketch, XD and CDR formats',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://photopea.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'design',
    tags: ['photo-editing', 'psd', 'online']
  },
  {
    id: 'd20',
    name: 'Remove.bg',
    description: 'Remove image backgrounds automatically in seconds',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://remove.bg',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Credits', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'design',
    tags: ['background-removal', 'ai', 'automation']
  },

  // AI & Machine Learning Tools (20)
  {
    id: 'ai1',
    name: 'ChatGPT',
    description: 'Advanced AI chatbot for writing, coding, analysis, and creative assistance',
    detailedReview: 'ChatGPT transformed how we interact with AI, offering conversational intelligence that helps with everything from drafting emails to debugging code. The free tier provides access to GPT-3.5, while Plus subscribers unlock GPT-4 with enhanced reasoning capabilities. Its strength lies in natural language understanding and context retention across long conversations. Ideal for writers seeking feedback, developers needing code explanations, and professionals automating repetitive tasks.',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://chat.openai.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '🔥 Trending', type: 'trending' },
      { text: '👨‍💻 Creator Favorite', type: 'creator-recommended' }
    ],
    category: 'ai',
    tags: ['ai', 'chatbot', 'writing', 'coding'],
    featured: true,
    bestFor: 'pros'
  },
  {
    id: 'ai2',
    name: 'Claude',
    description: 'Anthropic\'s AI assistant for analysis, writing, coding, and creative tasks',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://claude.ai',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '🔥 Trending', type: 'trending' },
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ai',
    tags: ['ai', 'assistant', 'analysis', 'coding']
  },
  {
    id: 'ai3',
    name: 'Google Gemini',
    description: 'Google\'s powerful AI for conversations, creative writing, and problem solving',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://gemini.google.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'ai',
    tags: ['ai', 'google', 'multimodal', 'assistant']
  },
  {
    id: 'ai4',
    name: 'Perplexity',
    description: 'AI-powered search engine that provides accurate answers with sources',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://perplexity.ai',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'ai',
    tags: ['search', 'research', 'sources', 'ai']
  },
  {
    id: 'ai5',
    name: 'Hugging Face',
    description: 'Open-source machine learning platform with models, datasets, and spaces',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://huggingface.co',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Essential', type: 'creator-recommended' }
    ],
    category: 'ai',
    tags: ['ml', 'models', 'open-source', 'datasets']
  },
  {
    id: 'ai6',
    name: 'Poe',
    description: 'Access multiple AI chatbots including GPT-4, Claude, and others in one place',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://poe.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Tier', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'ai',
    tags: ['multi-ai', 'chatbots', 'comparison']
  },
  {
    id: 'ai7',
    name: 'You.com',
    description: 'AI search engine with chat, code, and creative writing capabilities',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://you.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ai',
    tags: ['search', 'ai', 'chat', 'coding']
  },
  {
    id: 'ai8',
    name: 'Character.AI',
    description: 'Create and chat with AI characters for entertainment and roleplay',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://character.ai',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'ai',
    tags: ['characters', 'roleplay', 'entertainment']
  },
  {
    id: 'ai9',
    name: 'Replika',
    description: 'AI companion for meaningful conversations and emotional support',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://replika.ai',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'ai',
    tags: ['companion', 'conversation', 'emotional']
  },
  {
    id: 'ai10',
    name: 'Janitor AI',
    description: 'Create and interact with AI chatbots and characters',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://janitorai.com',
    trustRating: 'average',
    rating: 3.8,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ai',
    tags: ['chatbots', 'characters', 'roleplay']
  },
  {
    id: 'ai11',
    name: 'Phind',
    description: 'AI search engine optimized for developers and technical questions',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://phind.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Tool', type: 'creator-recommended' }
    ],
    category: 'ai',
    tags: ['developer', 'search', 'coding', 'technical']
  },
  {
    id: 'ai12',
    name: 'Writesonic',
    description: 'AI writing assistant for articles, ads, emails, and creative content',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://writesonic.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'ai',
    tags: ['writing', 'content', 'marketing', 'copywriting']
  },
  {
    id: 'ai13',
    name: 'Copy.ai',
    description: 'AI copywriter for marketing content, social posts, and business writing',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://copy.ai',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ai',
    tags: ['copywriting', 'marketing', 'content']
  },
  {
    id: 'ai14',
    name: 'Jasper AI',
    description: 'AI content platform for marketing teams and businesses',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=copy',
    website: 'https://jasper.ai',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'ai',
    tags: ['content', 'marketing', 'business']
  },
  {
    id: 'ai15',
    name: 'Rytr',
    description: 'AI writing assistant for blogs, emails, ads, and social media content',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://rytr.me',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ai',
    tags: ['writing', 'content', 'blogs']
  },
  {
    id: 'ai16',
    name: 'Quillbot',
    description: 'AI paraphrasing tool and writing assistant for improved content',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://quillbot.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ai',
    tags: ['paraphrasing', 'writing', 'grammar']
  },
  {
    id: 'ai17',
    name: 'DeepL',
    description: 'AI-powered translation service with superior accuracy',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://deepl.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Pro Choice', type: 'creator-recommended' }
    ],
    category: 'ai',
    tags: ['translation', 'languages', 'accuracy']
  },
  {
    id: 'ai18',
    name: 'Gamma',
    description: 'AI-powered presentation maker that creates beautiful slides instantly',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://gamma.app',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'ai',
    tags: ['presentations', 'slides', 'automation']
  },
  {
    id: 'ai19',
    name: 'RunwayML',
    description: 'AI video editing and generation platform for creators',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://runwayml.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Credits', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'ai',
    tags: ['video', 'generation', 'editing', 'creative']
  },
  {
    id: 'ai20',
    name: 'Luma AI',
    description: 'AI-powered 3D capture and generation from photos and videos',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://lumalabs.ai',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'ai',
    tags: ['3d', 'capture', 'generation', 'ar']
  },

  // Productivity Tools (20)
  {
    id: 'p1',
    name: 'Notion',
    description: 'All-in-one workspace for notes, docs, projects, and team collaboration',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://notion.so',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Creator Pick', type: 'creator-recommended' }
    ],
    category: 'productivity',
    tags: ['notes', 'productivity', 'collaboration', 'database'],
    featured: true
  },
  {
    id: 'p2',
    name: 'Trello',
    description: 'Visual project management with boards, lists, and cards for team collaboration',
    thumbnail: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop',
    website: 'https://trello.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'productivity',
    tags: ['kanban', 'project-management', 'collaboration']
  },
  {
    id: 'p3',
    name: 'Todoist',
    description: 'Task manager and to-do list app for personal and team productivity',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://todoist.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'productivity',
    tags: ['tasks', 'todo', 'planning', 'habits']
  },
  {
    id: 'p4',
    name: 'Google Workspace',
    description: 'Suite of cloud-based productivity tools including Docs, Sheets, and Drive',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://workspace.google.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Essential', type: 'creator-recommended' }
    ],
    category: 'productivity',
    tags: ['office', 'docs', 'sheets', 'cloud']
  },
  {
    id: 'p5',
    name: 'Slack',
    description: 'Team communication platform with channels, direct messages, and integrations',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://slack.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Team Essential', type: 'creator-recommended' }
    ],
    category: 'productivity',
    tags: ['communication', 'team', 'chat', 'collaboration']
  },
  {
    id: 'p6',
    name: 'Zoom',
    description: 'Video conferencing and online meeting platform for teams and individuals',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://zoom.us',
    trustRating: 'excellent',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'productivity',
    tags: ['video-calls', 'meetings', 'conferencing']
  },
  {
    id: 'p7',
    name: 'Discord',
    description: 'Voice, video and text communication platform for teams and communities',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://discord.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'productivity',
    tags: ['communication', 'voice', 'community', 'gaming']
  },
  {
    id: 'p8',
    name: 'Airtable',
    description: 'Spreadsheet-database hybrid for organizing and collaborating on data',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://airtable.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'productivity',
    tags: ['database', 'spreadsheet', 'collaboration']
  },
  {
    id: 'p9',
    name: 'Evernote',
    description: 'Note-taking app for capturing, organizing, and sharing notes across devices',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://evernote.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'productivity',
    tags: ['notes', 'organization', 'sync']
  },
  {
    id: 'p10',
    name: 'Asana',
    description: 'Project management and team collaboration tool for tracking work',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://asana.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Team Favorite', type: 'creator-recommended' }
    ],
    category: 'productivity',
    tags: ['project-management', 'tasks', 'team', 'tracking']
  },
  {
    id: 'p11',
    name: 'Monday.com',
    description: 'Work management platform for teams to plan, track, and deliver projects',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://monday.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'productivity',
    tags: ['work-management', 'projects', 'planning']
  },
  {
    id: 'p12',
    name: 'ClickUp',
    description: 'All-in-one productivity app for docs, tasks, goals, and team collaboration',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://clickup.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'productivity',
    tags: ['productivity', 'tasks', 'docs', 'goals']
  },
  {
    id: 'p13',
    name: 'Forest',
    description: 'Focus app that helps you stay concentrated and build healthy phone usage habits',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://forestapp.cc',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'productivity',
    tags: ['focus', 'habits', 'phone', 'concentration']
  },
  {
    id: 'p14',
    name: 'RescueTime',
    description: 'Automatic time tracking tool to understand how you spend your digital time',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://rescuetime.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'productivity',
    tags: ['time-tracking', 'analytics', 'habits']
  },
  {
    id: 'p15',
    name: 'Habitica',
    description: 'Gamified habit and task tracker that treats your life like an RPG',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://habitica.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'productivity',
    tags: ['habits', 'gamification', 'rpg', 'motivation']
  },
  {
    id: 'p16',
    name: 'Toggl Track',
    description: 'Simple time tracking for freelancers, teams, and businesses',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://toggl.com/track',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Freelancer Pick', type: 'creator-recommended' }
    ],
    category: 'productivity',
    tags: ['time-tracking', 'freelancing', 'billing']
  },
  {
    id: 'p17',
    name: 'Any.do',
    description: 'Simple task management and to-do list app with calendar integration',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://any.do',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'productivity',
    tags: ['tasks', 'todo', 'calendar', 'planning']
  },
  {
    id: 'p18',
    name: 'Clockify',
    description: 'Free time tracking software for teams and freelancers',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://clockify.me',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Team Tool', type: 'creator-recommended' }
    ],
    category: 'productivity',
    tags: ['time-tracking', 'teams', 'reporting']
  },
  {
    id: 'p19',
    name: 'Calendly',
    description: 'Appointment scheduling software that eliminates back-and-forth emails',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://calendly.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Business Essential', type: 'creator-recommended' }
    ],
    category: 'productivity',
    tags: ['scheduling', 'appointments', 'calendar']
  },
  {
    id: 'p20',
    name: 'Pomodone',
    description: 'Pomodoro timer that integrates with task management tools',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    website: 'https://pomodoneapp.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'productivity',
    tags: ['pomodoro', 'focus', 'timer', 'productivity']
  },

  // Marketing Tools (20)
  {
    id: 'm1',
    name: 'Google Analytics',
    description: 'Web analytics service to track and report website traffic and user behavior',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://analytics.google.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Essential', type: 'creator-recommended' }
    ],
    category: 'marketing',
    tags: ['analytics', 'tracking', 'website', 'data']
  },
  {
    id: 'm2',
    name: 'Mailchimp',
    description: 'Email marketing platform with automation, templates, and audience management',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://mailchimp.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Marketing Pick', type: 'creator-recommended' }
    ],
    category: 'marketing',
    tags: ['email-marketing', 'automation', 'newsletters']
  },
  {
    id: 'm3',
    name: 'Buffer',
    description: 'Social media management tool for scheduling posts across multiple platforms',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://buffer.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Social Media Pro', type: 'creator-recommended' }
    ],
    category: 'marketing',
    tags: ['social-media', 'scheduling', 'management']
  },
  {
    id: 'm4',
    name: 'Hootsuite',
    description: 'Social media management dashboard for multiple platforms and team collaboration',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://hootsuite.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'marketing',
    tags: ['social-media', 'management', 'dashboard']
  },
  {
    id: 'm5',
    name: 'Google My Business',
    description: 'Free tool to manage your business presence across Google Search and Maps',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://business.google.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Local Business', type: 'creator-recommended' }
    ],
    category: 'marketing',
    tags: ['local-seo', 'business', 'google', 'maps']
  },
  {
    id: 'm6',
    name: 'Canva Business',
    description: 'Design tool with marketing templates, brand kits, and team collaboration',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://canva.com/business',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'marketing',
    tags: ['design', 'templates', 'branding', 'social']
  },
  {
    id: 'm7',
    name: 'Later',
    description: 'Visual social media scheduler for Instagram, Facebook, Twitter, and Pinterest',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://later.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'marketing',
    tags: ['scheduling', 'instagram', 'visual', 'social']
  },
  {
    id: 'm8',
    name: 'HubSpot CRM',
    description: 'Free customer relationship management software with sales and marketing tools',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://hubspot.com/products/crm',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Sales Essential', type: 'creator-recommended' }
    ],
    category: 'marketing',
    tags: ['crm', 'sales', 'marketing', 'automation']
  },
  {
    id: 'm9',
    name: 'Google Tag Manager',
    description: 'Tag management system for tracking codes and marketing pixels',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://tagmanager.google.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Tool', type: 'creator-recommended' }
    ],
    category: 'marketing',
    tags: ['tracking', 'analytics', 'tags', 'pixels']
  },
  {
    id: 'm10',
    name: 'Bitly',
    description: 'URL shortener with click tracking and analytics for link management',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://bitly.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'marketing',
    tags: ['url-shortener', 'tracking', 'analytics']
  },
  {
    id: 'm11',
    name: 'Facebook Business Manager',
    description: 'Centralized tool to manage Facebook and Instagram business accounts and ads',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://business.facebook.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'marketing',
    tags: ['facebook', 'instagram', 'ads', 'social']
  },
  {
    id: 'm12',
    name: 'Pinterest Business',
    description: 'Business tools for Pinterest marketing, analytics, and advertising',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://business.pinterest.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'marketing',
    tags: ['pinterest', 'visual', 'marketing', 'ads']
  },
  {
    id: 'm13',
    name: 'Ubersuggest',
    description: 'SEO and keyword research tool for content marketing and competitive analysis',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://neilpatel.com/ubersuggest',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 SEO Tool', type: 'creator-recommended' }
    ],
    category: 'marketing',
    tags: ['seo', 'keywords', 'research', 'content']
  },
  {
    id: 'm14',
    name: 'Google Search Console',
    description: 'Free service to monitor and maintain your site\'s presence in Google Search',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://search.google.com/search-console',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 SEO Essential', type: 'creator-recommended' }
    ],
    category: 'marketing',
    tags: ['seo', 'search', 'webmaster', 'google']
  },
  {
    id: 'm15',
    name: 'TikTok Business',
    description: 'Business tools and advertising platform for TikTok marketing',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://business.tiktok.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Tools', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'marketing',
    tags: ['tiktok', 'video', 'marketing', 'social']
  },
  {
    id: 'm16',
    name: 'Linktree',
    description: 'Link-in-bio tool to share multiple links from social media profiles',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://linktr.ee',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'marketing',
    tags: ['link-in-bio', 'social', 'links', 'landing']
  },
  {
    id: 'm17',
    name: 'Typeform',
    description: 'Online form builder for surveys, quizzes, and lead generation',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://typeform.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'marketing',
    tags: ['forms', 'surveys', 'lead-generation']
  },
  {
    id: 'm18',
    name: 'Hotjar',
    description: 'Website heatmaps and user behavior analytics tool',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://hotjar.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'marketing',
    tags: ['heatmaps', 'analytics', 'user-behavior']
  },
  {
    id: 'm19',
    name: 'Sumo',
    description: 'Website optimization tools for email capture and traffic growth',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://sumo.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'marketing',
    tags: ['email-capture', 'popups', 'optimization']
  },
  {
    id: 'm20',
    name: 'ConvertKit',
    description: 'Email marketing platform designed for creators and online businesses',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://convertkit.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Creator Pick', type: 'creator-recommended' }
    ],
    category: 'marketing',
    tags: ['email-marketing', 'creators', 'automation']
  },

  // Education Tools (20)
  {
    id: 'e1',
    name: 'Khan Academy',
    description: 'Free online courses, lessons and practice in math, science, and humanities',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://khanacademy.org',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Education Gold', type: 'creator-recommended' }
    ],
    category: 'education',
    tags: ['learning', 'courses', 'math', 'science'],
    featured: true
  },
  {
    id: 'e2',
    name: 'Coursera',
    description: 'Online courses from top universities and companies worldwide',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://coursera.org',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Courses', type: 'lifetime-free' },
      { text: '👨‍💻 University Grade', type: 'creator-recommended' }
    ],
    category: 'education',
    tags: ['courses', 'university', 'certificates']
  },
  {
    id: 'e3',
    name: 'edX',
    description: 'Free online courses from Harvard, MIT, and other top institutions',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://edx.org',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Access', type: 'lifetime-free' },
      { text: '👨‍💻 Academic', type: 'creator-recommended' }
    ],
    category: 'education',
    tags: ['courses', 'harvard', 'mit', 'university']
  },
  {
    id: 'e4',
    name: 'Duolingo',
    description: 'Free language learning app with gamified lessons and progress tracking',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://duolingo.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'education',
    tags: ['languages', 'learning', 'gamification']
  },
  {
    id: 'e5',
    name: 'YouTube',
    description: 'Largest video platform with millions of educational tutorials and courses',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://youtube.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Essential', type: 'creator-recommended' }
    ],
    category: 'education',
    tags: ['videos', 'tutorials', 'learning']
  },
  {
    id: 'e6',
    name: 'MIT OpenCourseWare',
    description: 'Free publication of MIT course materials including lectures and assignments',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://ocw.mit.edu',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 MIT Quality', type: 'creator-recommended' }
    ],
    category: 'education',
    tags: ['mit', 'courses', 'university', 'academic']
  },
  {
    id: 'e7',
    name: 'Codecademy',
    description: 'Interactive coding lessons and programming courses for beginners',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://codecademy.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Courses', type: 'lifetime-free' },
      { text: '👨‍💻 Coding Essential', type: 'creator-recommended' }
    ],
    category: 'education',
    tags: ['coding', 'programming', 'interactive']
  },
  {
    id: 'e8',
    name: 'FreeCodeCamp',
    description: 'Free coding bootcamp with interactive lessons and projects',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://freecodecamp.org',
    trustRating: 'excellent',
    rating: 4.8,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Bootcamp', type: 'creator-recommended' }
    ],
    category: 'education',
    tags: ['coding', 'bootcamp', 'certificates', 'projects']
  },
  {
    id: 'e9',
    name: 'Quizlet',
    description: 'Study tools including flashcards, games, and practice tests',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://quizlet.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'education',
    tags: ['flashcards', 'study', 'memorization']
  },
  {
    id: 'e10',
    name: 'TED-Ed',
    description: 'Educational animated videos and lessons on various topics',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://ed.ted.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'education',
    tags: ['videos', 'animation', 'learning', 'ted']
  },
  {
    id: 'e11',
    name: 'Anki',
    description: 'Spaced repetition flashcard program for effective memorization',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://apps.ankiweb.net',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Student Favorite', type: 'creator-recommended' }
    ],
    category: 'education',
    tags: ['flashcards', 'memorization', 'spaced-repetition']
  },
  {
    id: 'e12',
    name: 'Wolfram Alpha',
    description: 'Computational knowledge engine for math, science, and factual queries',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://wolframalpha.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Queries', type: 'lifetime-free' },
      { text: '👨‍💻 Math Essential', type: 'creator-recommended' }
    ],
    category: 'education',
    tags: ['math', 'computation', 'science', 'calculator']
  },
  {
    id: 'e13',
    name: 'Google Scholar',
    description: 'Search engine for academic literature and scholarly publications',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://scholar.google.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Research Tool', type: 'creator-recommended' }
    ],
    category: 'education',
    tags: ['research', 'academic', 'papers', 'literature']
  },
  {
    id: 'e14',
    name: 'Scratch',
    description: 'Visual programming language for kids to learn coding through creativity',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://scratch.mit.edu',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Kids Coding', type: 'creator-recommended' }
    ],
    category: 'education',
    tags: ['coding', 'kids', 'visual', 'programming']
  },
  {
    id: 'e15',
    name: 'Memrise',
    description: 'Language learning platform with community-created content',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://memrise.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Courses', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'education',
    tags: ['languages', 'community', 'learning']
  },
  {
    id: 'e16',
    name: 'Brilliant',
    description: 'Interactive learning platform for math, science, and computer science',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://brilliant.org',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Content', type: 'lifetime-free' }
    ],
    category: 'education',
    tags: ['math', 'science', 'interactive', 'problem-solving']
  },
  {
    id: 'e17',
    name: 'PhotoMath',
    description: 'Camera calculator app that solves math problems step-by-step',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://photomath.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'education',
    tags: ['math', 'calculator', 'camera', 'step-by-step']
  },
  {
    id: 'e18',
    name: 'Forest',
    description: 'Focus and study app that gamifies productivity with virtual trees',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://forestapp.cc',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'education',
    tags: ['focus', 'study', 'productivity', 'gamification']
  },
  {
    id: 'e19',
    name: 'Grammarly',
    description: 'Writing assistant that checks grammar, spelling, and style',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://grammarly.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Writing Essential', type: 'creator-recommended' }
    ],
    category: 'education',
    tags: ['grammar', 'writing', 'spelling', 'style']
  },
  {
    id: 'e20',
    name: 'Zotero',
    description: 'Research tool to collect, organize, cite, and share academic sources',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://zotero.org',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Research Tool', type: 'creator-recommended' }
    ],
    category: 'education',
    tags: ['research', 'citations', 'academic', 'bibliography']
  },

  // Coding Tools (20)
  {
    id: 'c1',
    name: 'Visual Studio Code',
    description: 'Free source-code editor with debugging, Git control, and extensive extensions',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://code.visualstudio.com',
    trustRating: 'excellent',
    rating: 4.9,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Essential', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['editor', 'programming', 'development', 'microsoft'],
    featured: true
  },
  {
    id: 'c2',
    name: 'GitHub',
    description: 'Version control platform for collaborative software development and code hosting',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    website: 'https://github.com',
    trustRating: 'excellent',
    rating: 4.8,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Industry Standard', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['git', 'collaboration', 'opensource', 'development'],
    featured: true
  },
  {
    id: 'c3',
    name: 'Replit',
    description: 'Online IDE for coding, collaborating, and deploying projects in any language',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://replit.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Beginner Friendly', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['online-ide', 'collaboration', 'deployment']
  },
  {
    id: 'c4',
    name: 'CodePen',
    description: 'Online code editor and social development environment for front-end projects',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://codepen.io',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Frontend Favorite', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['frontend', 'html', 'css', 'javascript', 'playground']
  },
  {
    id: 'c5',
    name: 'JSFiddle',
    description: 'Online playground for testing HTML, CSS, and JavaScript code snippets',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://jsfiddle.net',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'coding',
    tags: ['javascript', 'playground', 'testing', 'frontend']
  },
  {
    id: 'c6',
    name: 'GitLab',
    description: 'DevOps platform with Git repository management, CI/CD, and project planning',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://gitlab.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 DevOps Tool', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['git', 'devops', 'ci-cd', 'collaboration']
  },
  {
    id: 'c7',
    name: 'Stack Overflow',
    description: 'Q&A platform for developers to find solutions and share programming knowledge',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://stackoverflow.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Essential', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['qa', 'help', 'community', 'programming']
  },
  {
    id: 'c8',
    name: 'Sublime Text',
    description: 'Sophisticated text editor for code, markup and prose with great performance',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://sublimetext.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' },
      { text: '👨‍💻 Performance', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['editor', 'text-editor', 'performance', 'coding']
  },
  {
    id: 'c9',
    name: 'Atom',
    description: 'Hackable text editor for the 21st century built by GitHub',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://atom.io',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'coding',
    tags: ['editor', 'github', 'hackable', 'opensource']
  },
  {
    id: 'c10',
    name: 'Postman',
    description: 'API development platform for building, testing, and documenting APIs',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://postman.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 API Essential', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['api', 'testing', 'development', 'documentation']
  },
  {
    id: 'c11',
    name: 'Insomnia',
    description: 'REST API client for testing and debugging HTTP requests and responses',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://insomnia.rest',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'coding',
    tags: ['api', 'rest', 'testing', 'http']
  },
  {
    id: 'c12',
    name: 'Docker',
    description: 'Platform for developing, shipping, and running applications in containers',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://docker.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 DevOps Essential', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['containers', 'deployment', 'devops']
  },
  {
    id: 'c13',
    name: 'Heroku',
    description: 'Cloud platform for deploying and scaling web applications',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://heroku.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Tier', type: 'lifetime-free' }
    ],
    category: 'coding',
    tags: ['deployment', 'cloud', 'hosting', 'scaling']
  },
  {
    id: 'c14',
    name: 'Netlify',
    description: 'Platform for deploying and hosting modern web projects with continuous deployment',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://netlify.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 JAMstack Favorite', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['hosting', 'deployment', 'jamstack', 'cdn']
  },
  {
    id: 'c15',
    name: 'Vercel',
    description: 'Frontend deployment platform optimized for modern web frameworks',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://vercel.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Next.js Creator', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['deployment', 'frontend', 'nextjs', 'react']
  },
  {
    id: 'c16',
    name: 'Firebase',
    description: 'Google\'s platform for mobile and web app development with backend services',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://firebase.google.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Backend Service', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['backend', 'database', 'hosting', 'google']
  },
  {
    id: 'c17',
    name: 'MongoDB Atlas',
    description: 'Cloud database service for modern applications with free tier',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://mongodb.com/atlas',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Tier', type: 'lifetime-free' },
      { text: '👨‍💻 NoSQL Choice', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['database', 'nosql', 'cloud', 'mongodb']
  },
  {
    id: 'c18',
    name: 'Supabase',
    description: 'Open source Firebase alternative with PostgreSQL database and real-time features',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://supabase.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'coding',
    tags: ['backend', 'database', 'postgresql', 'opensource']
  },
  {
    id: 'c19',
    name: 'NPM',
    description: 'Package manager for Node.js with the world\'s largest software registry',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://npmjs.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Essential', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['package-manager', 'nodejs', 'javascript']
  },
  {
    id: 'c20',
    name: 'Swagger',
    description: 'API documentation and design tools for REST APIs',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://swagger.io',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Tools', type: 'lifetime-free' },
      { text: '👨‍💻 API Docs', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['api', 'documentation', 'rest', 'design']
  },
  // Utility Tools
  {
    id: 'util1',
    name: 'Free High-Res QR Code Generator',
    description: 'Create professional, high-resolution QR codes instantly for websites, text, WiFi, and more',
    detailedReview: 'This free QR code generator stands out with its ability to create crisp, high-resolution codes perfect for print materials and large displays. Unlike many free alternatives that limit resolution or add watermarks, this tool delivers clean vector outputs suitable for professional use. Generate codes for URLs, plain text, WiFi credentials, and contact cards. The simple interface makes it ideal for small businesses, event organizers, and marketers who need reliable QR codes without complex software.',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://qrcodegernertor.netlify.app',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'productivity',
    tags: ['qr-code', 'generator', 'utility', 'free'],
    featured: true,
    bestFor: 'freelancers'
  }
]

// Function to get tools by category
export const getToolsByCategory = (categoryId: string): Tool[] => {
  return sampleTools.filter(tool => tool.category === categoryId)
}

// Function to search tools
export const searchTools = (query: string): Tool[] => {
  const lowercaseQuery = query.toLowerCase()
  return sampleTools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    tool.category.toLowerCase().includes(lowercaseQuery)
  )
}

// Function to get featured tools
export const getFeaturedTools = (): Tool[] => {
  return sampleTools.filter(tool => tool.featured)
}