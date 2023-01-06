import { Component } from "react";
import "./Location.css";

class Location extends Component {
    render() {
        return (
            <div class="locate">
                <h3>Locate the nearest store</h3>
                <div class="drop">
                    <select title="state" id="">
                        <option value="">Select State</option>
                        <option value="">Maharashtra</option>
                    </select>

                    <select title="city" id="">
                        <option value="">Select City</option>
                        <option value="">Phaltan</option>
                    </select>

                </div>
                <a onclick="locate()">Locate <i class="fas fa-chevron-right"></i></a>

                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" alt="" />
                <p> <span class="apple">Apple</span> India</p>
            </div>
        )
    }
}

export default Location;