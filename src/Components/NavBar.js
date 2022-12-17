import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useCurrentUser } from '../context/CurrentUserContext';

const NavBar = () => {
  const currentUser = useCurrentUser();

  const loggedInIcons = (
    <>
      <NavLink to='/check' className={styles.NavLink} activeClassName={styles.Active}>  
          Check availability<i className='fa-solid fa-house'></i>
      </NavLink>
      <NavLink to='/profile' className={styles.NavLink} activeClassName={styles.Active}>  
          {currentUser?.username}<i className='fa-solid fa-user'></i>
      </NavLink>
    </>
  )

  const loggedOutIcons = (
    <>
      <NavLink to="/signin" className={styles.NavLink} activeClassName={styles.Active}>
          Sign in <i className="fa-solid fa-right-to-bracket"></i>
      </NavLink>
      <NavLink to="/signup" className={styles.NavLink} activeClassName={styles.Active}>
          Register <i className="fa-solid fa-user-plus"></i>
      </NavLink>
    </>
  )

  return (
    <Navbar className={styles.NavBar} expand="sm" fixed="top">
    <Container>
      <NavLink to='/' exact>
        <Navbar.Brand>
          <img src={logo} className={styles.logo}></img>
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-left">
          {currentUser ? loggedInIcons : loggedOutIcons}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar