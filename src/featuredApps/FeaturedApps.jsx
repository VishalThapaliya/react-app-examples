import { Link } from 'react-router-dom';
import './FeaturedApps.css';
import appImage from '../assets/images/react.svg';

const featuredApps = [
    {
        id: 1,
        title: 'E-commerce Store',
        description: 'Full-featured online store with cart functionality, payment processing, and admin panel.',
        tags: ['React', 'Firebase', 'PWA'],
        image: `${appImage}`,
        demoUrl: '/apps/dummy-link',
        githubUrl: 'https://github.com/VishalThapaliya/'
    },
    {
        id: 2,
        title: 'Social Media Feed',
        description: 'Modern social media interface with infinite scroll, likes, and real-time comments.',
        tags: ['React', 'Firebase', 'PWA'],
        image: `${appImage}`,
        demoUrl: '/apps/dummy-link',
        githubUrl: 'https://github.com/VishalThapaliya/'
    },
    {
        id: 3,
        title: 'Task Management Dashboard',
        description: 'A modern task management application with real-time updates and team collaboration features.',
        tags: ['React', 'Javascipt', 'CSS'],
        image: `${appImage}`,
        demoUrl: '/apps/dummy-link',
        githubUrl: 'https://github.com/VishalThapaliya/'
    },
    {
        id: 4,
        title: 'Weather App',
        description: 'Beautiful weather application with location-based forecasts and interactive maps.',
        tags: ['React', 'CSS', 'PWA'],
        image: `${appImage}`,
        demoUrl: '/apps/dummy-link',
        githubUrl: 'https://github.com/VishalThapaliya/'
    },
    {
        id: 5,
        title: 'Social Media Feed',
        description: 'Modern social media interface with infinite scroll, likes, and real-time comments.',
        tags: ['React', 'Firebase', 'PWA'],
        image: `${appImage}`,
        demoUrl: '/apps/dummy-link',
        githubUrl: 'https://github.com/VishalThapaliya/'
    },
]
const FeaturedApps = () => {
  return (
    <section className="featured-apps">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Featured Applications</h2>
                <p className="section-description">
                    Explore my handpicked selection of React applications
                </p>
            </div>

            <div className="apps-grid">
                {featuredApps.map((app) => (
                    <div className="app-card" key={app.id}>
                        <div className="app-image">
                            <img src={app.image} alt={app.title} />

                            <div className="app-overlay">
                                <div className="app-actions">
                                    <a href={app.demoUrl} className="btn-demo">Live Demo</a>
                                    <a href={app.githubUrl} className='btn-code'>View Code</a>
                                </div>
                            </div>
                        </div>

                        <div className="app-content">
                            <h3 className="app-title">{app.title}</h3>
                            <p className="app-description">{app.description}</p>

                            <div className="app-tags">
                                {app.tags.map(tag => (
                                    <span className="app-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="section-footer">
                <Link to='/applicatons' className='btn-view-all'>
                    View All Applications
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default FeaturedApps