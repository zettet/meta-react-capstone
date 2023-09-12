import React from "react"
import greekSaladImg from '../assets/greekSalad.jpg'
import bruschettaImg from '../assets/bruschetta.jpg'
import lemonDessertImg from '../assets/lemonDessert.jpg'

export default class Specials extends React.Component {
    render() {
        return (
            <section class="app-specials" name="Weekly Specials">
                <div class="flex-row">
                    <div className="menu-header">
                        <span class="display-title-black">This Week's Specials!</span> <button className='app-button'>Online Menu</button> <br />
                    </div>
                </div>
                <div class="flex-row">
                    <div className="menu-item">
                        <img src={greekSaladImg} alt="Greek Salad" width="300" height="160" className="menu-image"/>
                        <div className="menu-desc">
                            <span class="paragraph-bold">Greek Salad</span><span class="text-price">$12.99</span><br />
                            <span class="paragraph">The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</span><br /><br /><br />
                            <span class="paragraph-bold">Order a Delivery</span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <img src={bruschettaImg} alt="Bruschetta" width="300" height="160" className="menu-image"/>
                        <div className="menu-desc">
                            <span class="paragraph-bold">Bruschetta</span><span class="text-price">$5.99</span><br />
                            <span class="paragraph">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</span><br /><br /><br /><br />
                            <span class="paragraph-bold">Order a Delivery</span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <img src={lemonDessertImg} alt="Lemon Dessert" width="300" height="160" className="menu-image"/>
                        <div className="menu-desc">
                            <span class="paragraph-bold">Lemon Dessert</span><span class="text-price">$5.00</span><br />
                            <span class="paragraph">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</span><br /><br /><br />
                            <span class="paragraph-bold">Order a Delivery</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}