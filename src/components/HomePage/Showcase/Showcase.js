import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import bnrimg from "./bnrimgg.jpg"
import "./Showcase.css";

class Showcase extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="showcase container">
                <img src={bnrimg} alt="" className="iphone" />
                <div className="showcont">
                    <h1>iPhone 14 Pro Max </h1>
                    <h3>Blast past fast</h3>
                    <p>
                        From &#8377;119900* before trade-in No Cost EMI for 6 months.
                    </p>
                    <a href="#" className="btn" onclick="grabbed()">
                        Grab <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Showcase;