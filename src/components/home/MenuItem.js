import React from "react"

export default class Nav extends React.Component {
    render() {
        return (
        <div className="menu-item">
            <img src={this.props.imgSrc} alt={this.props.imgAlt} width="300" height="160" className="menu-image"/>
            <div className="menu-desc">
                <span class="paragraph-bold">{this.props.itemName}</span><span className="text-price">{this.props.itemPrice}</span><br />
                <span class="paragraph">{this.props.itemDesc}</span><br /><br /><br />
                <span class="paragraph-bold">Order a Delivery</span>
            </div>
        </div>
    );}
}