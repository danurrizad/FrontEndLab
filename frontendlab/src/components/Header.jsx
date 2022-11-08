import React from "react";
import './Header.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import logoImage from "../assets/images/logo-ugm.png"

export default function Header(){
    return (
        <div>
            <Navbar className="header">
                <Container fluid>
                    <Navbar.Brand>
                        <img className="logoImage" src={logoImage} alt="logo-ugm" />
                        <Nav className="titleNav">
                            Departemen Teknik Elektro dan <br></br> Teknologi Informasi <br></br> Universitas Gadjah Mada
                        </Nav> 
                    </Navbar.Brand>
                </Container>

            </Navbar>
        </div>
    )
}