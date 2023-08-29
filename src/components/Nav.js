import React from "react"

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul className="navLinks">
                    <li className="navLink"><a href="#Home">Home</a></li>
                    <li className="navLink"><a href="#About">About</a></li>
                    <li className="navLink"><a href="/Menu">Menu</a></li>
                    <li className="navLink"><a href="/Reservations">Reservations</a></li>
                    <li className="navLink"><a href="/Login">Login</a></li>
                </ul>
            </nav>
        )
    }
}