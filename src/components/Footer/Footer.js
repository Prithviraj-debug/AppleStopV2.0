import { Component } from "react";
import "./Footer.css";
import github from "./github.svg";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="footer-inner">
                        <div className="dev"> Developed by &copy; Prithviraj. All rights reserved.</div>
                        <div className="git">
                            <a href="https://github.com/Prithviraj-debug" className="github">
                                <img src={github} style={{ "width": "30px" }} />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;