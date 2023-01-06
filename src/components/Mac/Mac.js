import React, { Component } from "react";
import Cards from "../Cards/Cards";
import "./Mac.css";
import macs from "./MacData.json";
import Links from "../HomePage/Links/Links";
import Footer from "../Footer/Footer";

class Mac extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div class="macshow">
                    <h1>World"s thinest Notebooks</h1>
                </div>
                <div class="container">
                    <section class="cards">
                        {
                            macs.map(item => {
                                return (
                                    <Cards img={item.img} title={item.title} desc={item.desc} />
                                )
                            })
                        }
                    </section>
                </div>
                <Links />
                <Footer />
            </div >
        )
    }
}

export default Mac;