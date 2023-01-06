import { Component } from "react";
import "./accessories.css";

class AccessoriesCard extends Component {
    render() {
        return (
            <div class="accessory">
                <img src={this.props.img} alt="" />
                <div class="accessory-title">
                    <span>{this.props.title}</span>
                    <div class="price">&#8377;{this.props.price}</div>
                </div>
                <div class="addtobag">
                    <a onclick="bagged()">
                        <i class="fas fa-shopping-bag"></i>
                        <h6>Add to Bag</h6>
                    </a>
                </div>
            </div>
        )
    }
}

export default AccessoriesCard;