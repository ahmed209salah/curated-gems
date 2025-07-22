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
  {
    id: '1',
    name: 'Figma',
    description: 'Collaborative interface design tool with real-time editing capabilities',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    website: 'https://figma.com',
    trustRating: 'excellent',
    rating: 4.8,
    badges: [
      { text: '🔥 Trending', type: 'trending' },
      { text: '📱 Mobile App', type: 'mobile-friendly' },
      { text: '👨‍💻 Dev Favorite', type: 'creator-recommended' }
    ],
    category: 'design',
    tags: ['ui', 'design', 'collaboration', 'prototyping'],
    featured: true
  },
  {
    id: '2',
    name: 'Canva',
    description: 'Easy-to-use graphic design platform for creating stunning visuals',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    website: 'https://canva.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Forever', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'design',
    tags: ['graphics', 'templates', 'social-media', 'marketing'],
    featured: true
  },
  {
    id: '3',
    name: 'ChatGPT',
    description: 'Advanced AI chatbot for writing, coding, and creative assistance',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    website: 'https://chat.openai.com',
    trustRating: 'excellent',
    rating: 4.7,
    badges: [
      { text: '🔥 Trending', type: 'trending' },
      { text: '👨‍💻 Dev Favorite', type: 'creator-recommended' }
    ],
    category: 'ai',
    tags: ['ai', 'writing', 'coding', 'assistant'],
    featured: true
  },
  {
    id: '4',
    name: 'Notion',
    description: 'All-in-one workspace for notes, tasks, and project management',
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
    id: '5',
    name: 'Framer',
    description: 'Website builder with advanced animations and interactions',
    thumbnail: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop',
    website: 'https://framer.com',
    trustRating: 'good',
    rating: 4.4,
    badges: [
      { text: '💎 Hidden Gem', type: 'hidden-gem' },
      { text: '👨‍💻 Dev Tool', type: 'creator-recommended' }
    ],
    category: 'web',
    tags: ['website', 'animations', 'no-code', 'design'],
  },
  {
    id: '6',
    name: 'VS Code',
    description: 'Free source-code editor with extensive plugin ecosystem',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    website: 'https://code.visualstudio.com',
    trustRating: 'excellent',
    rating: 4.9,
    badges: [
      { text: '💎 Free Forever', type: 'lifetime-free' },
      { text: '👨‍💻 Dev Essential', type: 'creator-recommended' }
    ],
    category: 'coding',
    tags: ['editor', 'programming', 'development', 'microsoft'],
    featured: true
  },
  {
    id: '7',
    name: 'GitHub',
    description: 'Platform for version control and collaborative software development',
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
    id: '8',
    name: 'Unsplash',
    description: 'High-quality stock photos available for free commercial use',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    website: 'https://unsplash.com',
    trustRating: 'excellent',
    rating: 4.6,
    badges: [
      { text: '💎 Free Forever', type: 'lifetime-free' },
      { text: '📸 Creator Favorite', type: 'creator-recommended' }
    ],
    category: 'photography',
    tags: ['stock-photos', 'free', 'commercial-use', 'photography'],
  },
  {
    id: '9',
    name: 'Trello',
    description: 'Visual project management tool using boards, lists, and cards',
    thumbnail: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop',
    website: 'https://trello.com',
    trustRating: 'good',
    rating: 4.3,
    badges: [
      { text: '💎 Free Plan', type: 'lifetime-free' },
      { text: '📱 Mobile App', type: 'mobile-friendly' }
    ],
    category: 'productivity',
    tags: ['kanban', 'project-management', 'collaboration', 'boards'],
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