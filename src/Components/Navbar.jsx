import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-white shadow fixed-top">
      <Container>
        <Navbar.Brand href="#" >
          <img src="/Logo/Logo.svg" alt="Logo" className="img-fluid" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse className="flex-grow-0" id="navbarScroll">
          <Nav
            className="me-5 pe-4 my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="#action2">Features</Nav.Link>
            <Nav.Link href="#action2">Pricing</Nav.Link>
            <Nav.Link href="#action2">Testimonials</Nav.Link>
            <Nav.Link href="#action2">Help</Nav.Link>
          </Nav>

          <div className="">
            <Button variant="btn fw-bolder">Sign In</Button>
            <Button variant="outline-warning rounded-pill text-black border-2 fw-4">
              Sign Up
            </Button>
          </div>
        </Navbar.Collapse>


      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
