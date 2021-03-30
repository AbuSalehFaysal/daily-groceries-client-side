import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import Products from './Components/Products/Products';


function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Daily Groceries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Orders</Nav.Link>
            <Nav.Link href="#link">Admin</Nav.Link>
            <Nav.Link href="#link">Deals</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Products></Products>
    </div>
  );
}

export default App;
