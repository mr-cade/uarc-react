import React from "react";
import "./style.css";
import Nav from 'react-bootstrap/Nav'

export default function Navbar() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column float-left">
            <Nav.Link href="/">UARC</Nav.Link>
            <Nav.Link href="/about" eventKey="about">About</Nav.Link>
            <Nav.Link href="/atv" eventKey="atv">ATV</Nav.Link>
            <Nav.Link href="/benefits" eventKey="benefits">Benefits</Nav.Link>
            <Nav.Link href="/books" eventKey="books">Books</Nav.Link>
            <Nav.Link href="/elmers" eventKey="elmers">Elmers</Nav.Link>
            <Nav.Link href="/irlp" eventKey="irlp">IRLP</Nav.Link>
            <Nav.Link href="/join" eventKey="join">Join Uarc</Nav.Link>
            <Nav.Link href="/lending" eventKey="lending">Lending</Nav.Link>
            <Nav.Link href="/meeting" eventKey="meeting">Meeting</Nav.Link>
            <Nav.Link href="/repeaters" eventKey="repeaters">Repeaters</Nav.Link>
        </Nav>
    )
}