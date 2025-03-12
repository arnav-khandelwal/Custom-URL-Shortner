import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSun, BsMoon } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Navigation({ theme, toggleTheme }) {
  return (
    <Navbar bg={theme} variant={theme} expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">URL Shortener</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/analytics">Analytics</Nav.Link>
            <Nav.Link as={Link} to="/AllAnalytics">All Analytics</Nav.Link>
          </Nav>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="theme-toggle"
            onClick={toggleTheme}
          >
            {theme === 'light' ? <BsMoon size={20} /> : <BsSun size={20} />}
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;