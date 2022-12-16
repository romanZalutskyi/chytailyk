import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Menu = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Читайлик</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Головна</Nav.Link>
                    <Nav.Link href="/shop">Крамниця</Nav.Link>
                    <Nav.Link href="/basket">Корзина</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/feedback">Зворотній зв'язок</Nav.Link>
                        <Nav.Link href="/registration">Зареєструватися</Nav.Link>  
                        <Nav.Link href="/login">Увійти</Nav.Link>                                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu