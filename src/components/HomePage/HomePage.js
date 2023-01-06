import React, { Component } from "react";
import Categories from "./Categories/Categories";
import Footer from "../Footer/Footer";
import "./HomePage.css"
import Links from "./Links/Links";
import Location from "./Location/Location";
import Partners from "./Partners/Partners";
import Showcase from "./Showcase/Showcase";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Showcase />
                <Partners />
                <Categories />
                <Location />
                <Links />
                <Footer />
            </div>
        )
    }
}

export default HomePage;