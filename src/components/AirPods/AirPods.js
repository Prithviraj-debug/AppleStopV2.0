import React, { Component } from "react";
import "./AirPods.css";
import Cards from "../Cards/Cards";
import airpods from "./airpods.json";
import Links from "../HomePage/Links/Links";
import Footer from "../Footer/Footer";

class AirPods extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="cards">
                        {
                            airpods.map(item => {
                                return (
                                    <Cards img={item.img} title={item.title} desc={item.desc} />
                                )
                            })
                        }
                    </div>
                    <div class="max">
                        <img src="https://weraveyou.com/wp-content/uploads/2020/12/New-Project-4.jpg" alt="" />
                        <a href="#">Buy <i class="fas fa-chevron-right"></i></a>
                    </div>
                </div>
                <Links />
                <Footer />
            </div>
        )
    }
}

export default AirPods;