import React from "react"

export default class Nav extends React.Component {
    render() {
        if (this.props && this.props.isFooter === "true") {
            return (
                <div className="flex-container">
                    <nav>
                        <ul className="navLinks"> Nav Links
                            <li className="navLink"><a href="#Home">Home</a></li>
                            <li className="navLink"><a href="#About">About</a></li>
                            <li className="navLink"><a href="/Menu">Menu</a></li>
                            <li className="navLink"><a href="/Reservations">Reservations</a></li>
                            <li className="navLink"><a href="/Login">Login</a></li>
                        </ul>
                    </nav>
                </div>
            )
        } else {
            return (
                <div className="flex-container">
                    <nav>
                        <a href="#Home" className="navLink">Home </a>
                        <a href="#About" className="navLink">About </a>
                        <a href="/Menu" className="navLink">Menu </a>
                        <a href="/Reservations" className="navLink">Reservations </a>
                        <a href="/Login" className="navLink">Login </a>
                    </nav>
                </div>
            )
        }
    }
}