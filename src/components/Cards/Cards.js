import { Component } from "react";
import "./Cards.css";

class Cards extends Component {
    render() {
        return (

            <div>
                <img src={this.props.img} alt="" />
                <h3>{this.props.title}</h3>
                <p>{this.props.desc}</p>
                <a onclick="bagged()">Add to Bag <i class="fas fa-chevron-right"></i></a>
            </div>
        )
    }
}

export default Cards;