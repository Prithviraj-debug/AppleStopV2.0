import { Component } from "react";
import "./Partners.css";

class Partners extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="partners container">
                <h3>Our Partners</h3>

                <div class="partner">
                    <div>
                        <ul>
                            <a href="https://www.accenture.com/in-en">
                                <img src="https://steelcase-res.cloudinary.com/image/upload/v1594808802/www.steelcase.com/eu-en/2020/07/15/Accenture-Logo.png" alt="" />
                            </a>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <a href="https://www2.deloitte.com/us/en.html">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png" alt="" />
                            </a>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <a href="https://www.ibm.com/in-en">
                                <img src="https://www.freepnglogos.com/uploads/ibm-logo-png/ibm-logo-png-transparent-svg-vector-bie-supply-3.png" alt="" />
                            </a>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <a href="https://www.pixar.com">
                                <img src="https://www.pngitem.com/pimgs/m/231-2317287_disney-pixar-logo-png-transparent-png.png" alt="" />
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Partners;