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
  // Gaming Tools (20)
  {
    id: 'g1',
    name: 'Unity',
    description: 'Cross-platform game engine for 2D and 3D game development',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://unity.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Industry Standard', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['game-engine', '3d', '2d', 'development'],
    featured: true
  },
  {
    id: 'g2',
    name: 'Unreal Engine',
    description: 'Powerful game engine for AAA games and real-time 3D experiences',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://unrealengine.com',
    trustRating: 'excellent',
    rating: 4.8,
    badges: [
      { text: '💎 Free to Use', type: 'lifetime-free' },
      { text: '👨‍💻 AAA Quality', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['game-engine', '3d', 'aaa', 'graphics']
  },
  {
    id: 'g3',
    name: 'Godot',
    description: 'Open-source game engine for 2D and 3D games with intuitive design',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://godotengine.org',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'gaming',
    tags: ['game-engine', 'open-source', '2d', '3d']
  },
  {
    id: 'g4',
    name: 'GameMaker',
    description: 'Game development engine ideal for 2D games and beginners',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://gamemaker.io',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'gaming',
    tags: ['game-engine', '2d', 'beginner', 'drag-drop']
  },
  {
    id: 'g5',
    name: 'Itch.io',
    description: 'Marketplace for indie games and game assets',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://itch.io',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Indie Favorite', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['marketplace', 'indie', 'distribution', 'assets']
  },
  {
    id: 'g6',
    name: 'Twitch',
    description: 'Live streaming platform for gamers and content creators',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://twitch.tv',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'gaming',
    tags: ['streaming', 'live', 'community', 'esports']
  },
  {
    id: 'g7',
    name: 'Steam',
    description: 'Largest digital distribution platform for PC gaming',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://store.steampowered.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free to Use', type: 'lifetime-free' },
      { text: '👨‍💻 PC Gaming Essential', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['distribution', 'pc', 'marketplace', 'community']
  },
  {
    id: 'g8',
    name: 'Discord',
    description: 'Voice and text chat for gaming communities',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://discord.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Community Essential', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['communication', 'voice', 'community', 'chat']
  },
  {
    id: 'g9',
    name: 'Kenney Assets',
    description: 'Free game assets including sprites, 3D models, and audio',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://kenney.nl',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'gaming',
    tags: ['assets', 'sprites', '3d-models', 'audio']
  },
  {
    id: 'g10',
    name: 'OpenGameArt',
    description: 'Community-driven free game art repository',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://opengameart.org',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'gaming',
    tags: ['assets', 'art', 'community', 'open-source']
  },
  {
    id: 'g11',
    name: 'Tiled',
    description: 'Free level editor for 2D tile-based games',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://mapeditor.org',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Level Design', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['level-editor', 'tiles', '2d', 'maps']
  },
  {
    id: 'g12',
    name: 'Aseprite Web',
    description: 'Pixel art and animation tool for sprites and game art',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://aseprite.org',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' },
      { text: '👨‍💻 Pixel Art Pro', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['pixel-art', 'animation', 'sprites', '2d']
  },
  {
    id: 'g13',
    name: 'Piskel',
    description: 'Free online pixel art and animated sprite editor',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://piskelapp.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Web-based', type: 'mobile-friendly' }
    ],
    category: 'gaming',
    tags: ['pixel-art', 'sprites', 'animation', 'online']
  },
  {
    id: 'g14',
    name: 'BFXR',
    description: 'Sound effect generator for games and multimedia',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://bfxr.net',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'gaming',
    tags: ['sound-effects', 'audio', 'generator', 'retro']
  },
  {
    id: 'g15',
    name: 'Game Jolt',
    description: 'Community platform for indie game developers',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://gamejolt.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'gaming',
    tags: ['indie', 'community', 'distribution', 'social']
  },
  {
    id: 'g16',
    name: 'OBS Studio',
    description: 'Free open-source software for streaming and recording',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://obsproject.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Streamer Essential', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['streaming', 'recording', 'open-source', 'broadcast']
  },
  {
    id: 'g17',
    name: 'RPG Maker',
    description: 'Game development tool for creating RPGs without coding',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://rpgmakerweb.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'gaming',
    tags: ['rpg', 'game-maker', 'no-code', 'story']
  },
  {
    id: 'g18',
    name: 'Construct 3',
    description: 'Browser-based game development with visual scripting',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://construct.net',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Web-based', type: 'mobile-friendly' }
    ],
    category: 'gaming',
    tags: ['game-engine', 'visual-scripting', 'browser', '2d']
  },
  {
    id: 'g19',
    name: 'Roblox Studio',
    description: 'Create and publish games on the Roblox platform',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://create.roblox.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'gaming',
    tags: ['roblox', 'game-creation', 'lua', 'multiplayer']
  },
  {
    id: 'g20',
    name: 'Mixamo',
    description: 'Free 3D character animations and rigging by Adobe',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop',
    website: 'https://mixamo.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Animation Pro', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['animation', '3d', 'rigging', 'characters']
  },

  // Writing Tools (20)
  {
    id: 'w1',
    name: 'Grammarly',
    description: 'AI-powered writing assistant for grammar, spelling, and style',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://grammarly.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Writer Essential', type: 'creator-recommended' }
    ],
    category: 'writing',
    tags: ['grammar', 'spelling', 'ai', 'editing'],
    featured: true
  },
  {
    id: 'w2',
    name: 'Hemingway Editor',
    description: 'Makes your writing bold and clear by highlighting complex sentences',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://hemingwayapp.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Online', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'writing',
    tags: ['editing', 'readability', 'clarity', 'style']
  },
  {
    id: 'w3',
    name: 'Google Docs',
    description: 'Free online word processor with real-time collaboration',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://docs.google.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Essential', type: 'creator-recommended' }
    ],
    category: 'writing',
    tags: ['word-processor', 'collaboration', 'cloud', 'google']
  },
  {
    id: 'w4',
    name: 'Medium',
    description: 'Publishing platform for writers to share stories and ideas',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://medium.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free to Write', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'writing',
    tags: ['publishing', 'blogging', 'community', 'stories']
  },
  {
    id: 'w5',
    name: 'Substack',
    description: 'Platform for independent writers to publish newsletters',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://substack.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'writing',
    tags: ['newsletters', 'publishing', 'monetization', 'email']
  },
  {
    id: 'w6',
    name: 'Notion',
    description: 'All-in-one workspace for notes, docs, and writing projects',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://notion.so',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Creator Pick', type: 'creator-recommended' }
    ],
    category: 'writing',
    tags: ['notes', 'organization', 'wiki', 'docs']
  },
  {
    id: 'w7',
    name: 'LanguageTool',
    description: 'Open-source grammar and style checker for multiple languages',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://languagetool.org',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'writing',
    tags: ['grammar', 'multilingual', 'open-source', 'proofreading']
  },
  {
    id: 'w8',
    name: 'Scrivener Web',
    description: 'Writing software for authors and long-form content creators',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://literatureandlatte.com/scrivener',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' },
      { text: '👨‍💻 Author Favorite', type: 'creator-recommended' }
    ],
    category: 'writing',
    tags: ['long-form', 'books', 'organization', 'authors']
  },
  {
    id: 'w9',
    name: 'Draft',
    description: 'Simple writing tool with version control and collaboration',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://draftin.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'writing',
    tags: ['version-control', 'collaboration', 'editing', 'simple']
  },
  {
    id: 'w10',
    name: 'Hashnode',
    description: 'Blogging platform for developers and tech writers',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://hashnode.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Blogger', type: 'creator-recommended' }
    ],
    category: 'writing',
    tags: ['blogging', 'tech', 'developers', 'community']
  },
  {
    id: 'w11',
    name: 'Ghost',
    description: 'Open-source publishing platform for professional bloggers',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://ghost.org',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Self-Host', type: 'lifetime-free' }
    ],
    category: 'writing',
    tags: ['cms', 'blogging', 'open-source', 'publishing']
  },
  {
    id: 'w12',
    name: 'Obsidian',
    description: 'Knowledge base with markdown notes and linking',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://obsidian.md',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Personal', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'writing',
    tags: ['notes', 'markdown', 'knowledge-base', 'linking']
  },
  {
    id: 'w13',
    name: 'Bear',
    description: 'Beautiful note-taking app with markdown support',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://bear.app',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'writing',
    tags: ['notes', 'markdown', 'apple', 'beautiful']
  },
  {
    id: 'w14',
    name: 'Ulysses Web',
    description: 'Distraction-free writing app for Mac and iOS',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://ulysses.app',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'writing',
    tags: ['distraction-free', 'markdown', 'apple', 'focus']
  },
  {
    id: 'w15',
    name: 'Wattpad',
    description: 'Social storytelling platform for writers and readers',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://wattpad.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'writing',
    tags: ['stories', 'fiction', 'community', 'social']
  },
  {
    id: 'w16',
    name: 'Reedsy',
    description: 'Free writing tools and marketplace for authors',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://reedsy.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Tools', type: 'lifetime-free' },
      { text: '👨‍💻 Author Resource', type: 'creator-recommended' }
    ],
    category: 'writing',
    tags: ['authors', 'publishing', 'marketplace', 'tools']
  },
  {
    id: 'w17',
    name: 'ProWritingAid',
    description: 'Grammar checker and style editor for professional writers',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://prowritingaid.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'writing',
    tags: ['grammar', 'style', 'editing', 'professional']
  },
  {
    id: 'w18',
    name: 'Calmly Writer',
    description: 'Distraction-free online writing environment',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://calmlywriter.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'writing',
    tags: ['distraction-free', 'minimal', 'focus', 'online']
  },
  {
    id: 'w19',
    name: 'Penzu',
    description: 'Private online diary and journaling platform',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://penzu.com',
    trustRating: 'good',
    rating: 3.9,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'writing',
    tags: ['journal', 'diary', 'private', 'personal']
  },
  {
    id: 'w20',
    name: 'Typeshare',
    description: 'Write and publish across social platforms from one place',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://typeshare.co',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'writing',
    tags: ['social-media', 'publishing', 'cross-platform', 'content']
  },

  // Photography Tools (20)
  {
    id: 'ph1',
    name: 'Lightroom Web',
    description: 'Adobe\'s cloud-based photo editing and organization tool',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://lightroom.adobe.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Pro Choice', type: 'creator-recommended' }
    ],
    category: 'photography',
    tags: ['editing', 'organization', 'cloud', 'adobe'],
    featured: true
  },
  {
    id: 'ph2',
    name: 'Snapseed',
    description: 'Professional photo editing app by Google',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://snapseed.online',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'photography',
    tags: ['editing', 'mobile', 'filters', 'google']
  },
  {
    id: 'ph3',
    name: 'VSCO',
    description: 'Photo editing app with film-inspired presets and filters',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://vsco.co',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'photography',
    tags: ['presets', 'filters', 'mobile', 'film']
  },
  {
    id: 'ph4',
    name: 'RawTherapee',
    description: 'Free open-source RAW image processing software',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://rawtherapee.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'photography',
    tags: ['raw', 'processing', 'open-source', 'professional']
  },
  {
    id: 'ph5',
    name: 'Darktable',
    description: 'Open-source photography workflow application and RAW developer',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://darktable.org',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Pro Alternative', type: 'creator-recommended' }
    ],
    category: 'photography',
    tags: ['raw', 'workflow', 'open-source', 'lightroom-alternative']
  },
  {
    id: 'ph6',
    name: 'Polarr',
    description: 'Advanced photo editor with AI-powered tools',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://polarr.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'photography',
    tags: ['ai', 'editing', 'filters', 'advanced']
  },
  {
    id: 'ph7',
    name: 'Fotor',
    description: 'Online photo editor with collage maker and design tools',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://fotor.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'photography',
    tags: ['editing', 'collage', 'online', 'design']
  },
  {
    id: 'ph8',
    name: 'Pixlr',
    description: 'Free online photo editor with Photoshop-like features',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://pixlr.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Web-based', type: 'mobile-friendly' }
    ],
    category: 'photography',
    tags: ['editing', 'online', 'photoshop-alternative', 'layers']
  },
  {
    id: 'ph9',
    name: '500px',
    description: 'Photography community and marketplace for stunning images',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://500px.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Photo Community', type: 'creator-recommended' }
    ],
    category: 'photography',
    tags: ['community', 'marketplace', 'portfolio', 'inspiration']
  },
  {
    id: 'ph10',
    name: 'Flickr',
    description: 'Photo sharing and hosting platform with large community',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://flickr.com',
    trustRating: 'excellent',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'photography',
    tags: ['sharing', 'hosting', 'community', 'storage']
  },
  {
    id: 'ph11',
    name: 'Pic Collage',
    description: 'Easy-to-use photo collage maker and editor',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://piccollage.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'photography',
    tags: ['collage', 'creative', 'mobile', 'social']
  },
  {
    id: 'ph12',
    name: 'Canva Photo Editor',
    description: 'Integrated photo editing within Canva\'s design platform',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://canva.com/photo-editor',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'photography',
    tags: ['editing', 'design', 'integrated', 'easy']
  },
  {
    id: 'ph13',
    name: 'BeFunky',
    description: 'Photo editor, collage maker, and graphic design tool',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://befunky.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'photography',
    tags: ['editing', 'collage', 'effects', 'online']
  },
  {
    id: 'ph14',
    name: 'JPEG.io',
    description: 'Compress JPEG images for web optimization',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://jpeg.io',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'photography',
    tags: ['compression', 'optimization', 'web', 'utility']
  },
  {
    id: 'ph15',
    name: 'TinyPNG',
    description: 'Smart PNG and JPEG compression for web images',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://tinypng.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Quota', type: 'lifetime-free' },
      { text: '👨‍💻 Web Essential', type: 'creator-recommended' }
    ],
    category: 'photography',
    tags: ['compression', 'png', 'optimization', 'web']
  },
  {
    id: 'ph16',
    name: 'Squoosh',
    description: 'Google\'s image compression tool in your browser',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://squoosh.app',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Tool', type: 'creator-recommended' }
    ],
    category: 'photography',
    tags: ['compression', 'browser', 'google', 'optimization']
  },
  {
    id: 'ph17',
    name: 'IrfanView',
    description: 'Fast and compact image viewer and converter',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://irfanview.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'photography',
    tags: ['viewer', 'converter', 'fast', 'lightweight']
  },
  {
    id: 'ph18',
    name: 'XnConvert',
    description: 'Batch image processing and conversion tool',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://xnview.com/xnconvert',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Personal', type: 'lifetime-free' }
    ],
    category: 'photography',
    tags: ['batch', 'conversion', 'processing', 'utility']
  },
  {
    id: 'ph19',
    name: 'Paint.NET',
    description: 'Free image and photo editing software for Windows',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://getpaint.net',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'photography',
    tags: ['editing', 'windows', 'layers', 'effects']
  },
  {
    id: 'ph20',
    name: 'Affinity Photo Web',
    description: 'Professional photo editing with one-time purchase',
    thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    website: 'https://affinity.serif.com/photo',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' },
      { text: '👨‍💻 Pro Alternative', type: 'creator-recommended' }
    ],
    category: 'photography',
    tags: ['professional', 'editing', 'photoshop-alternative', 'one-time']
  },

  // Music & Audio Tools (20)
  {
    id: 'mu1',
    name: 'Audacity',
    description: 'Free, open-source audio editing and recording software',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://audacityteam.org',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Audio Essential', type: 'creator-recommended' }
    ],
    category: 'music',
    tags: ['editing', 'recording', 'open-source', 'podcast'],
    featured: true
  },
  {
    id: 'mu2',
    name: 'GarageBand',
    description: 'Apple\'s free music creation studio for Mac and iOS',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://apple.com/garageband',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'music',
    tags: ['daw', 'production', 'apple', 'beginner']
  },
  {
    id: 'mu3',
    name: 'LMMS',
    description: 'Free cross-platform digital audio workstation',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://lmms.io',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'music',
    tags: ['daw', 'production', 'open-source', 'beats']
  },
  {
    id: 'mu4',
    name: 'Soundtrap',
    description: 'Online music studio for creating and collaborating',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://soundtrap.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Web-based', type: 'mobile-friendly' }
    ],
    category: 'music',
    tags: ['online', 'collaboration', 'daw', 'spotify']
  },
  {
    id: 'mu5',
    name: 'BandLab',
    description: 'Free online music creation platform with social features',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://bandlab.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'music',
    tags: ['online', 'social', 'collaboration', 'daw']
  },
  {
    id: 'mu6',
    name: 'Spotify for Artists',
    description: 'Tools for musicians to manage their Spotify presence',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://artists.spotify.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Artist Essential', type: 'creator-recommended' }
    ],
    category: 'music',
    tags: ['streaming', 'analytics', 'promotion', 'spotify']
  },
  {
    id: 'mu7',
    name: 'SoundCloud',
    description: 'Music sharing platform for artists and creators',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://soundcloud.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'music',
    tags: ['sharing', 'streaming', 'community', 'upload']
  },
  {
    id: 'mu8',
    name: 'Freesound',
    description: 'Collaborative database of creative-commons licensed sounds',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://freesound.org',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'music',
    tags: ['samples', 'sound-effects', 'creative-commons', 'library']
  },
  {
    id: 'mu9',
    name: 'Splice Free',
    description: 'Royalty-free sounds and samples for music production',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://splice.com/sounds/free',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Samples', type: 'lifetime-free' },
      { text: '👨‍💻 Producer Pick', type: 'creator-recommended' }
    ],
    category: 'music',
    tags: ['samples', 'loops', 'royalty-free', 'production']
  },
  {
    id: 'mu10',
    name: 'Anchor',
    description: 'Free podcast creation and distribution by Spotify',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://anchor.fm',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Podcast Essential', type: 'creator-recommended' }
    ],
    category: 'music',
    tags: ['podcast', 'distribution', 'recording', 'monetization']
  },
  {
    id: 'mu11',
    name: 'Descript',
    description: 'Audio and video editing with text-based workflow',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://descript.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'music',
    tags: ['editing', 'transcription', 'podcast', 'ai']
  },
  {
    id: 'mu12',
    name: 'Cakewalk',
    description: 'Free professional digital audio workstation for Windows',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://cakewalk.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Pro DAW', type: 'creator-recommended' }
    ],
    category: 'music',
    tags: ['daw', 'professional', 'windows', 'recording']
  },
  {
    id: 'mu13',
    name: 'Vocaloid Free',
    description: 'Voice synthesis software for creating vocal tracks',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://vocaloid.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'music',
    tags: ['vocals', 'synthesis', 'virtual-singer', 'production']
  },
  {
    id: 'mu14',
    name: 'Hooktheory',
    description: 'Music theory and songwriting learning platform',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://hooktheory.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Features', type: 'lifetime-free' }
    ],
    category: 'music',
    tags: ['theory', 'songwriting', 'learning', 'chords']
  },
  {
    id: 'mu15',
    name: 'Flat.io',
    description: 'Collaborative music notation software online',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://flat.io',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Web-based', type: 'mobile-friendly' }
    ],
    category: 'music',
    tags: ['notation', 'sheet-music', 'collaboration', 'online']
  },
  {
    id: 'mu16',
    name: 'MuseScore',
    description: 'Free sheet music notation software and community',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://musescore.org',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Notation Standard', type: 'creator-recommended' }
    ],
    category: 'music',
    tags: ['notation', 'sheet-music', 'open-source', 'community']
  },
  {
    id: 'mu17',
    name: 'Landr',
    description: 'AI-powered music mastering and distribution',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://landr.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Samples', type: 'lifetime-free' }
    ],
    category: 'music',
    tags: ['mastering', 'ai', 'distribution', 'samples']
  },
  {
    id: 'mu18',
    name: 'Moises',
    description: 'AI-powered music separation and practice tool',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://moises.ai',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'music',
    tags: ['ai', 'stem-separation', 'practice', 'musicians']
  },
  {
    id: 'mu19',
    name: 'Soundation',
    description: 'Online music production studio in your browser',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://soundation.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Web-based', type: 'mobile-friendly' }
    ],
    category: 'music',
    tags: ['online', 'daw', 'production', 'browser']
  },
  {
    id: 'mu20',
    name: 'Looperman',
    description: 'Free loops and samples for music producers',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    website: 'https://looperman.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'music',
    tags: ['loops', 'samples', 'free', 'community']
  },

  // Business Tools (20)
  {
    id: 'b1',
    name: 'Wave',
    description: 'Free accounting and invoicing software for small businesses',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://waveapps.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Small Biz Essential', type: 'creator-recommended' }
    ],
    category: 'business',
    tags: ['accounting', 'invoicing', 'finance', 'small-business'],
    featured: true
  },
  {
    id: 'b2',
    name: 'Zoho Books',
    description: 'Online accounting software for growing businesses',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://zoho.com/books',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['accounting', 'invoicing', 'zoho', 'finance']
  },
  {
    id: 'b3',
    name: 'Canva Business',
    description: 'Design platform for business branding and marketing materials',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://canva.com/business',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Brand Essential', type: 'creator-recommended' }
    ],
    category: 'business',
    tags: ['design', 'branding', 'marketing', 'templates']
  },
  {
    id: 'b4',
    name: 'DocuSign',
    description: 'Electronic signature and agreement cloud platform',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://docusign.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['esignature', 'contracts', 'legal', 'documents']
  },
  {
    id: 'b5',
    name: 'HelloSign',
    description: 'Simple electronic signature solution for documents',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://hellosign.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['esignature', 'documents', 'simple', 'dropbox']
  },
  {
    id: 'b6',
    name: 'Loom',
    description: 'Video messaging for async communication and demos',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://loom.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'business',
    tags: ['video', 'communication', 'async', 'screen-recording']
  },
  {
    id: 'b7',
    name: 'Miro',
    description: 'Online collaborative whiteboard for team brainstorming',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://miro.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Team Favorite', type: 'creator-recommended' }
    ],
    category: 'business',
    tags: ['whiteboard', 'collaboration', 'brainstorming', 'remote']
  },
  {
    id: 'b8',
    name: 'Lucidchart',
    description: 'Diagramming and visual communication platform',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://lucidchart.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['diagrams', 'flowcharts', 'visualization', 'planning']
  },
  {
    id: 'b9',
    name: 'Expensify',
    description: 'Expense management and receipt tracking for businesses',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://expensify.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'business',
    tags: ['expenses', 'receipts', 'tracking', 'finance']
  },
  {
    id: 'b10',
    name: 'Freshdesk',
    description: 'Customer support and helpdesk software',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://freshdesk.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['support', 'helpdesk', 'tickets', 'customer-service']
  },
  {
    id: 'b11',
    name: 'Zendesk',
    description: 'Customer service and engagement platform',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://zendesk.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['customer-service', 'tickets', 'support', 'chat']
  },
  {
    id: 'b12',
    name: 'Intercom',
    description: 'Customer messaging platform for sales and support',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://intercom.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['chat', 'messaging', 'sales', 'support']
  },
  {
    id: 'b13',
    name: 'Crisp',
    description: 'Business messaging and customer engagement platform',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://crisp.chat',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['chat', 'messaging', 'customer', 'engagement']
  },
  {
    id: 'b14',
    name: 'Jotform',
    description: 'Online form builder for business data collection',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://jotform.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['forms', 'surveys', 'data-collection', 'automation']
  },
  {
    id: 'b15',
    name: 'Invoice Ninja',
    description: 'Free open-source invoicing and payment platform',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://invoiceninja.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'business',
    tags: ['invoicing', 'payments', 'open-source', 'billing']
  },
  {
    id: 'b16',
    name: 'Bitrix24',
    description: 'Free CRM and project management suite',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://bitrix24.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['crm', 'project-management', 'collaboration', 'all-in-one']
  },
  {
    id: 'b17',
    name: 'Pipedrive',
    description: 'Sales CRM and pipeline management software',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://pipedrive.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['crm', 'sales', 'pipeline', 'leads']
  },
  {
    id: 'b18',
    name: 'Stripe Atlas',
    description: 'Company formation and startup infrastructure',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://stripe.com/atlas',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '👨‍💻 Startup Essential', type: 'creator-recommended' }
    ],
    category: 'business',
    tags: ['startup', 'incorporation', 'infrastructure', 'stripe']
  },
  {
    id: 'b19',
    name: 'Gusto',
    description: 'Payroll, benefits, and HR platform for businesses',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://gusto.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['payroll', 'hr', 'benefits', 'employees']
  },
  {
    id: 'b20',
    name: 'Deel',
    description: 'Global hiring and payroll for remote teams',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    website: 'https://deel.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'business',
    tags: ['payroll', 'global', 'remote', 'hiring']
  },

  // Health & Fitness Tools (20)
  {
    id: 'h1',
    name: 'MyFitnessPal',
    description: 'Calorie counter and diet tracker with huge food database',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://myfitnesspal.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['nutrition', 'calories', 'tracking', 'diet'],
    featured: true
  },
  {
    id: 'h2',
    name: 'Strava',
    description: 'Social fitness tracking for runners and cyclists',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://strava.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['running', 'cycling', 'gps', 'social']
  },
  {
    id: 'h3',
    name: 'Nike Training Club',
    description: 'Free workout app with training programs and exercises',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://nike.com/ntc-app',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['workouts', 'training', 'exercises', 'nike']
  },
  {
    id: 'h4',
    name: 'Headspace',
    description: 'Meditation and mindfulness app for mental wellness',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://headspace.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Content', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['meditation', 'mindfulness', 'mental-health', 'sleep']
  },
  {
    id: 'h5',
    name: 'Calm',
    description: 'Sleep, meditation, and relaxation app',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://calm.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Content', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['sleep', 'meditation', 'relaxation', 'stress']
  },
  {
    id: 'h6',
    name: 'Fitbit',
    description: 'Health and fitness tracking ecosystem',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://fitbit.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free App', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['fitness', 'tracking', 'wearables', 'health']
  },
  {
    id: 'h7',
    name: 'Samsung Health',
    description: 'Comprehensive health and fitness tracking app',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://samsung.com/health',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['health', 'fitness', 'tracking', 'samsung']
  },
  {
    id: 'h8',
    name: 'Cronometer',
    description: 'Detailed nutrition tracking with micronutrients',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://cronometer.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'health',
    tags: ['nutrition', 'micronutrients', 'tracking', 'detailed']
  },
  {
    id: 'h9',
    name: 'Lose It!',
    description: 'Weight loss app with calorie counting and goals',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://loseit.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['weight-loss', 'calories', 'goals', 'tracking']
  },
  {
    id: 'h10',
    name: 'Down Dog',
    description: 'Personalized yoga app with unique workouts',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://downdogapp.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Access', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['yoga', 'personalized', 'flexibility', 'wellness']
  },
  {
    id: 'h11',
    name: 'Insight Timer',
    description: 'Free meditation app with largest library of content',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://insighttimer.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Best Free', type: 'creator-recommended' }
    ],
    category: 'health',
    tags: ['meditation', 'free', 'library', 'community']
  },
  {
    id: 'h12',
    name: 'Couch to 5K',
    description: 'Running program for beginners to reach 5K',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://c25k.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['running', 'beginner', 'program', '5k']
  },
  {
    id: 'h13',
    name: 'Zombies, Run!',
    description: 'Gamified running app with immersive story',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://zombiesrungame.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Missions', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'health',
    tags: ['running', 'gamification', 'story', 'fun']
  },
  {
    id: 'h14',
    name: 'Seven - 7 Minute Workout',
    description: 'Quick, effective workouts in just 7 minutes',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://seven.app',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['quick', 'workouts', 'hiit', 'busy']
  },
  {
    id: 'h15',
    name: 'Sleep Cycle',
    description: 'Smart alarm clock that tracks sleep patterns',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://sleepcycle.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Features', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['sleep', 'alarm', 'tracking', 'quality']
  },
  {
    id: 'h16',
    name: 'Flo',
    description: 'Period and ovulation tracker for women\'s health',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://flo.health',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['period', 'ovulation', 'womens-health', 'tracking']
  },
  {
    id: 'h17',
    name: 'Daylio',
    description: 'Mood tracking and micro-diary app',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://daylio.net',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['mood', 'mental-health', 'diary', 'tracking']
  },
  {
    id: 'h18',
    name: 'Woebot',
    description: 'AI chatbot for mental health support',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://woebothealth.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'health',
    tags: ['ai', 'mental-health', 'chatbot', 'therapy']
  },
  {
    id: 'h19',
    name: 'WaterMinder',
    description: 'Daily water intake tracker and reminder',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://waterminder.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Features', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['water', 'hydration', 'reminders', 'tracking']
  },
  {
    id: 'h20',
    name: 'Yazio',
    description: 'Calorie counter and fasting tracker',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://yazio.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['calories', 'fasting', 'diet', 'tracking']
  },

  // E-commerce Tools (20)
  {
    id: 'ec1',
    name: 'WooCommerce',
    description: 'Free open-source e-commerce plugin for WordPress',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://woocommerce.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 WordPress Essential', type: 'creator-recommended' }
    ],
    category: 'ecommerce',
    tags: ['wordpress', 'store', 'open-source', 'plugins'],
    featured: true
  },
  {
    id: 'ec2',
    name: 'Shopify',
    description: 'Complete e-commerce platform for online stores',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://shopify.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' },
      { text: '👨‍💻 Industry Leader', type: 'creator-recommended' }
    ],
    category: 'ecommerce',
    tags: ['store', 'platform', 'payments', 'hosting']
  },
  {
    id: 'ec3',
    name: 'Gumroad',
    description: 'Sell digital products and memberships directly to fans',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://gumroad.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free to Start', type: 'lifetime-free' },
      { text: '👨‍💻 Creator Favorite', type: 'creator-recommended' }
    ],
    category: 'ecommerce',
    tags: ['digital-products', 'creators', 'memberships', 'simple']
  },
  {
    id: 'ec4',
    name: 'Etsy',
    description: 'Marketplace for handmade, vintage, and unique goods',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://etsy.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Listings', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['handmade', 'marketplace', 'vintage', 'crafts']
  },
  {
    id: 'ec5',
    name: 'Square Online',
    description: 'Free online store builder with integrated payments',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://squareup.com/online-store',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['store', 'payments', 'square', 'simple']
  },
  {
    id: 'ec6',
    name: 'Stripe',
    description: 'Payment processing platform for internet businesses',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://stripe.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Pay Per Use', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Essential', type: 'creator-recommended' }
    ],
    category: 'ecommerce',
    tags: ['payments', 'processing', 'api', 'developers']
  },
  {
    id: 'ec7',
    name: 'PayPal Business',
    description: 'Online payments and checkout solution',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://paypal.com/business',
    trustRating: 'excellent',
    rating: 4.1,
    badges: [
      { text: '💎 Free Account', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['payments', 'checkout', 'invoicing', 'global']
  },
  {
    id: 'ec8',
    name: 'Printful',
    description: 'Print-on-demand dropshipping and fulfillment',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://printful.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free to Use', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'ecommerce',
    tags: ['print-on-demand', 'dropshipping', 'merchandise', 'fulfillment']
  },
  {
    id: 'ec9',
    name: 'Printify',
    description: 'Print-on-demand platform with product mockups',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://printify.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['print-on-demand', 'mockups', 'merchandise', 'products']
  },
  {
    id: 'ec10',
    name: 'Sellfy',
    description: 'Simple e-commerce platform for digital creators',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://sellfy.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['digital', 'creators', 'simple', 'store']
  },
  {
    id: 'ec11',
    name: 'Lemon Squeezy',
    description: 'Payments and subscriptions for software businesses',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://lemonsqueezy.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Pay Per Use', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'ecommerce',
    tags: ['saas', 'subscriptions', 'payments', 'software']
  },
  {
    id: 'ec12',
    name: 'Ko-fi',
    description: 'Accept donations and sell products to supporters',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://ko-fi.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Creator Friendly', type: 'creator-recommended' }
    ],
    category: 'ecommerce',
    tags: ['donations', 'creators', 'tips', 'support']
  },
  {
    id: 'ec13',
    name: 'Buy Me a Coffee',
    description: 'Support platform for creators with donations and memberships',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://buymeacoffee.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['donations', 'memberships', 'creators', 'support']
  },
  {
    id: 'ec14',
    name: 'Patreon',
    description: 'Membership platform for creators to earn from fans',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://patreon.com',
    trustRating: 'excellent',
    rating: 4.1,
    badges: [
      { text: '💎 Free to Start', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['memberships', 'subscriptions', 'creators', 'community']
  },
  {
    id: 'ec15',
    name: 'Podia',
    description: 'Sell courses, memberships, and digital downloads',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://podia.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['courses', 'memberships', 'downloads', 'creators']
  },
  {
    id: 'ec16',
    name: 'Teachable',
    description: 'Create and sell online courses',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://teachable.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['courses', 'education', 'online-learning', 'creators']
  },
  {
    id: 'ec17',
    name: 'Thinkific',
    description: 'Platform to create, market, and sell online courses',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://thinkific.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['courses', 'marketing', 'education', 'platform']
  },
  {
    id: 'ec18',
    name: 'Ecwid',
    description: 'Free e-commerce plugin for any website',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://ecwid.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['plugin', 'widget', 'store', 'integration']
  },
  {
    id: 'ec19',
    name: 'Big Cartel',
    description: 'Simple online store for artists and makers',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://bigcartel.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['artists', 'makers', 'simple', 'store']
  },
  {
    id: 'ec20',
    name: 'Snipcart',
    description: 'Shopping cart for any website with developer focus',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://snipcart.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Pay Per Use', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Friendly', type: 'creator-recommended' }
    ],
    category: 'ecommerce',
    tags: ['cart', 'developers', 'integration', 'api']
  },

  // Utilities Tools (20)
  {
    id: 'util1',
    name: 'Free High-Res QR Code Generator',
    description: 'Create professional, high-resolution QR codes instantly',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://qrcodegernertor.netlify.app',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'utilities',
    tags: ['qr-code', 'generator', 'utility', 'free'],
    featured: true
  },
  {
    id: 'util2',
    name: '1Password',
    description: 'Password manager for secure credential storage',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://1password.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' },
      { text: '👨‍💻 Security Essential', type: 'creator-recommended' }
    ],
    category: 'utilities',
    tags: ['passwords', 'security', 'vault', 'credentials']
  },
  {
    id: 'util3',
    name: 'Bitwarden',
    description: 'Open-source password manager for individuals and teams',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://bitwarden.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'utilities',
    tags: ['passwords', 'open-source', 'security', 'free']
  },
  {
    id: 'util4',
    name: 'LastPass',
    description: 'Password manager with secure sharing',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://lastpass.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['passwords', 'sharing', 'security', 'autofill']
  },
  {
    id: 'util5',
    name: 'Dropbox',
    description: 'Cloud storage and file synchronization service',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://dropbox.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['storage', 'cloud', 'sync', 'files']
  },
  {
    id: 'util6',
    name: 'Google Drive',
    description: 'Cloud storage integrated with Google Workspace',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://drive.google.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 15GB Free', type: 'lifetime-free' },
      { text: '👨‍💻 Essential', type: 'creator-recommended' }
    ],
    category: 'utilities',
    tags: ['storage', 'cloud', 'google', 'collaboration']
  },
  {
    id: 'util7',
    name: 'WeTransfer',
    description: 'Simple large file transfer service',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://wetransfer.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free 2GB', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['file-transfer', 'sharing', 'large-files', 'simple']
  },
  {
    id: 'util8',
    name: 'NordVPN',
    description: 'Virtual private network for online security',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://nordvpn.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['vpn', 'privacy', 'security', 'network']
  },
  {
    id: 'util9',
    name: 'ProtonVPN',
    description: 'Free VPN service with no data limits',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://protonvpn.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'utilities',
    tags: ['vpn', 'free', 'privacy', 'unlimited']
  },
  {
    id: 'util10',
    name: 'CCleaner',
    description: 'System optimization and cleaning utility',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://ccleaner.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['cleaning', 'optimization', 'system', 'windows']
  },
  {
    id: 'util11',
    name: '7-Zip',
    description: 'Free file archiver with high compression ratio',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://7-zip.org',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Essential', type: 'creator-recommended' }
    ],
    category: 'utilities',
    tags: ['compression', 'archiving', 'zip', 'files']
  },
  {
    id: 'util12',
    name: 'VLC Media Player',
    description: 'Free multimedia player for all formats',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://videolan.org/vlc',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Essential', type: 'creator-recommended' }
    ],
    category: 'utilities',
    tags: ['media', 'player', 'video', 'audio']
  },
  {
    id: 'util13',
    name: 'ShareX',
    description: 'Free screenshot and screen recording tool',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://getsharex.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'utilities',
    tags: ['screenshot', 'recording', 'screen-capture', 'sharing']
  },
  {
    id: 'util14',
    name: 'Greenshot',
    description: 'Lightweight screenshot tool for Windows',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://getgreenshot.org',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['screenshot', 'windows', 'lightweight', 'capture']
  },
  {
    id: 'util15',
    name: 'f.lux',
    description: 'Adjusts screen color temperature for eye comfort',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://justgetflux.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['eye-care', 'blue-light', 'screen', 'health']
  },
  {
    id: 'util16',
    name: 'Spectacle',
    description: 'Window management for macOS with keyboard shortcuts',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://spectacleapp.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['window-management', 'macos', 'keyboard', 'productivity']
  },
  {
    id: 'util17',
    name: 'Alfred',
    description: 'Productivity app and application launcher for Mac',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://alfredapp.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' },
      { text: '👨‍💻 Mac Essential', type: 'creator-recommended' }
    ],
    category: 'utilities',
    tags: ['launcher', 'macos', 'productivity', 'automation']
  },
  {
    id: 'util18',
    name: 'Raycast',
    description: 'Extendable launcher for macOS with powerful features',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://raycast.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'utilities',
    tags: ['launcher', 'macos', 'extensions', 'productivity']
  },
  {
    id: 'util19',
    name: 'Notion Web Clipper',
    description: 'Save web pages and content to Notion',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://notion.so/web-clipper',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['web-clipper', 'notion', 'saving', 'bookmarks']
  },
  {
    id: 'util20',
    name: 'Pocket',
    description: 'Save articles, videos, and stories to view later',
    thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=300&fit=crop',
    website: 'https://getpocket.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'utilities',
    tags: ['read-later', 'bookmarks', 'articles', 'saving']
  },

  // Web Tools (20)
  {
    id: 'web1',
    name: 'WordPress',
    description: 'Open-source content management system for websites',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://wordpress.org',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Industry Standard', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['cms', 'blogging', 'website', 'open-source'],
    featured: true
  },
  {
    id: 'web2',
    name: 'Webflow',
    description: 'Visual web design tool with hosting and CMS',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://webflow.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Designer Favorite', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['visual-design', 'no-code', 'cms', 'hosting']
  },
  {
    id: 'web3',
    name: 'Wix',
    description: 'Drag-and-drop website builder for anyone',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://wix.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'web',
    tags: ['website-builder', 'drag-drop', 'templates', 'easy']
  },
  {
    id: 'web4',
    name: 'Squarespace',
    description: 'All-in-one website builder with beautiful templates',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://squarespace.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'web',
    tags: ['website-builder', 'templates', 'design', 'hosting']
  },
  {
    id: 'web5',
    name: 'Carrd',
    description: 'Simple, free one-page site builder',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://carrd.co',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'web',
    tags: ['landing-page', 'simple', 'one-page', 'portfolio']
  },
  {
    id: 'web6',
    name: 'Framer',
    description: 'Design and publish interactive websites',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://framer.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'web',
    tags: ['interactive', 'design', 'animation', 'publishing']
  },
  {
    id: 'web7',
    name: 'Bubble',
    description: 'No-code platform to build web applications',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://bubble.io',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'web',
    tags: ['no-code', 'web-apps', 'database', 'logic']
  },
  {
    id: 'web8',
    name: 'Glitch',
    description: 'Collaborative platform for web development',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://glitch.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Friendly', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['development', 'collaboration', 'hosting', 'learning']
  },
  {
    id: 'web9',
    name: 'GTmetrix',
    description: 'Website performance testing and monitoring',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://gtmetrix.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Tests', type: 'lifetime-free' },
      { text: '👨‍💻 Performance Tool', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['performance', 'testing', 'speed', 'optimization']
  },
  {
    id: 'web10',
    name: 'PageSpeed Insights',
    description: 'Google\'s tool for analyzing web page performance',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://pagespeed.web.dev',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Google Tool', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['performance', 'google', 'speed', 'core-web-vitals']
  },
  {
    id: 'web11',
    name: 'Pingdom',
    description: 'Website monitoring and performance tracking',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://pingdom.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'web',
    tags: ['monitoring', 'uptime', 'performance', 'alerts']
  },
  {
    id: 'web12',
    name: 'Cloudflare',
    description: 'CDN, security, and performance for websites',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://cloudflare.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Essential', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['cdn', 'security', 'dns', 'performance']
  },
  {
    id: 'web13',
    name: 'Namecheap',
    description: 'Domain registration and web hosting services',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://namecheap.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Low Cost', type: 'lifetime-free' }
    ],
    category: 'web',
    tags: ['domains', 'hosting', 'registration', 'affordable']
  },
  {
    id: 'web14',
    name: 'Google Domains',
    description: 'Domain registration and management by Google',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://domains.google',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '👨‍💻 Simple', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['domains', 'google', 'registration', 'simple']
  },
  {
    id: 'web15',
    name: 'Ahrefs Webmaster Tools',
    description: 'Free SEO audit and backlink analysis',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://ahrefs.com/webmaster-tools',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 SEO Essential', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['seo', 'backlinks', 'audit', 'analysis']
  },
  {
    id: 'web16',
    name: 'Screaming Frog',
    description: 'Website crawler for SEO audits and analysis',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://screamingfrog.co.uk',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free 500 URLs', type: 'lifetime-free' },
      { text: '👨‍💻 SEO Pro Tool', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['crawler', 'seo', 'audit', 'technical']
  },
  {
    id: 'web17',
    name: 'Sitebulb',
    description: 'Website auditing tool with visual insights',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://sitebulb.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'web',
    tags: ['auditing', 'seo', 'visual', 'crawler']
  },
  {
    id: 'web18',
    name: 'Can I Use',
    description: 'Browser compatibility tables for web technologies',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://caniuse.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Essential', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['compatibility', 'browsers', 'css', 'javascript']
  },
  {
    id: 'web19',
    name: 'CSS Gradient',
    description: 'Visual CSS gradient generator',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://cssgradient.io',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'web',
    tags: ['css', 'gradients', 'design', 'generator']
  },
  {
    id: 'web20',
    name: 'Responsively',
    description: 'Browser for responsive web development',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://responsively.app',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'web',
    tags: ['responsive', 'testing', 'development', 'browser']
  }
]

// Function to get tool by ID
export const getToolById = (id: string): Tool | undefined => {
  return sampleTools.find(tool => tool.id === id)
}

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
    tool.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}

// Function to get featured tools
export const getFeaturedTools = (): Tool[] => {
  return sampleTools.filter(tool => tool.featured)
}