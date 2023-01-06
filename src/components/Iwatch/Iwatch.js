import React, { Component } from "react";
import Cards from "../Cards/Cards";
import watches from "./watches.json";
import Links from "../HomePage/Links/Links";
import Footer from "../Footer/Footer";

class Iwatch extends Component {
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
                            watches.map(item => {
                                return (
                                    <Cards img={item.img} title={item.title} desc={item.desc} />
                                )
                            })
                        }
                    </div>
                </div>
                <Links />
                <Footer />
            </div>
        )
    }
}

export default Iwatch;