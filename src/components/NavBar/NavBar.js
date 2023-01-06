import react, { Component } from "react";
import "./NavBar.css";
import bars from "./bars.svg";
import { Link } from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };
        //THIS BINDING IS NECESSARY TO MAKE 'this' WORK IN THE CALLBACK
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const currentState = this.state.isToggleOn;
        this.setState({ isToggleOn: !currentState });
    };

    render() {
        return (
            <div className="container">

                <nav className="main-nav">
                    <div className="hamburger">
                        <img src={bars} onClick={this.handleClick} />
                    </div>
                    <div style={{ "display": "flex", "alignItems": "center" }}>
                        <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="" className="logo" />
                        <Link to={"/"} className="logo apple">Apple'Stop</Link>


                        <ul className={this.state.isToggleOn ? "show main-menu" : "main-menu"}>
                            <li><Link to={"/mac"} onClick={this.handleClick}>Mac</Link></li>
                            <li><Link to={"/ipad"} onClick={this.handleClick}>iPad</Link></li>
                            <li><Link to={"/iphone"} onClick={this.handleClick}>iPhone</Link></li>
                            <li><Link to={"/watch"} onClick={this.handleClick}>Watch</Link></li>
                            <li><Link to={"/airpods"} onClick={this.handleClick}>AirPods</Link></li>
                            <li><Link to={"/tv"} onClick={this.handleClick}>TV</Link></li>
                            <li><Link to={"/accessories"} onClick={this.handleClick}>Accessories</Link></li>
                            <li><Link to={"/contact"} onClick={this.handleClick}>Contact</Link></li>
                        </ul>
                    </div>
                    <ul className="right-menu">
                        <li>
                            <div>
                                <input type="text" name="search" id="search" placeholder="Search" />
                                {/*<img src={search} />*/}
                            </div>
                        </li>

                        <li>
                            <Link to={"/signin"} className="signin_btn">
                                Sign In
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div >
        )
    }
}

export default NavBar;