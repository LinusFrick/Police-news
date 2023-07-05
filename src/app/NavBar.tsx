'use client';

import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname();

    return(
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} href='/'>
                        Test 1
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='main-navbar'/>

                <Navbar.Collapse id='main-navbar'>
                    <Nav>
                        <Nav.Link as={Link} href='/polisstationer' active={pathname === '/polisstationer'} >Polisstationer</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};