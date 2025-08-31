import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const navItems = [
    { id: 1, name: 'Home', path: '/'},
    { id: 2, name: 'Applications', path: '/applications'},
    { id: 3, name: 'About', path: '/about'},
    { id: 4, name: 'Contact', path: '/contact'},
  ]
  
  return (
    <header className="header">
      <nav className="nav">
        <NavLink  to="/" className="logo">
          <span className="logo-text">React Applications</span>
        </NavLink >

        <ul className="nav-list">
          {navItems.map(({id, name, path}) => (
            <li key={id} className='nav-item'>
              <NavLink 
                to={path}
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header