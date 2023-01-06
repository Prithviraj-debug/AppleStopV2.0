import { Component } from "react";
import Footer from "../Footer/Footer";
import Links from "../HomePage/Links/Links";
import "./Exchange.css";
import exchange from "./Exchange.json"
import ExchangeProduct from "./ExchangeProduct";

class Exchange extends Component {
    render() {
        return (
            <div>
                <img src="./Assets/iposter.png" alt="" class="iposter" />

                <div class="container">
                    <div class="pricing-details">
                        <h2>Pricing Details</h2>
                        <h5>Calculated on the exchange effective price of iPhone7 (128 GB) in good condition</h5>
                    </div>
                    <div class="exchange-iphone">
                        {
                            exchange.map(item => {
                                return (
                                    <ExchangeProduct
                                        img={item.img}
                                        title={item.title}
                                        price={item.price}
                                        cashPrice={item.cashPrice}
                                        exBonus={item.exBonus}
                                        exVal={item.exVal}
                                        netPrice={item.netPrice}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <Links />
                <Footer />
            </div>
        )
    }
}

export default Exchange;