import React from "react"
import Nav from './Nav'
import { ReactComponent as LogoSvg } from '../assets/Logo.svg'

export default class Header extends React.Component {
    render() {
        return(
            <header>
                <LogoSvg />
                <Nav/>
            </header>
        )
    }
}