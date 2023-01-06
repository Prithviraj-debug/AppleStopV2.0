import { Component } from "react";
import "./Categories.css";
import Category from "./Category/Category";

class Categories extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="procat">Product Categories</h3>
                <section className="categories">
                    <Category img={"https://i3-prod-assets.indiaistore.com/files/uploads/categories/iphone/thumbnail-1622643139_1448.png"} title={"iPhone"} link={"/iphone"} />
                    <Category img={"https://i3-prod-assets.indiaistore.com/files/uploads/categories/mac/thumbnail-1622643147_1503.png"} title={"Mac"} link={"/mac"} />
                    <Category img={"https://i3-prod-assets.indiaistore.com/files/uploads/categories/ipad/thumbnail-1622643123_7395.png"} title={"ipad"} link={"/ipad"} />
                    <Category img={"https://i3-prod-assets.indiaistore.com/files/uploads/categories/watch/thumbnail-1622643164_2255.png"} title={"Apple Watch"} link={"/watch"} />
                    <Category img={"https://i3-prod-assets.indiaistore.com/files/uploads/categories/music/thumbnail-1622643155_0312.png"} title={"AirPods"} link={"/airpods"} />
                    <Category img={"https://i3-prod-assets.indiaistore.com/files/uploads/banners/home-page-prod-cat-last-thumb/banner_1618816357_5595_m.png"} title={"Exchange"} link={"/exchange"} />
                </section>
            </div>
        );
    }
}

export default Categories;