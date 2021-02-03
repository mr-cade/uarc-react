import React from "react";
import "./style.css";
import Nav from 'react-bootstrap/Nav'
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';

export default function Navbar() {
    return (
       
        <Nav defaultActiveKey="/home" className="flex-column float-left sidebar">
          
            <Nav.Link href="/" >UARC</Nav.Link>
            <Nav.Link href="/about" eventKey="about">About</Nav.Link>
            <Nav.Link href="/atv" eventKey="atv">ATV</Nav.Link>
            <Nav.Link href="/benefits" eventKey="benefits">Benefits</Nav.Link>
            <Nav.Link href="/books" eventKey="books">Books</Nav.Link>
            <Nav.Link href="/elmers" eventKey="elmers">Elmers</Nav.Link>
            <Nav.Link href="/irlp" eventKey="irlp">IRLP</Nav.Link>
            <Nav.Link href="/join" eventKey="join">Join Uarc</Nav.Link>
            <Nav.Link href="/lending" eventKey="lending">Lending</Nav.Link>
            <Nav.Link href="/meeting" eventKey="meeting">Meeting</Nav.Link>
            <Nav.Link href="/members" eventKey="members">Members</Nav.Link>
            <Nav.Link href="/repeaters" eventKey="repeaters">Repeaters</Nav.Link>
            <Nav.Link href="/nets" eventKey="nets">Nets Schedule</Nav.Link>
            <Nav.Link href="/bylaws" eventKey="bylaws">Bylaws</Nav.Link>
             <div className="socialIcon">
            <a 
            id="icon1"
            href="https://www.facebook.com/UtahAmateurRadioClub/"
            target="_blank"
            rel="noopener noreferrer">
                <FaFacebookSquare size={40}/>
            </a>
     
            <a 
           id="icon2"
            href="https://www.youtube.com/c/utahamateurradioclub"
            target="_blank"
            rel="noopener noreferrer">
                <FaYoutube size={40}/>
            </a>
            </div>
       
        </Nav>
 
    )
}