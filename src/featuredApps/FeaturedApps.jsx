import { Link } from 'react-router-dom';
import './FeaturedApps.css';

// app images
import conceptionUIImage from '../assets/images/image_conceptionUI.png';
import portfolioBishalImage from '../assets/images/image_portfolio_Bishal.png';
import ecommerceCardImage from '../assets/images/image_ecommerce_products.png';
import googleGeminiImage from '../assets/images/image_google_gemini.png';
import portfolioJonathanImage from '../assets/images/image_portfolio_jonathan.png';
import peugeotCarsImage from '../assets/images/image_peugeot_cars.gif';

const featuredApps = [
    {
        id: 1,
        title: 'Conception UI',
        description: 'Describe your app concept in plain language and watch as AI transforms your words into beautiful, interactive mockups in seconds.',
        tags: ['React', 'JS', 'CSS'],
        image: `${conceptionUIImage}`,
        demoUrl: 'https://text-to-ui.netlify.app/',
        githubUrl: 'https://github.com/VishalThapaliya/text-to-design'
    },
    {
        id: 2,
        title: 'Bishal Thapaliya',
        description: 'A modern portfolio website created using React JS, CSS, and react-router to manage multi-page navigations.',
        tags: ['React', 'JS', 'CSS'],
        image: `${portfolioBishalImage}`,
        demoUrl: 'https://bishal-thapaliya.netlify.app/about',
        githubUrl: 'https://github.com/VishalThapaliya/react-resume-portfolio'
    },
    {
        id: 3,
        title: 'Ecommerce Product Card',
        description: 'An elegant product card UI with multiple features such as updating DOM elements based on the stock availablity.',
        tags: ['React', 'Javascipt', 'CSS'],
        image: `${ecommerceCardImage}`,
        demoUrl: 'https://ecommerce-product-card.netlify.app/',
        githubUrl: 'https://github.com/VishalThapaliya/ecommerce-product-card'
    },
    {
        id: 4,
        title: 'Google Gemini',
        description: 'Google Gemini is a clone generative AI application of Gemini from Google that generates the response based on the prompts given by the users.',
        tags: ['React', 'JS', 'CSS', 'GEMINI API'],
        image: `${googleGeminiImage}`,
        demoUrl: 'https://bibi-gemini-clone.netlify.app/',
        githubUrl: 'https://github.com/VishalThapaliya/google-gemini-clone'
    },
    {
        id: 5,
        title: 'Jonathan Tejas Portfolio',
        description: 'A modern responsive portfolio application developed in React and Tailwind CSS.',
        tags: ['React', 'JavaScript', 'Tailwind', 'CSS'],
        image: `${portfolioJonathanImage}`,
        demoUrl: 'https://portfolio-jonathan-tejas.netlify.app/',
        githubUrl: 'https://github.com/VishalThapaliya/portfolio-jonathan-tajes'
    },
    {
        id: 6,
        title: 'Peugeot Cars',
        description: 'A landing page of Peugeot cars with a collection of car image carousal effect.',
        tags: ['React', 'JavaScript', 'CSS'],
        image: `${peugeotCarsImage}`,
        demoUrl: 'https://bibi-cars.netlify.app/',
        githubUrl: 'https://github.com/VishalThapaliya/react-car-landing-page'
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
                                    <a href={app.demoUrl} className="btn-demo" target='_blank'>Live Demo</a>
                                    <a href={app.githubUrl} className='btn-code' target='_blank'>View Code</a>
                                </div>
                            </div>
                        </div>

                        <div className="app-content">
                            <h3 className="app-title">{app.title}</h3>
                            <p className="app-description">{app.description}</p>

                            <div className="app-tags">
                                {app.tags.map(tag => (
                                    <span className="app-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="section-footer">
                <Link to='/applications' className='btn-view-all'>
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