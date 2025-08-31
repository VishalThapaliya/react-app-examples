import { Link, NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const navItems = [
    { id: 1, name: "Home", path: "/"},
    { id: 2, name: "Applications", path: "/applications"},
    { id: 3, name: "About", path: "/about"},
    { id: 4, name: "Contact", path: "/contact"},
  ]
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className='logo'>React Applications</Link>

        <nav className="nav">
          <ul>
            {navItems.map(({ id, name, path }) => (
              <li key={id}>
                <NavLink 
                  to={path} 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header