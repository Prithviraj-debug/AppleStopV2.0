import { Component } from "react";

class ExchangeProduct extends Component {
    render() {
        return (
            <div class="exchange-product">
                <div class="main-img">
                    <img src={this.props.img} alt="" />
                </div>
                <div class="details">
                    <div class="head">
                        <div class="pro-name">
                            <i class="fab fa-apple"></i> <span>{this.props.title}</span>
                        </div>
                        <div class="pro-price">
                            &#8377; {this.props.price}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col cash text">
                            Cash
                        </div>
                        <div class="col total-val">
                            &#8377; {this.props.cashPrice}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col bonus text">
                        Exchange Bonus
                    </div>
                    <div class="col total-val">
                        &#8377; {this.props.exBonus}
                    </div>
                </div>
                <div class="row">
                    <div class="col ex-val text">
                        Exchange Value*
                    </div>
                    <div class="col total-val">
                        &#8377; {this.props.exVal}
                    </div>
                </div>
                <div class="row">
                    <div class="col net-price text">
                        Net Effective Price
                    </div>
                    <div class="col total-val">
                        &#8377; {this.props.netPrice}
                    </div>
                </div>
            </div>
        )
    }
}

export default ExchangeProduct;