import React, { Component } from "react";
import AccessoriesCard from "../Cards/accessories";
import accessories from "./accessories.json";
import Links from "../HomePage/Links/Links";
import Footer from "../Footer/Footer";

class Accessories extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="container" >
                    <div className="accessories-col">
                        {
                            accessories.map(item => {
                                return (
                                    <AccessoriesCard img={item.img} title={item.title} price={item.price} />
                                )
                            })
                        }
                    </div>
                </div >
                <Links />
                <Footer />
            </div>
        )
    }
}

export default Accessories;