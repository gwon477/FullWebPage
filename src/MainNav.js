/* eslint-disable */

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from './img/logo.png';

function MainNav() {
    // 페이지 이동 함수
    let navigate = useNavigate();

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand onClick={() => { navigate('/') }}>
                    <img
                        alt=""
                        src={logo}
                        width="27"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' '}KeLog                
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/members') }}>Members</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/blog') }}>Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNav;