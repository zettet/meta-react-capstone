import React from "react"
import Nav from './Nav'
import { ReactComponent as LogoSvg } from '../assets/Logo.svg'

export default class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="flex-container">
                    <LogoSvg />
                    <Nav isFooter="true" />
                </div>
            </footer>
        )
    }
}