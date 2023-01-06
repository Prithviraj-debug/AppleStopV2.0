import React, { Component } from "react";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Links from "../HomePage/Links/Links";
import tv from "./tv.json"

class Tv extends Component {
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
                            tv.map(item => {
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

export default Tv;