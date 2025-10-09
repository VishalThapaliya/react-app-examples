import { useState } from 'react';
import './ApplicationsPage.css';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';

// images
import imageGradients from '../../assets/images/image_gradient_generator.png';
import imageAvatarGenerator from '../../assets/images/image_avatar_generator.png';
import appImage from '../../assets/images/react.svg';


const applications = [
  {
    id: 1,
    title: 'Random Gradient Generator',
    description: 'Create stunning gradients for your next project with just one click',
    category: 'productivity',
    tags: ['React', 'JavaScript', 'CSS'],
    image: `${imageGradients}`,
    demoUrl: '/applications/gradient-generator',
    githubUrl: 'https://github.com/VishalThapaliya/react-app-examples/tree/main/src/featuredApps/gradientGenerator',
    featured: true
  },
  {
    id: 2,
    title: 'Avatar Generator',
    description: 'Generate different types of avatar image at a signle place, and download it on just a click.',
    category: 'productivity',
    tags: ['React', 'JavaScript', 'CSS'],
    image: `${imageAvatarGenerator}`,
    demoUrl: '/applications/avatar-generator',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Application',
    description: 'Beautiful weather app with location-based forecasts, interactive maps, and detailed weather analytics.',
    category: 'utility',
    tags: ['React', 'API Integration', 'Charts.js', 'Geolocation'],
    image: `${appImage}`,
    demoUrl: '/apps/weather',
    githubUrl: 'https://github.com/example/weather',
    featured: true
  },
  {
    id: 4,
    title: 'Social Media Feed',
    description: 'Modern social media interface with infinite scroll, real-time notifications, likes, comments, and user profiles.',
    category: 'social',
    tags: ['React', 'Firebase', 'PWA', 'Real-time'],
    image: `${appImage}`,
    demoUrl: '/apps/social-feed',
    githubUrl: 'https://github.com/example/social-feed',
    featured: true
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics dashboard with interactive charts, data visualization, and real-time metrics.',
    category: 'dashboard',
    tags: ['React', 'D3.js', 'Charts', 'Analytics'],
    image: `${appImage}`,
    demoUrl: '/apps/analytics',
    githubUrl: 'https://github.com/example/analytics',
    featured: false
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'Elegant portfolio website with smooth animations, project showcase, and contact form integration.',
    category: 'portfolio',
    tags: ['React', 'Framer Motion', 'CSS Grid', 'Responsive'],
    image: `${appImage}`,
    demoUrl: '/apps/portfolio',
    githubUrl: 'https://github.com/example/portfolio',
    featured: false
  },
  {
    id: 7,
    title: 'Note Taking App',
    description: 'Rich text editor for taking notes with markdown support, tagging system, and cloud synchronization.',
    category: 'productivity',
    tags: ['React', 'Draft.js', 'Cloud Storage', 'Markdown'],
    image: `${appImage}`,
    demoUrl: '/apps/notes',
    githubUrl: 'https://github.com/example/notes',
    featured: false
  },
  {
    id: 8,
    title: 'Chat Application',
    description: 'Real-time chat application with multiple rooms, file sharing, emoji support, and user presence indicators.',
    category: 'social',
    tags: ['React', 'Socket.io', 'Real-time', 'File Upload'],
    image: `${appImage}`,
    demoUrl: '/apps/chat',
    githubUrl: 'https://github.com/example/chat',
    featured: false
  },
  // Additional applications for lazy loading demonstration
  {
    id: 9,
    title: 'Budget Tracker',
    description: 'Personal finance app with expense tracking, budget planning, and financial insights with beautiful charts.',
    category: 'utility',
    tags: ['React', 'Chart.js', 'Local Storage', 'PWA'],
    image: `${appImage}`,
    demoUrl: '/apps/budget-tracker',
    githubUrl: 'https://github.com/example/budget-tracker',
    featured: false
  },
  {
    id: 10,
    title: 'Recipe Manager',
    description: 'Organize your favorite recipes with ingredient lists, cooking instructions, and meal planning features.',
    category: 'utility',
    tags: ['React', 'Context API', 'Local Storage', 'PWA'],
    image: `${appImage}`,
    demoUrl: '/apps/recipe-manager',
    githubUrl: 'https://github.com/example/recipe-manager',
    featured: false
  },
  {
    id: 11,
    title: 'Fitness Tracker',
    description: 'Track your workouts, set fitness goals, and monitor your progress with detailed analytics and charts.',
    category: 'utility',
    tags: ['React', 'Chart.js', 'PWA', 'Fitness API'],
    image: `${appImage}`,
    demoUrl: '/apps/fitness-tracker',
    githubUrl: 'https://github.com/example/fitness-tracker',
    featured: false
  },
  {
    id: 12,
    title: 'Code Snippet Manager',
    description: 'Save and organize your code snippets with syntax highlighting, tagging, and search functionality.',
    category: 'productivity',
    tags: ['React', 'Monaco Editor', 'Search', 'Tags'],
    image: `${appImage}`,
    demoUrl: '/apps/code-snippets',
    githubUrl: 'https://github.com/example/code-snippets',
    featured: false
  },
  {
    id: 13,
    title: 'Music Player',
    description: 'Beautiful music player with playlist management, audio visualization, and modern UI design.',
    category: 'utility',
    tags: ['React', 'Web Audio API', 'Visualizations', 'PWA'],
    image: `${appImage}`,
    demoUrl: '/apps/music-player',
    githubUrl: 'https://github.com/example/music-player',
    featured: false
  },
  {
    id: 14,
    title: 'Invoice Generator',
    description: 'Generate professional invoices with customizable templates, client management, and PDF export.',
    category: 'productivity',
    tags: ['React', 'PDF Generation', 'Templates', 'Client Management'],
    image: `${appImage}`,
    demoUrl: '/apps/invoice-generator',
    githubUrl: 'https://github.com/example/invoice-generator',
    featured: false
  }
];

const ApplicationsPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleApps, setVisibleApps] = useState(6);
  const [loading, setLoading] = useState(false);

  const categories = [
    { id : 'all', name: 'All applications'},
    { id : 'productivity', name: 'Productivity'},
    { id : 'ecommerce', name: 'E-commerce'},
    { id : 'social', name: 'Social Media'},
    { id : 'utility', name: 'Utilities'},
    { id : 'dashboard', name: 'Dashboards'},
    { id : 'portfolio', name: 'Portfolios'},
  ];

  // filter applications by searched name, category, or tag
  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchInput.toLowerCase()) ||
                          app.tags.some(tag => tag.toLowerCase().includes(searchInput.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // get visible applications based on visibleApps count
  const visibleApplications = filteredApplications.slice(0, visibleApps);
  const hasMoreApps = visibleApps < filteredApplications.length;

  // load more applications
  const loadMoreApps = () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleApps(prev => prev + visibleApps);
      setLoading(false);
    }, 800)
  };

  return (
    <div className="application-page">
      <Header />

      <main className="main-application">
        <section className="application-hero">
          <div className="container">
            <h1 className="application-title">Application Collection</h1>
            <p className="application-subtitle">
              Discover a complete collection of React applications. Filter by category or search for specific features.
            </p>
          </div>
        </section>

        <section className="application-filters">
          <div className="container">
            <div className="filters-wrapper">
              <div className="search-wrapper">
                <input 
                  type="text" 
                  placeholder='Search applications...'  
                  className='search-input'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>

              <div className="category-filters">
                {categories.map(({ id, name }) => (
                  <button 
                    key={id}
                    className={`category-btn ${selectedCategory === id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(id)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="application-grid">
          <div className="container">
            <div className="results-header">
              <p className="results-count">
                Showing {visibleApplications.length} of {filteredApplications.length} {filteredApplications.length === 1 ? 'application' : 'applications'}
              </p>
            </div>

            <div className="apps-grid">
              {visibleApplications.map(({ id, title, description, tags, image, demoUrl, githubUrl, featured }, index) => (
                <div key={id} className={`app-card ${featured ? 'featured' : ''}`} style={{ animationDelay: `${index * 0.1}s`}}>
                  { featured && <div className='featured-badge'>Featured</div> }

                  <div className="app-image">
                    <img src={image} alt="title" />
                    <div className="app-overlay">
                      <div className="app-actions">
                        <a href={demoUrl} className="btn-demo" target='_blank'>Live Demo</a>
                        <a href={githubUrl} className="btn-code" target='_blank'>View Code</a>
                      </div>
                    </div>
                  </div>

                  <div className="app-content">
                    <h3 className="app-title">{title}</h3>
                    <p className="app-description">{description}</p>

                    <div className="app-tags">
                      {tags.map(tag => (
                        <span className="app-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {hasMoreApps && (
              <div className='load-more-section'>
                <button 
                  className="btn-load-more"
                  onClick={loadMoreApps}
                  disabled={loading}
                >
                  {loading ? (<><div className="loading-spinner"></div> Loading...</>) : ('Load More Applications')}
                </button>
              </div>
            )}

            {filteredApplications.length === 0 && (
              <div className='no-results'>
                <h3>No applications found</h3>
                <p>Try adjusting your search terms or category filter.</p>
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ApplicationsPage