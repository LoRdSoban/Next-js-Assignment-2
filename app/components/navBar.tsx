//import {hideMenu, showMenu} from '../script'
"use client"
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {

    const navLinks = useRef<HTMLDivElement>(null);

    const showMenu = () => {
        if (navLinks.current != null) {
            navLinks.current.style.right = "0";
        }
    }

    function hideMenu() {
        if (navLinks.current != null) {
            navLinks.current.style.right = "-200px";
        }
    }



    return (
        <nav>
            <a href="" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </a>
            <div className="nav-links" ref={navLinks}>

                <div className="p-2">
                    <FontAwesomeIcon icon={faX} onClick={hideMenu} />
                </div>

                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/coursePage">Course</Link></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <FontAwesomeIcon icon={faBars} onClick={showMenu} />

        </nav>
    )
}