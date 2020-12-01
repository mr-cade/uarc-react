import React from "react";
import "./style.css";
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="socials page-footer">
            <a
            className="mr-3"
            style={{color: 'white'}}
            href="https://www.facebook.com/UtahAmateurRadioClub/"
            target="_blank"
            rel="noopener noreferrer">
                <FaFacebookSquare size={40}/>
            </a>
            <a
            className=""
            style={{color: 'white'}}
            href="https://www.youtube.com/c/utahamateurradioclub"
            target="_blank"
            rel="noopener noreferrer">
                <FaYoutube size={40}/>
            </a>
        </footer>
    )
}