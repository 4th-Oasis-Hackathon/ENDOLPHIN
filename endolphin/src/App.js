import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';
import { Routes, Route, useNavigate, Router } from 'react-router-dom';
import BackgroundImage from './img/petImage.png';

function App() {
  
  let navigate = useNavigate();

  return (
    <>
    <div className='App'>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand className="title-location" onClick={()=>{ navigate('/') }}>Bully's Go</Navbar.Brand>
            {/* <Navbar.Brand>Bully's Go</Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="title-location" id={`offcanvasNavbarLabel-expand-${expand}`}
                // style={{fontWeight: 'bold', textAlign: 'right', cursor: 'pointer'}}
                > Bully's Go
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">로그인</Nav.Link>
                  <Nav.Link href="#action2">회원가입</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
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
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="ex) 치약, 우산 ..."
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-dark">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Routes>
        <Route path='/' element={<>
          <div className='main'>
            <div className='main-writing'>
              <div className='main-writing-1'>Bully's Go와 함께하는</div>
              <div className='main-writing-2'>분리배출</div>
            </div>
            <div className="main-bg">
              <div className="main-bg-1" style={{ backgroundImage: `url(${BackgroundImage})` }} />
              <div className="main-bg-2" style={{ backgroundImage: `url(${BackgroundImage})` }} />
              <div className="main-bg-3" style={{ backgroundImage: `url(${BackgroundImage})` }} />

            </div>
          </div>
          
          냠냠
        </>}/>

        {/* URL 파라미터 */}
        {/* <Route path='*' element={<>404</>}/> */}
      </Routes>
      </div>
    </>
  );
}

export default App;
