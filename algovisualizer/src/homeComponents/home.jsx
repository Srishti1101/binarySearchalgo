import React, {Component} from 'react';
import Navbar from "./navbar";
import Greet from "./greet";
import Cards from "./cards";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Greet/>
                <Cards/>
            </React.Fragment>
        );
    }
}

export default Home;