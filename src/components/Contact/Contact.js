import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div class="login-div">
                    <div class="title">Apple Stop</div>
                    <div class="sub-title">Contact Us</div>
                    <div class="fields">
                        <div class="username">
                            <input type="username" class="user-input" placeholder="Enter Your Mobile Number" />
                        </div>
                        <button class="signin-button" onclick="submit()">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;