import { Component } from "react";
import { Link } from "react-router-dom";

class Category extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    render() {
        return (
            <div>
                <Link to={this.props.link}>
                    <img src={this.props.img} alt="" />
                    <h3>{this.props.title}</h3>
                </Link>
            </div>
        )
    }
}

export default Category;