// import "./Header.css";
// import React from "react";

function Header(){
    return(
        <header className="header">
        <div className="logo">
            Lupin <br />Ventures
        </div>
        <nav className="nav-links">
            <a href ="#home">Home</a>
            <a href ="#about">About</a>
            <a href ="#services">Services</a>
            <a href ="#contact">Contact</a>
        </nav>


        </header>
    );
}

export default Header;