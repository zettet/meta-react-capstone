import React from "react"
import Nav from './Nav'
import { ReactComponent as LogoSvg } from '../assets/Logo.svg'

export default class Footer extends React.Component {
    render() {
        return(
            <footer>
                <LogoSvg />
                <Nav />
            </footer>
        )
    }
}