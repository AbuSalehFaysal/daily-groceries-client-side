import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import Products from './Components/Products/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Orders from './Components/Orders/Orders';
import Deals from './Components/Deals/Deals';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import Book from './Components/Checkout/Checkout';
import Checkout from './Components/Checkout/Checkout';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Daily Grroceries</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
            <Nav.Link href="http://localhost:5000/">Admin</Nav.Link>
            <Nav.Link href="/deals">Deals</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/login">{loggedInUser.name}</Nav.Link>
          </Nav>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          {/* <PrivateRoute path="/book/:transportationType">
            <Book />
          </PrivateRoute> */}
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
