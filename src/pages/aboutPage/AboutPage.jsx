import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import './AboutPage.css';

const AboutPage = () => {
  const skills = [
    { id: 1, name: 'React', level: 75 },
    { id: 2, name: 'JavaScript', level: 80 },
    { id: 3, name: 'Node.js', level: 60 },
    { id: 4, name: 'Vue', level: 50 },
    { id: 5, name: 'CSS/Saas', level: 90 },
    { id: 6, name: 'Tailwind', level: 70 },
    { id: 7, name: 'Bootstrap', level: 80 },
    { id: 8, name: 'Git', level: 85 },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Live'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task management with Socket.io',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      status: 'Development'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with interactive charts and maps',
      technologies: ['React', 'API Integration', 'Chart.js'],
      status: 'Completed'
    }
  ];

  return (
    <div className='about-page'>
      <Header />

      <main className="about-main">
        <section className="about-hero">
          <div className="container">
            <div className="profile-section">
              <div className="profile-image-wrapper">
                <img src="" alt="" />
                <div className="profile-glow"></div>
              </div>

              <div className="profile-content">
                <h1 className="profile-title">Bishal Thapaliya</h1>
                <p className="profile-subtitle">Frontend (React) Developer</p>
                <p className="profile-description">
                  Passionate React developer with 5+ years of experience building modern, 
                  scalable web applications. I specialize in creating intuitive user 
                  interfaces and seamless user experiences using the latest technologies.
                  Expertise in modern frontend technologies, agile teamwork, and delivering scalable, userfriendly solutions while continuously striving for improvement.
                </p>

                <div className="profile-stats">
                  <div className="stat-item">
                    <span className="stat-number">100+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Happy Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="container">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              {skills.map(({ id, name, level}, index) => (
                <div className="skill-item" key={id} style={{ animationDelay:  `${index * 0.1}s`}}>
                  <div className="skill-info">
                    <span className="skill-name">{name}</span>
                    <span className="skill-percentage">{level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${level}` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projects.map(({id, title, description, technologies, status }, index) => (
                <div className="project-card" key={id} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="project-header">
                    <h3 className="project-title">{title}</h3>
                    <span className={`project-status ${status.toLowerCase()}`}>{status}</span>
                  </div>

                  <p className="project-description">{description}</p>
                  <div className="project-technologies">
                    {technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Let's Work Together</h2>
              <p className="cta-description">
                I'm always interested in new opportunities and challenging projects. 
                Whether you need a full-stack developer or React specialist, let's discuss how we can collaborate.
              </p>
              <div className="cta-actions">
                <a href="mailto:vishal.thapaliya@gmail.com" className="btn-cta-primary">Get In Touch</a>
                <a href="https://bishal-thapaliya.netlify.app/about" className="btn-cta-secondary">View Portfolio</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage