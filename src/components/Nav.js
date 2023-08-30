import React from "react"

export default class Nav extends React.Component {
    render() {
        if (this.props && this.props.isFooter === "true") {
            return (
                <nav>
                    <ul className="navLinks"> Nav Links
                        <li className="navLink"><a href="#Home">Home</a></li>
                        <li className="navLink"><a href="#About">About</a></li>
                        <li className="navLink"><a href="/Menu">Menu</a></li>
                        <li className="navLink"><a href="/Reservations">Reservations</a></li>
                        <li className="navLink"><a href="/Order">Order Online</a></li>
                        <li className="navLink"><a href="/Login">Login</a></li>
                    </ul>
                </nav>
            )
        } else {
            return (
                    <nav>
                        <a href="#Home" className="navLink"><span className="section-title">Home</span></a>
                        <a href="#About" className="navLink"><span className="section-title">About</span></a>
                        <a href="/Menu" className="navLink"><span className="section-title">Menu</span></a>
                        <a href="/Reservations" className="navLink"><span className="section-title">Reservations</span></a>
                        <a href="/Order" className="navLink"><span className="section-title">Order Online</span></a>
                        <a href="/Login" className="navLink"><span className="section-title">Login</span></a>
                    </nav>
            )
        }
    }
}