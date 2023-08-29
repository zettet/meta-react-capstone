import React from "react"

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul class="navLinks">
                    <li class="navLink"><a href="#Home">Home</a></li>
                    <li class="navLink"><a href="#About">About</a></li>
                    <li class="navLink"><a href="/Menu">Menu</a></li>
                    <li class="navLink"><a href="/Reservations">Reservations</a></li>
                    <li class="navLink"><a href="/Login">Login</a></li>
                </ul>
            </nav>
        )
    }
}