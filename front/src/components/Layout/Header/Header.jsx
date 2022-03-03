import React,{ useState } from "react";
import { useHistory } from "react-router";
import Logo from "../shopping-cart.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { useStyles } from "../../../style/style";
import Registration from "../../views/Register/Register";
import { Person} from '@material-ui/icons'

import {
  FaSignOutAlt,
  FaSearch,
  FaRegRegistered,
  FaSignInAlt,
  FaLock,FaKey
} from "react-icons/fa";

//import { Navbar } from "bootstrap";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = ({ setOpen }) => {
  const history = useHistory();
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    //
    <Navbar
      fixed="top"
      bg="light"
      expand="lg"
      variant="light"
      activeKey="/home"
    >
      <img src={Logo} alt="..." className={classes.logo} />
      <Container fluid>
      <Router>
        <Navbar.Brand href="#">OnlineShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#action2">Category</Nav.Link>
            <NavDropdown
              title="Link"
              id="navbarScrollingDropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">
              <FaSearch />
            </Button>
          </Form>
          <div className="mb-0">
            <Button
              bg="light"
              variant="outline-primary"
              className={classes.logout}
              onClick={() => {
                localStorage.clear();
                history.push("/login");
              }}
            >
              <FaKey />
              Login
            </Button>
            <Button
              bg="light"
              variant="outline-secondary"
              className={classes.logout}
              to="/register"
              onClick={() => {
                localStorage.clear();
                history.push("/register");
              }}
            >
              <Person />
              Register
            </Button>
            <Button
              bg="light"
              variant="outline-danger"
              className={classes.logout}
              onClick={() => {
                localStorage.clear();
                history.push("/login");
              }}
            >
              <FaSignOutAlt />
              Logout
            </Button>
          </div> 
        </Navbar.Collapse>
        
        <Switch>
          <Route path="/register" exact component={Registration} />
        </Switch>
        </Router>
      </Container>
    </Navbar>
  );
};

export default Header;
