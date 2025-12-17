export interface Tool {
  id: string
  name: string
  description: string
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
}

export const sampleTools: Tool[] = [
  // Design Tools (20)
  {
    id: 'd1',
    name: 'Figma',
    description: 'Collaborative interface design tool with real-time editing and prototyping',
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
    featured: true
  },
  {
    id: 'd2',
    name: 'Canva',
    description: 'Easy drag-and-drop design tool for social media, presentations, and marketing',
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
    featured: true
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
    featured: true
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

  // Gaming Tools (20)
  {
    id: 'g1',
    name: 'Unity',
    description: 'Cross-platform game engine for 2D/3D game development with C# scripting',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
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
    description: 'Powerful game engine with photorealistic graphics and Blueprint visual scripting',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://unrealengine.com',
    trustRating: 'excellent',
    rating: 4.8,
    badges: [
      { text: '💎 Free to Use', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'gaming',
    tags: ['game-engine', 'aaa', 'graphics', 'development']
  },
  {
    id: 'g3',
    name: 'Godot',
    description: 'Open-source game engine with its own scripting language and active community',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
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
    name: 'Itch.io',
    description: 'Platform for indie game developers to host, sell, and distribute games',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://itch.io',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Indie Favorite', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['distribution', 'indie', 'marketplace', 'community']
  },
  {
    id: 'g5',
    name: 'Game Maker Studio',
    description: 'Beginner-friendly game development tool with drag-and-drop and GML scripting',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://gamemaker.io',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' }
    ],
    category: 'gaming',
    tags: ['game-engine', '2d', 'beginner-friendly', 'drag-drop']
  },
  {
    id: 'g6',
    name: 'Steam',
    description: 'Digital distribution platform for games with social features and workshop',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://store.steampowered.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Platform', type: 'lifetime-free' },
      { text: '👨‍💻 Essential', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['distribution', 'marketplace', 'community', 'workshop']
  },
  {
    id: 'g7',
    name: 'Twitch',
    description: 'Live streaming platform for gamers and creators with monetization options',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://twitch.tv',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free to Stream', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'gaming',
    tags: ['streaming', 'live', 'community', 'monetization']
  },
  {
    id: 'g8',
    name: 'Discord',
    description: 'Voice, video and text platform for gaming communities and team communication',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://discord.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'gaming',
    tags: ['communication', 'voice', 'community', 'servers']
  },
  {
    id: 'g9',
    name: 'OBS Studio',
    description: 'Free open-source software for video recording and live streaming',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://obsproject.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Streamer Essential', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['streaming', 'recording', 'open-source', 'broadcasting']
  },
  {
    id: 'g10',
    name: 'Construct 3',
    description: 'Browser-based game development tool with visual scripting and export options',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://construct.net',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Tier', type: 'lifetime-free' },
      { text: '📱 Web-based', type: 'mobile-friendly' }
    ],
    category: 'gaming',
    tags: ['game-engine', '2d', 'visual-scripting', 'browser']
  },
  {
    id: 'g11',
    name: 'RPG Maker',
    description: 'Game development software specialized for creating RPG games without coding',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://rpgmakerweb.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' }
    ],
    category: 'gaming',
    tags: ['rpg', 'game-maker', 'no-code', 'beginner']
  },
  {
    id: 'g12',
    name: 'Blender Game',
    description: 'Open-source 3D creation suite with game asset creation and animation tools',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://blender.org',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 3D Essential', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['3d-modeling', 'animation', 'assets', 'open-source']
  },
  {
    id: 'g13',
    name: 'Kenney Assets',
    description: 'Free game assets including sprites, 3D models, sounds, and UI elements',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://kenney.nl',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'gaming',
    tags: ['assets', 'sprites', '3d-models', 'free']
  },
  {
    id: 'g14',
    name: 'OpenGameArt',
    description: 'Community-driven platform for free game art, music, and sound effects',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://opengameart.org',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'gaming',
    tags: ['assets', 'art', 'music', 'community']
  },
  {
    id: 'g15',
    name: 'Aseprite',
    description: 'Animated sprite editor and pixel art tool for game developers',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://aseprite.org',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '👨‍💻 Pixel Art Standard', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['pixel-art', 'sprites', 'animation', 'editor']
  },
  {
    id: 'g16',
    name: 'Tiled',
    description: 'Free and open-source tilemap editor for game level design',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://mapeditor.org',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'gaming',
    tags: ['level-design', 'tilemap', 'editor', 'open-source']
  },
  {
    id: 'g17',
    name: 'FMOD',
    description: 'Audio middleware for games with sound design and implementation tools',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://fmod.com',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Indie Free', type: 'lifetime-free' }
    ],
    category: 'gaming',
    tags: ['audio', 'sound-design', 'middleware', 'music']
  },
  {
    id: 'g18',
    name: 'Steamworks',
    description: 'Free suite of tools and services for game developers on Steam',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://partner.steamgames.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Essential', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['sdk', 'multiplayer', 'achievements', 'distribution']
  },
  {
    id: 'g19',
    name: 'Game Jolt',
    description: 'Platform for discovering and sharing indie games with developer community',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://gamejolt.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'gaming',
    tags: ['distribution', 'indie', 'community', 'showcase']
  },
  {
    id: 'g20',
    name: 'Phaser',
    description: 'Fast and free HTML5 game framework for desktop and mobile browser games',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    website: 'https://phaser.io',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Web Games', type: 'creator-recommended' }
    ],
    category: 'gaming',
    tags: ['html5', 'javascript', 'framework', 'web-games']
  },

  // Writing Tools (20)
  {
    id: 'w1',
    name: 'Grammarly',
    description: 'AI-powered writing assistant for grammar, spelling, and style improvements',
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
    description: 'Writing app that highlights complex sentences and common errors',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://hemingwayapp.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Online', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'writing',
    tags: ['readability', 'editing', 'simplicity', 'clarity']
  },
  {
    id: 'w3',
    name: 'Google Docs',
    description: 'Free online word processor with real-time collaboration features',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://docs.google.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Essential', type: 'creator-recommended' }
    ],
    category: 'writing',
    tags: ['documents', 'collaboration', 'cloud', 'word-processor']
  },
  {
    id: 'w4',
    name: 'Notion',
    description: 'All-in-one workspace for notes, writing, and content organization',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://notion.so',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'writing',
    tags: ['notes', 'organization', 'workspace', 'wiki']
  },
  {
    id: 'w5',
    name: 'Medium',
    description: 'Online publishing platform for writers and bloggers to share stories',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://medium.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free to Write', type: 'lifetime-free' },
      { text: '👨‍💻 Blogger Pick', type: 'creator-recommended' }
    ],
    category: 'writing',
    tags: ['blogging', 'publishing', 'stories', 'community']
  },
  {
    id: 'w6',
    name: 'Substack',
    description: 'Platform for independent writers to publish newsletters and monetize',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://substack.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free to Start', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'writing',
    tags: ['newsletters', 'monetization', 'publishing', 'subscription']
  },
  {
    id: 'w7',
    name: 'Scrivener',
    description: 'Writing software for authors with organization and manuscript tools',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://literatureandlatte.com/scrivener',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '👨‍💻 Author Favorite', type: 'creator-recommended' }
    ],
    category: 'writing',
    tags: ['manuscript', 'novel', 'organization', 'authors']
  },
  {
    id: 'w8',
    name: 'Ulysses',
    description: 'Distraction-free writing app for Mac and iOS with markdown support',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://ulysses.app',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '📱 Apple Ecosystem', type: 'mobile-friendly' }
    ],
    category: 'writing',
    tags: ['markdown', 'distraction-free', 'apple', 'focus']
  },
  {
    id: 'w9',
    name: 'ProWritingAid',
    description: 'Grammar checker and style editor with in-depth writing reports',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://prowritingaid.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' }
    ],
    category: 'writing',
    tags: ['grammar', 'style', 'editing', 'reports']
  },
  {
    id: 'w10',
    name: 'Obsidian',
    description: 'Knowledge base that works on local Markdown files with linking',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://obsidian.md',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'writing',
    tags: ['knowledge-base', 'markdown', 'linking', 'notes']
  },
  {
    id: 'w11',
    name: 'Bear',
    description: 'Beautiful note-taking app for Apple devices with markdown support',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://bear.app',
    trustRating: 'good',
    rating: 4.4,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' },
      { text: '📱 Apple Only', type: 'mobile-friendly' }
    ],
    category: 'writing',
    tags: ['notes', 'markdown', 'apple', 'beautiful']
  },
  {
    id: 'w12',
    name: 'Wattpad',
    description: 'Social storytelling platform to read and share stories with readers',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://wattpad.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'writing',
    tags: ['stories', 'social', 'fiction', 'community']
  },
  {
    id: 'w13',
    name: 'Draft',
    description: 'Minimalist writing tool with version control and collaboration',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://draftin.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'writing',
    tags: ['minimalist', 'version-control', 'collaboration', 'focus']
  },
  {
    id: 'w14',
    name: 'LanguageTool',
    description: 'Open-source grammar and style checker for multiple languages',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://languagetool.org',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '💎 Multi-language', type: 'hidden-gem' }
    ],
    category: 'writing',
    tags: ['grammar', 'multilingual', 'open-source', 'checker']
  },
  {
    id: 'w15',
    name: 'Calmly Writer',
    description: 'Distraction-free online editor for focused writing sessions',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://calmlywriter.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'writing',
    tags: ['distraction-free', 'focus', 'minimalist', 'online']
  },
  {
    id: 'w16',
    name: 'Reedsy',
    description: 'Free book editor and publishing resources for authors',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://reedsy.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Editor', type: 'lifetime-free' },
      { text: '👨‍💻 Author Tool', type: 'creator-recommended' }
    ],
    category: 'writing',
    tags: ['book-editor', 'publishing', 'authors', 'formatting']
  },
  {
    id: 'w17',
    name: 'Novelai',
    description: 'AI-powered storytelling assistant for creative writing',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://novelai.net',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'writing',
    tags: ['ai', 'storytelling', 'creative', 'fiction']
  },
  {
    id: 'w18',
    name: 'Wordtune',
    description: 'AI writing companion that helps rewrite and improve sentences',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://wordtune.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'writing',
    tags: ['ai', 'rewriting', 'improvement', 'assistant']
  },
  {
    id: 'w19',
    name: 'Hashnode',
    description: 'Blogging platform for developers with custom domain support',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://hashnode.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Blogger', type: 'creator-recommended' }
    ],
    category: 'writing',
    tags: ['blogging', 'developers', 'tech', 'custom-domain']
  },
  {
    id: 'w20',
    name: 'Ghost',
    description: 'Open-source publishing platform for professional bloggers',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    website: 'https://ghost.org',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Self-hosted Free', type: 'lifetime-free' },
      { text: '👨‍💻 Pro Blogger', type: 'creator-recommended' }
    ],
    category: 'writing',
    tags: ['publishing', 'blogging', 'open-source', 'professional']
  },

  // Photography Tools (20)
  {
    id: 'ph1',
    name: 'Lightroom',
    description: 'Professional photo editing and organization software by Adobe',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://lightroom.adobe.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '👨‍💻 Pro Standard', type: 'creator-recommended' }
    ],
    category: 'photography',
    tags: ['photo-editing', 'professional', 'adobe', 'raw'],
    featured: true
  },
  {
    id: 'ph2',
    name: 'Snapseed',
    description: 'Free mobile photo editor by Google with professional-grade tools',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://snapseed.online',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'photography',
    tags: ['mobile', 'editing', 'filters', 'google']
  },
  {
    id: 'ph3',
    name: 'VSCO',
    description: 'Photo and video editor with film-inspired presets and community',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://vsco.co',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'photography',
    tags: ['presets', 'film', 'community', 'mobile']
  },
  {
    id: 'ph4',
    name: 'Darktable',
    description: 'Open-source photography workflow application and RAW developer',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://darktable.org',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'photography',
    tags: ['raw', 'open-source', 'workflow', 'professional']
  },
  {
    id: 'ph5',
    name: 'RawTherapee',
    description: 'Free cross-platform raw image processing program',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://rawtherapee.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'photography',
    tags: ['raw', 'processing', 'open-source', 'cross-platform']
  },
  {
    id: 'ph6',
    name: 'Unsplash',
    description: 'Free high-resolution photos for commercial and personal use',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://unsplash.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Go-to Resource', type: 'creator-recommended' }
    ],
    category: 'photography',
    tags: ['stock-photos', 'free', 'high-resolution', 'commercial']
  },
  {
    id: 'ph7',
    name: 'Pexels',
    description: 'Free stock photos and videos shared by talented creators',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://pexels.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'photography',
    tags: ['stock-photos', 'videos', 'free', 'creative']
  },
  {
    id: 'ph8',
    name: 'Flickr',
    description: 'Photo sharing platform with storage and community features',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://flickr.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'photography',
    tags: ['sharing', 'storage', 'community', 'portfolio']
  },
  {
    id: 'ph9',
    name: '500px',
    description: 'Photography community for discovering and sharing stunning images',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://500px.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Pro Community', type: 'creator-recommended' }
    ],
    category: 'photography',
    tags: ['community', 'portfolio', 'inspiration', 'licensing']
  },
  {
    id: 'ph10',
    name: 'Fotor',
    description: 'Online photo editor with collage maker and design tools',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://fotor.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Web-based', type: 'mobile-friendly' }
    ],
    category: 'photography',
    tags: ['online-editor', 'collage', 'design', 'easy']
  },
  {
    id: 'ph11',
    name: 'Photopea',
    description: 'Free online photo editor supporting PSD, XCF, and Sketch files',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://photopea.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'photography',
    tags: ['online', 'psd', 'photoshop-alternative', 'free']
  },
  {
    id: 'ph12',
    name: 'Polarr',
    description: 'Photo editor with AI-powered adjustments and custom filters',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://polarr.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' },
      { text: '📱 Cross-platform', type: 'mobile-friendly' }
    ],
    category: 'photography',
    tags: ['ai', 'filters', 'adjustments', 'cross-platform']
  },
  {
    id: 'ph13',
    name: 'Canva Photos',
    description: 'Free photo editing tools integrated with Canva design platform',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://canva.com/photo-editor',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'photography',
    tags: ['editing', 'design', 'easy', 'templates']
  },
  {
    id: 'ph14',
    name: 'Remove.bg',
    description: 'AI-powered tool to remove image backgrounds instantly',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://remove.bg',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Credits', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'photography',
    tags: ['background-removal', 'ai', 'quick', 'automation']
  },
  {
    id: 'ph15',
    name: 'Pixlr',
    description: 'Free online photo editor with advanced editing tools',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://pixlr.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' },
      { text: '📱 Web-based', type: 'mobile-friendly' }
    ],
    category: 'photography',
    tags: ['online', 'advanced', 'editing', 'layers']
  },
  {
    id: 'ph16',
    name: 'Adobe Express',
    description: 'Quick photo editing and design tool from Adobe',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://express.adobe.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'photography',
    tags: ['quick-editing', 'design', 'adobe', 'templates']
  },
  {
    id: 'ph17',
    name: 'Kapwing',
    description: 'Online editor for photos, videos, and memes with collaboration',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://kapwing.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'photography',
    tags: ['online', 'memes', 'video', 'collaboration']
  },
  {
    id: 'ph18',
    name: 'ImageOptim',
    description: 'Free app to compress images without losing quality',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://imageoptim.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Tool', type: 'creator-recommended' }
    ],
    category: 'photography',
    tags: ['compression', 'optimization', 'web', 'performance']
  },
  {
    id: 'ph19',
    name: 'TinyPNG',
    description: 'Smart PNG and JPEG compression for smaller file sizes',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://tinypng.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Usage', type: 'lifetime-free' }
    ],
    category: 'photography',
    tags: ['compression', 'png', 'jpeg', 'web-optimization']
  },
  {
    id: 'ph20',
    name: 'Luminar',
    description: 'AI-powered photo editing software with creative tools',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    website: 'https://skylum.com/luminar',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '👨‍💻 AI-Powered', type: 'creator-recommended' }
    ],
    category: 'photography',
    tags: ['ai', 'creative', 'professional', 'sky-replacement']
  },

  // Music & Audio Tools (20)
  {
    id: 'mu1',
    name: 'Audacity',
    description: 'Free open-source audio editor for recording and editing sounds',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://audacityteam.org',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Essential', type: 'creator-recommended' }
    ],
    category: 'music',
    tags: ['audio-editing', 'recording', 'open-source', 'free'],
    featured: true
  },
  {
    id: 'mu2',
    name: 'GarageBand',
    description: 'Free music creation studio for Mac and iOS users',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://apple.com/garageband',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Apple Only', type: 'mobile-friendly' }
    ],
    category: 'music',
    tags: ['music-creation', 'apple', 'beginner', 'instruments']
  },
  {
    id: 'mu3',
    name: 'LMMS',
    description: 'Free digital audio workstation for music production',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://lmms.io',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'music',
    tags: ['daw', 'production', 'open-source', 'beatmaking']
  },
  {
    id: 'mu4',
    name: 'BandLab',
    description: 'Free online DAW with collaboration and music creation tools',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://bandlab.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'music',
    tags: ['online-daw', 'collaboration', 'social', 'free']
  },
  {
    id: 'mu5',
    name: 'Soundtrap',
    description: 'Cloud-based music and podcast studio for creators',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://soundtrap.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'music',
    tags: ['cloud', 'podcast', 'collaboration', 'online']
  },
  {
    id: 'mu6',
    name: 'Spotify for Artists',
    description: 'Platform for artists to manage music and track analytics',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://artists.spotify.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Artist Essential', type: 'creator-recommended' }
    ],
    category: 'music',
    tags: ['distribution', 'analytics', 'streaming', 'promotion']
  },
  {
    id: 'mu7',
    name: 'SoundCloud',
    description: 'Audio platform for sharing, discovering, and streaming music',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://soundcloud.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'music',
    tags: ['streaming', 'sharing', 'community', 'discovery']
  },
  {
    id: 'mu8',
    name: 'Freesound',
    description: 'Collaborative database of Creative Commons licensed sounds',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://freesound.org',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'music',
    tags: ['sound-effects', 'samples', 'creative-commons', 'free']
  },
  {
    id: 'mu9',
    name: 'Splice',
    description: 'Platform for royalty-free samples, presets, and plugins',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://splice.com',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Samples', type: 'lifetime-free' }
    ],
    category: 'music',
    tags: ['samples', 'presets', 'plugins', 'royalty-free']
  },
  {
    id: 'mu10',
    name: 'Anchor',
    description: 'Free podcast creation tool with hosting and distribution',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://anchor.fm',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'music',
    tags: ['podcast', 'hosting', 'distribution', 'monetization']
  },
  {
    id: 'mu11',
    name: 'Descript',
    description: 'Audio and video editor with AI transcription and overdub',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://descript.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'music',
    tags: ['editing', 'transcription', 'ai', 'podcast']
  },
  {
    id: 'mu12',
    name: 'Mubert',
    description: 'AI-powered royalty-free music generator for content creators',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://mubert.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'music',
    tags: ['ai-music', 'royalty-free', 'generation', 'content']
  },
  {
    id: 'mu13',
    name: 'DistroKid',
    description: 'Music distribution service to get music on all major platforms',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://distrokid.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '👨‍💻 Artist Choice', type: 'creator-recommended' }
    ],
    category: 'music',
    tags: ['distribution', 'streaming', 'spotify', 'apple-music']
  },
  {
    id: 'mu14',
    name: 'Cakewalk',
    description: 'Free professional-grade digital audio workstation for Windows',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://cakewalk.bandlab.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'music',
    tags: ['daw', 'professional', 'windows', 'free']
  },
  {
    id: 'mu15',
    name: 'Amped Studio',
    description: 'Browser-based DAW with virtual instruments and effects',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://ampedstudio.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' },
      { text: '📱 Web-based', type: 'mobile-friendly' }
    ],
    category: 'music',
    tags: ['online-daw', 'browser', 'instruments', 'effects']
  },
  {
    id: 'mu16',
    name: 'Vocalizr',
    description: 'Platform connecting music producers with vocalists',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://vocalizr.com',
    trustRating: 'good',
    rating: 3.9,
    badges: [
      { text: '💎 Free to Browse', type: 'lifetime-free' }
    ],
    category: 'music',
    tags: ['collaboration', 'vocals', 'producers', 'marketplace']
  },
  {
    id: 'mu17',
    name: 'Landr',
    description: 'AI-powered music mastering and distribution platform',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://landr.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Samples', type: 'lifetime-free' }
    ],
    category: 'music',
    tags: ['mastering', 'ai', 'distribution', 'professional']
  },
  {
    id: 'mu18',
    name: 'Hookpad',
    description: 'Music theory and songwriting tool with chord progression helper',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://hooktheory.com/hookpad',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'music',
    tags: ['songwriting', 'theory', 'chords', 'composition']
  },
  {
    id: 'mu19',
    name: 'Epidemic Sound',
    description: 'Royalty-free music library for content creators',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://epidemicsound.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '👨‍💻 Creator Pick', type: 'creator-recommended' }
    ],
    category: 'music',
    tags: ['royalty-free', 'library', 'youtube', 'content']
  },
  {
    id: 'mu20',
    name: 'Artlist',
    description: 'Music and sound effects licensing for video creators',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
    website: 'https://artlist.io',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '👨‍💻 Video Creator', type: 'creator-recommended' }
    ],
    category: 'music',
    tags: ['licensing', 'sound-effects', 'video', 'professional']
  },

  // Business Tools (20)
  {
    id: 'b1',
    name: 'QuickBooks',
    description: 'Accounting software for small businesses and freelancers',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://quickbooks.intuit.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '👨‍💻 Business Essential', type: 'creator-recommended' }
    ],
    category: 'business',
    tags: ['accounting', 'invoicing', 'finance', 'small-business'],
    featured: true
  },
  {
    id: 'b2',
    name: 'Wave',
    description: 'Free accounting and invoicing software for small businesses',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://waveapps.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'business',
    tags: ['accounting', 'invoicing', 'free', 'small-business']
  },
  {
    id: 'b3',
    name: 'Stripe',
    description: 'Payment processing platform for online businesses',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://stripe.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Free to Start', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Standard', type: 'creator-recommended' }
    ],
    category: 'business',
    tags: ['payments', 'processing', 'ecommerce', 'api']
  },
  {
    id: 'b4',
    name: 'PayPal Business',
    description: 'Online payments and money transfers for businesses',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://paypal.com/business',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Account', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['payments', 'invoicing', 'global', 'trusted']
  },
  {
    id: 'b5',
    name: 'HubSpot CRM',
    description: 'Free CRM platform for managing customer relationships',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://hubspot.com/crm',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Sales Essential', type: 'creator-recommended' }
    ],
    category: 'business',
    tags: ['crm', 'sales', 'marketing', 'automation']
  },
  {
    id: 'b6',
    name: 'Zoho CRM',
    description: 'Customer relationship management with sales automation',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://zoho.com/crm',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['crm', 'sales', 'automation', 'analytics']
  },
  {
    id: 'b7',
    name: 'Freshbooks',
    description: 'Cloud accounting software for invoicing and expenses',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://freshbooks.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['invoicing', 'expenses', 'time-tracking', 'freelance']
  },
  {
    id: 'b8',
    name: 'DocuSign',
    description: 'Electronic signature and agreement cloud for businesses',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://docusign.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Contract Essential', type: 'creator-recommended' }
    ],
    category: 'business',
    tags: ['e-signature', 'contracts', 'documents', 'legal']
  },
  {
    id: 'b9',
    name: 'HelloSign',
    description: 'Simple and secure electronic signature solution',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://hellosign.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['e-signature', 'documents', 'simple', 'secure']
  },
  {
    id: 'b10',
    name: 'Calendly',
    description: 'Scheduling automation for meetings and appointments',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://calendly.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Must-Have', type: 'creator-recommended' }
    ],
    category: 'business',
    tags: ['scheduling', 'meetings', 'automation', 'calendar']
  },
  {
    id: 'b11',
    name: 'Loom',
    description: 'Video messaging tool for async communication and demos',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://loom.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'business',
    tags: ['video', 'messaging', 'async', 'communication']
  },
  {
    id: 'b12',
    name: 'Canva Business',
    description: 'Design platform with brand management and team features',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://canva.com/business',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['design', 'branding', 'marketing', 'templates']
  },
  {
    id: 'b13',
    name: 'Miro',
    description: 'Online whiteboard platform for team collaboration',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://miro.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Team Favorite', type: 'creator-recommended' }
    ],
    category: 'business',
    tags: ['whiteboard', 'collaboration', 'brainstorming', 'remote']
  },
  {
    id: 'b14',
    name: 'Typeform',
    description: 'Beautiful forms and surveys with conversational experience',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://typeform.com',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['forms', 'surveys', 'feedback', 'beautiful']
  },
  {
    id: 'b15',
    name: 'Zapier',
    description: 'Automation platform connecting apps and workflows',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://zapier.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Automation King', type: 'creator-recommended' }
    ],
    category: 'business',
    tags: ['automation', 'integrations', 'workflows', 'no-code']
  },
  {
    id: 'b16',
    name: 'Make (Integromat)',
    description: 'Visual automation platform for complex workflows',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://make.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'business',
    tags: ['automation', 'visual', 'integrations', 'advanced']
  },
  {
    id: 'b17',
    name: 'Notion',
    description: 'All-in-one workspace for notes, docs, and project management',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://notion.so',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'business',
    tags: ['workspace', 'docs', 'wiki', 'project-management']
  },
  {
    id: 'b18',
    name: 'Slack',
    description: 'Team messaging and collaboration platform',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://slack.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Team Essential', type: 'creator-recommended' }
    ],
    category: 'business',
    tags: ['messaging', 'team', 'collaboration', 'channels']
  },
  {
    id: 'b19',
    name: 'Microsoft Teams',
    description: 'Business communication platform with chat, meetings, and files',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://microsoft.com/teams',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'business',
    tags: ['communication', 'meetings', 'microsoft', 'enterprise']
  },
  {
    id: 'b20',
    name: 'Google Workspace',
    description: 'Business apps suite including Gmail, Docs, Drive, and Meet',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://workspace.google.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Personal', type: 'lifetime-free' },
      { text: '👨‍💻 Essential Suite', type: 'creator-recommended' }
    ],
    category: 'business',
    tags: ['email', 'docs', 'storage', 'collaboration']
  },

  // Health & Fitness Tools (20)
  {
    id: 'h1',
    name: 'MyFitnessPal',
    description: 'Calorie counting and nutrition tracking app with large food database',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://myfitnesspal.com',
    trustRating: 'excellent',
    rating: 4.4,
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
    description: 'Social fitness app for tracking running, cycling, and activities',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://strava.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['running', 'cycling', 'social', 'tracking']
  },
  {
    id: 'h3',
    name: 'Nike Training Club',
    description: 'Free workout app with guided exercises and training plans',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://nike.com/ntc-app',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['workouts', 'training', 'guided', 'free']
  },
  {
    id: 'h4',
    name: 'Headspace',
    description: 'Meditation and mindfulness app for mental wellness',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://headspace.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Content', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['meditation', 'mindfulness', 'sleep', 'mental-health']
  },
  {
    id: 'h5',
    name: 'Calm',
    description: 'Sleep and meditation app for relaxation and stress relief',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://calm.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Content', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['sleep', 'relaxation', 'meditation', 'stress']
  },
  {
    id: 'h6',
    name: 'Fitbit',
    description: 'Activity tracking platform with wearables integration',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://fitbit.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free App', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['activity', 'wearables', 'steps', 'heart-rate']
  },
  {
    id: 'h7',
    name: 'Samsung Health',
    description: 'Comprehensive health tracking app for Samsung devices',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://samsung.com/health',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['health-tracking', 'samsung', 'activity', 'wellness']
  },
  {
    id: 'h8',
    name: 'Cronometer',
    description: 'Detailed nutrition tracking with micronutrient analysis',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://cronometer.com',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'health',
    tags: ['nutrition', 'micronutrients', 'detailed', 'tracking']
  },
  {
    id: 'h9',
    name: 'Down Dog',
    description: 'Yoga app with personalized practices and varied workouts',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://downdogapp.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Free Content', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['yoga', 'personalized', 'flexibility', 'wellness']
  },
  {
    id: 'h10',
    name: 'Seven',
    description: '7-minute workout app with science-backed HIIT exercises',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://seven.app',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['hiit', 'quick-workouts', 'home', 'no-equipment']
  },
  {
    id: 'h11',
    name: 'Lifesum',
    description: 'Diet and meal planning app with healthy recipes',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://lifesum.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['diet', 'meal-planning', 'recipes', 'nutrition']
  },
  {
    id: 'h12',
    name: 'Sleep Cycle',
    description: 'Smart alarm clock that analyzes sleep patterns',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://sleepcycle.com',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['sleep', 'alarm', 'analysis', 'tracking']
  },
  {
    id: 'h13',
    name: 'Peloton',
    description: 'Digital fitness classes for cycling, running, and strength',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://onepeloton.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Classes', type: 'lifetime-free' }
    ],
    category: 'health',
    tags: ['classes', 'cycling', 'strength', 'community']
  },
  {
    id: 'h14',
    name: 'Flo',
    description: 'Period tracking and women\'s health app',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://flo.health',
    trustRating: 'good',
    rating: 4.4,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['period', 'womens-health', 'fertility', 'tracking']
  },
  {
    id: 'h15',
    name: 'Noom',
    description: 'Psychology-based weight loss and health coaching app',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://noom.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'health',
    tags: ['weight-loss', 'psychology', 'coaching', 'habits']
  },
  {
    id: 'h16',
    name: 'Water Reminder',
    description: 'Hydration tracking app with customizable reminders',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://waterreminder.app',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['hydration', 'water', 'reminders', 'tracking']
  },
  {
    id: 'h17',
    name: 'Insight Timer',
    description: 'Free meditation app with large library of guided sessions',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://insighttimer.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'health',
    tags: ['meditation', 'free', 'guided', 'community']
  },
  {
    id: 'h18',
    name: 'Fitbod',
    description: 'AI-powered strength training workout generator',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://fitbod.me',
    trustRating: 'good',
    rating: 4.4,
    badges: [
      { text: '💎 Free Workouts', type: 'lifetime-free' }
    ],
    category: 'health',
    tags: ['strength', 'ai', 'workout-generator', 'gym']
  },
  {
    id: 'h19',
    name: 'Waking Up',
    description: 'Meditation and mindfulness app by Sam Harris',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://wakingup.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Free Content', type: 'lifetime-free' }
    ],
    category: 'health',
    tags: ['meditation', 'philosophy', 'mindfulness', 'awareness']
  },
  {
    id: 'h20',
    name: 'Lose It!',
    description: 'Weight loss app with calorie counting and barcode scanning',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    website: 'https://loseit.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'health',
    tags: ['weight-loss', 'calories', 'barcode', 'tracking']
  },

  // E-commerce Tools (20)
  {
    id: 'ec1',
    name: 'Shopify',
    description: 'Complete e-commerce platform for building online stores',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://shopify.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '👨‍💻 E-commerce King', type: 'creator-recommended' }
    ],
    category: 'ecommerce',
    tags: ['store-builder', 'payments', 'inventory', 'hosting'],
    featured: true
  },
  {
    id: 'ec2',
    name: 'WooCommerce',
    description: 'Free WordPress e-commerce plugin for online stores',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://woocommerce.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 WordPress Essential', type: 'creator-recommended' }
    ],
    category: 'ecommerce',
    tags: ['wordpress', 'plugin', 'free', 'customizable']
  },
  {
    id: 'ec3',
    name: 'Gumroad',
    description: 'Simple platform for selling digital products and memberships',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://gumroad.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free to Start', type: 'lifetime-free' },
      { text: '👨‍💻 Creator Favorite', type: 'creator-recommended' }
    ],
    category: 'ecommerce',
    tags: ['digital-products', 'creators', 'simple', 'memberships']
  },
  {
    id: 'ec4',
    name: 'Etsy',
    description: 'Marketplace for handmade, vintage, and creative goods',
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
    name: 'Square',
    description: 'Payment processing and point-of-sale solutions',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://squareup.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Account', type: 'lifetime-free' },
      { text: '👨‍💻 Retail Essential', type: 'creator-recommended' }
    ],
    category: 'ecommerce',
    tags: ['payments', 'pos', 'hardware', 'retail']
  },
  {
    id: 'ec6',
    name: 'BigCommerce',
    description: 'Enterprise e-commerce platform for growing businesses',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://bigcommerce.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['enterprise', 'scalable', 'b2b', 'multi-channel']
  },
  {
    id: 'ec7',
    name: 'Stripe',
    description: 'Developer-friendly payment processing infrastructure',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://stripe.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Free to Start', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Standard', type: 'creator-recommended' }
    ],
    category: 'ecommerce',
    tags: ['payments', 'api', 'subscriptions', 'developers']
  },
  {
    id: 'ec8',
    name: 'PayPal',
    description: 'Global payment platform for online transactions',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://paypal.com',
    trustRating: 'excellent',
    rating: 4.2,
    badges: [
      { text: '💎 Free Account', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['payments', 'global', 'checkout', 'trusted']
  },
  {
    id: 'ec9',
    name: 'Sellfy',
    description: 'Simple e-commerce platform for digital creators',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://sellfy.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['digital-products', 'print-on-demand', 'simple', 'creators']
  },
  {
    id: 'ec10',
    name: 'Printful',
    description: 'Print-on-demand dropshipping for custom products',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://printful.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free to Start', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'ecommerce',
    tags: ['print-on-demand', 'dropshipping', 'custom', 'merch']
  },
  {
    id: 'ec11',
    name: 'Printify',
    description: 'Print-on-demand platform with global print providers',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://printify.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['print-on-demand', 'global', 'products', 'dropship']
  },
  {
    id: 'ec12',
    name: 'Oberlo',
    description: 'Dropshipping app for finding products to sell',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://oberlo.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['dropshipping', 'products', 'shopify', 'automation']
  },
  {
    id: 'ec13',
    name: 'Lemlist',
    description: 'Email outreach and sales automation for e-commerce',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://lemlist.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['email', 'outreach', 'sales', 'automation']
  },
  {
    id: 'ec14',
    name: 'Klaviyo',
    description: 'Email and SMS marketing platform for e-commerce',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://klaviyo.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 E-commerce Pick', type: 'creator-recommended' }
    ],
    category: 'ecommerce',
    tags: ['email-marketing', 'sms', 'automation', 'segmentation']
  },
  {
    id: 'ec15',
    name: 'Shippo',
    description: 'Shipping platform with discounted rates and label printing',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://goshippo.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['shipping', 'labels', 'discounts', 'tracking']
  },
  {
    id: 'ec16',
    name: 'Aftership',
    description: 'Shipment tracking and delivery experience platform',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://aftership.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['tracking', 'shipping', 'notifications', 'returns']
  },
  {
    id: 'ec17',
    name: 'Yotpo',
    description: 'Reviews, loyalty, and user-generated content platform',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://yotpo.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['reviews', 'loyalty', 'ugc', 'social-proof']
  },
  {
    id: 'ec18',
    name: 'Privy',
    description: 'Pop-ups and email marketing for e-commerce conversion',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://privy.com',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['popups', 'conversion', 'email', 'exit-intent']
  },
  {
    id: 'ec19',
    name: 'Hotjar',
    description: 'Heatmaps and session recordings for understanding shoppers',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://hotjar.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 UX Essential', type: 'creator-recommended' }
    ],
    category: 'ecommerce',
    tags: ['heatmaps', 'recordings', 'analytics', 'ux']
  },
  {
    id: 'ec20',
    name: 'Smile.io',
    description: 'Loyalty and rewards program for e-commerce stores',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    website: 'https://smile.io',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'ecommerce',
    tags: ['loyalty', 'rewards', 'points', 'referrals']
  },

  // Utilities Tools (20)
  {
    id: 'u1',
    name: 'Bitwarden',
    description: 'Open-source password manager for secure credential storage',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://bitwarden.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Security Essential', type: 'creator-recommended' }
    ],
    category: 'utilities',
    tags: ['password-manager', 'security', 'open-source', 'sync'],
    featured: true
  },
  {
    id: 'u2',
    name: '1Password',
    description: 'Premium password manager with family and team features',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://1password.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' },
      { text: '👨‍💻 Premium Choice', type: 'creator-recommended' }
    ],
    category: 'utilities',
    tags: ['password-manager', 'security', 'family', 'teams']
  },
  {
    id: 'u3',
    name: 'NordVPN',
    description: 'Fast and secure VPN service for online privacy',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://nordvpn.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '👨‍💻 Privacy Choice', type: 'creator-recommended' }
    ],
    category: 'utilities',
    tags: ['vpn', 'privacy', 'security', 'streaming']
  },
  {
    id: 'u4',
    name: 'ProtonVPN',
    description: 'Free secure VPN from the makers of ProtonMail',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://protonvpn.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'utilities',
    tags: ['vpn', 'privacy', 'free', 'swiss']
  },
  {
    id: 'u5',
    name: 'CloudConvert',
    description: 'Online file converter supporting 200+ formats',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://cloudconvert.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Usage', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['converter', 'files', 'formats', 'online']
  },
  {
    id: 'u6',
    name: 'PDF24',
    description: 'Free online PDF tools for editing, merging, and converting',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://tools.pdf24.org',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['pdf', 'editing', 'merging', 'converting']
  },
  {
    id: 'u7',
    name: 'SmallPDF',
    description: 'Online PDF tools for compression, conversion, and editing',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://smallpdf.com',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Usage', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['pdf', 'compression', 'conversion', 'editing']
  },
  {
    id: 'u8',
    name: 'WeTransfer',
    description: 'Simple file sharing for sending large files',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://wetransfer.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free up to 2GB', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['file-sharing', 'transfer', 'large-files', 'simple']
  },
  {
    id: 'u9',
    name: 'Dropbox',
    description: 'Cloud storage and file synchronization service',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://dropbox.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['cloud-storage', 'sync', 'files', 'sharing']
  },
  {
    id: 'u10',
    name: 'Google Drive',
    description: 'Free cloud storage with Google Workspace integration',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://drive.google.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 15GB Free', type: 'lifetime-free' },
      { text: '👨‍💻 Essential', type: 'creator-recommended' }
    ],
    category: 'utilities',
    tags: ['cloud-storage', 'google', 'docs', 'collaboration']
  },
  {
    id: 'u11',
    name: 'Mega',
    description: 'Secure cloud storage with end-to-end encryption',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://mega.io',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 20GB Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'utilities',
    tags: ['cloud-storage', 'encrypted', 'secure', 'large-storage']
  },
  {
    id: 'u12',
    name: 'Temp Mail',
    description: 'Disposable temporary email addresses',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://temp-mail.org',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['email', 'temporary', 'disposable', 'privacy']
  },
  {
    id: 'u13',
    name: 'Have I Been Pwned',
    description: 'Check if your email or phone is in a data breach',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://haveibeenpwned.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Security Tool', type: 'creator-recommended' }
    ],
    category: 'utilities',
    tags: ['security', 'breach', 'privacy', 'checking']
  },
  {
    id: 'u14',
    name: 'Speedtest',
    description: 'Internet connection speed test by Ookla',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://speedtest.net',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['internet', 'speed', 'testing', 'network']
  },
  {
    id: 'u15',
    name: 'VirusTotal',
    description: 'Free service for scanning files and URLs for malware',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://virustotal.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Security Essential', type: 'creator-recommended' }
    ],
    category: 'utilities',
    tags: ['security', 'malware', 'scanning', 'files']
  },
  {
    id: 'u16',
    name: 'Ninite',
    description: 'Install and update multiple programs at once',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://ninite.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'utilities',
    tags: ['installer', 'software', 'updates', 'windows']
  },
  {
    id: 'u17',
    name: 'Unroll.me',
    description: 'Unsubscribe from unwanted emails in one click',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://unroll.me',
    trustRating: 'good',
    rating: 4.0,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' }
    ],
    category: 'utilities',
    tags: ['email', 'unsubscribe', 'cleanup', 'inbox']
  },
  {
    id: 'u18',
    name: 'Pocket',
    description: 'Save articles, videos, and stories for later reading',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://getpocket.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'utilities',
    tags: ['read-later', 'saving', 'articles', 'bookmarks']
  },
  {
    id: 'u19',
    name: 'Raindrop.io',
    description: 'Smart bookmark manager for organizing links',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://raindrop.io',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'utilities',
    tags: ['bookmarks', 'organization', 'collections', 'sync']
  },
  {
    id: 'u20',
    name: 'Carbon',
    description: 'Create beautiful images of source code for sharing',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    website: 'https://carbon.now.sh',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Tool', type: 'creator-recommended' }
    ],
    category: 'utilities',
    tags: ['code', 'screenshots', 'sharing', 'beautiful']
  },

  // Web Tools (20)
  {
    id: 'wt1',
    name: 'WordPress',
    description: 'Popular open-source CMS for building websites and blogs',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://wordpress.org',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Web Standard', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['cms', 'blogging', 'open-source', 'websites'],
    featured: true
  },
  {
    id: 'wt2',
    name: 'Wix',
    description: 'Drag-and-drop website builder with templates',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://wix.com',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'web',
    tags: ['website-builder', 'drag-drop', 'templates', 'hosting']
  },
  {
    id: 'wt3',
    name: 'Squarespace',
    description: 'All-in-one website platform with stunning templates',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://squarespace.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Trial', type: 'lifetime-free' },
      { text: '👨‍💻 Design Award', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['website-builder', 'templates', 'ecommerce', 'beautiful']
  },
  {
    id: 'wt4',
    name: 'Webflow',
    description: 'Visual web design tool with code-level control',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://webflow.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Designer Choice', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['visual-design', 'no-code', 'professional', 'responsive']
  },
  {
    id: 'wt5',
    name: 'Netlify',
    description: 'Platform for deploying modern web projects',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://netlify.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Essential', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['hosting', 'deployment', 'jamstack', 'serverless']
  },
  {
    id: 'wt6',
    name: 'Vercel',
    description: 'Platform for frontend frameworks and static sites',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://vercel.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Next.js Home', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['hosting', 'deployment', 'nextjs', 'edge']
  },
  {
    id: 'wt7',
    name: 'GitHub Pages',
    description: 'Free static site hosting directly from GitHub repos',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://pages.github.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Standard', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['hosting', 'static', 'github', 'free']
  },
  {
    id: 'wt8',
    name: 'Cloudflare',
    description: 'CDN, security, and performance services for websites',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://cloudflare.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 Security Essential', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['cdn', 'security', 'performance', 'dns']
  },
  {
    id: 'wt9',
    name: 'Google Analytics',
    description: 'Free web analytics service for tracking website traffic',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://analytics.google.com',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Analytics Standard', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['analytics', 'tracking', 'google', 'insights']
  },
  {
    id: 'wt10',
    name: 'Google Search Console',
    description: 'Free tool to monitor and optimize Google search presence',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://search.google.com/search-console',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 SEO Essential', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['seo', 'search', 'google', 'optimization']
  },
  {
    id: 'wt11',
    name: 'GTmetrix',
    description: 'Website speed and performance testing tool',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://gtmetrix.com',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'web',
    tags: ['performance', 'speed', 'testing', 'optimization']
  },
  {
    id: 'wt12',
    name: 'PageSpeed Insights',
    description: 'Google tool for analyzing website performance',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://pagespeed.web.dev',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '👨‍💻 Google Tool', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['performance', 'speed', 'google', 'core-web-vitals']
  },
  {
    id: 'wt13',
    name: 'Ubersuggest',
    description: 'SEO tool for keyword research and site audits',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://neilpatel.com/ubersuggest',
    trustRating: 'good',
    rating: 4.1,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' }
    ],
    category: 'web',
    tags: ['seo', 'keywords', 'audit', 'research']
  },
  {
    id: 'wt14',
    name: 'Ahrefs Webmaster Tools',
    description: 'Free SEO tools for website auditing and backlink checking',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://ahrefs.com/webmaster-tools',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free for Site Owners', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'web',
    tags: ['seo', 'backlinks', 'audit', 'professional']
  },
  {
    id: 'wt15',
    name: 'Pingdom',
    description: 'Website monitoring and performance testing service',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://tools.pingdom.com',
    trustRating: 'good',
    rating: 4.2,
    badges: [
      { text: '💎 Free Testing', type: 'lifetime-free' }
    ],
    category: 'web',
    tags: ['monitoring', 'uptime', 'performance', 'testing']
  },
  {
    id: 'wt16',
    name: 'Screaming Frog',
    description: 'Website crawler for SEO audits and analysis',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://screamingfrog.co.uk',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Free Version', type: 'lifetime-free' },
      { text: '👨‍💻 SEO Pro Tool', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['crawler', 'seo', 'audit', 'technical']
  },
  {
    id: 'wt17',
    name: 'Carrd',
    description: 'Simple one-page websites and landing pages',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://carrd.co',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'web',
    tags: ['landing-pages', 'one-page', 'simple', 'portfolio']
  },
  {
    id: 'wt18',
    name: 'Framer',
    description: 'Design and publish responsive websites visually',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://framer.com',
    trustRating: 'excellent',
    rating: 4.4,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '🔥 Trending', type: 'trending' }
    ],
    category: 'web',
    tags: ['design', 'no-code', 'responsive', 'animations']
  },
  {
    id: 'wt19',
    name: 'Hotjar',
    description: 'Heatmaps and behavior analytics for understanding users',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://hotjar.com',
    trustRating: 'excellent',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '👨‍💻 UX Essential', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['heatmaps', 'analytics', 'ux', 'behavior']
  },
  {
    id: 'wt20',
    name: 'Responsively',
    description: 'Browser for testing responsive web designs',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    website: 'https://responsively.app',
    trustRating: 'excellent',
    rating: 4.5,
    badges: [
      { text: '💎 Forever Free', type: 'lifetime-free' },
      { text: '💎 Hidden Gem', type: 'hidden-gem' }
    ],
    category: 'web',
    tags: ['responsive', 'testing', 'browser', 'development']
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