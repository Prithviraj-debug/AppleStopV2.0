import React, { Component } from "react";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Links from "../HomePage/Links/Links";
import ipad from "./ipad.json";

class Ipad extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="container">
                    <section className="cards">
                        {
                            ipad.map(item => {
                                return (
                                    <Cards img={item.img} title={item.title} desc={item.desc} />
                                )
                            })
                        }
                    </section>
                </div>
                <Links />
                <Footer />
            </div>
        )
    }
}

export default Ipad;