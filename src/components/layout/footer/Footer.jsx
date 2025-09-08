import { Link } from 'react-router-dom';
import logoImage from '../../../assets/images/logo.png';

import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { id: 1, name: 'Applications', path: '/applications'},
        { id: 2, name: 'Blogs', path: 'https://dev.to/vishalthapaliya'},   
        { id: 3, name: 'About', path: '/about'},   
        { id: 4, name: 'Contact', path: '/contact'},   
    ];

    const socialLinks = [
        {
            id: 1, 
            name: 'GitHub', 
            url: 'https://github.com/VishalThapaliya/', 
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            )
        },
        {
            id: 2, 
            name: 'LinkedIn', 
            url: 'https://www.linkedin.com/in/bishal-thapaliya-571643109/', 
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m5.706 7.798v16.202h-5.395v-16.202zm.343-5.002c.001.029.002.063.002.098 0 .749-.318 1.423-.826 1.895l-.002.001c-.545.498-1.274.803-2.075.803-.049 0-.099-.001-.148-.003h.007-.033c-.041.002-.089.003-.137.003-.784 0-1.496-.306-2.025-.804l.001.001c-.504-.488-.816-1.17-.816-1.925 0-.024 0-.048.001-.073v.004c-.001-.021-.001-.045-.001-.069 0-.762.324-1.448.841-1.929l.002-.001c.544-.495 1.271-.799 2.068-.799.046 0 .091.001.137.003h-.006c.043-.002.092-.003.143-.003.785 0 1.5.303 2.034.798l-.002-.002c.515.497.835 1.193.835 1.964v.042-.002zm19.062 11.92v9.284h-5.378v-8.665c.005-.079.007-.171.007-.263 0-.896-.249-1.733-.682-2.447l.012.021c-.427-.596-1.117-.979-1.896-.979-.06 0-.12.002-.18.007h.008c-.027-.001-.058-.002-.089-.002-.62 0-1.19.213-1.641.57l.006-.004c-.453.367-.808.836-1.032 1.375l-.008.023c-.116.355-.182.763-.182 1.187 0 .048.001.096.003.144v-.007 9.042h-5.378q.033-6.523.033-10.578t-.016-4.839l-.016-.785h5.378v2.354h-.033c.214-.345.435-.644.678-.924l-.008.009c.281-.309.583-.588.908-.838l.016-.012c.404-.311.878-.555 1.392-.704l.03-.007c.538-.161 1.157-.254 1.797-.254h.079-.004c.071-.003.154-.005.237-.005 1.681 0 3.195.714 4.256 1.856l.003.004q1.702 1.856 1.702 5.436z"/>
                </svg>
            )
        },
    ]


  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                         <span className="footer-logo-image">
                            <img src={logoImage} alt="Logo Image" />
                        </span>
                        <span className="footer-logo-text">
                            Reactications
                        </span>
                    </Link>
                    <p className="footer-tagline">
                        Discover and explore amazing React applications. Built by a developer, for developers.
                    </p>

                    <div className="footer-social">
                        {socialLinks.map(({ id, name, url, icon}) => (
                            <a href={url} className="social-link" key={id} target='_blank' rel='noopener noreferrer' aria-label={name}>
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-links">
                    { footerLinks.map(({ id, name, path }) => (
                        <div key={id} className='footer-link'>
                        <Link to={path}>{name}</Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">
                    &copy; {currentYear} Reactications. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer