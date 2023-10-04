import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./homeComponents/home";
import BinarySearch from "./binarySearchComponent/binarySearch";
import graphs from './binarySearchComponent/Graphs';

class App extends Component {

    constructor() {
        super();
    }
    componentDidMount() {
        // console.log(window.innerHeight,"  ",window.innerWidth);
    }

    render() {
        return (
            <Router basename='/'>
                <Switch>                   
                    <Route path='/binarySearch' component={BinarySearch}/>                    
                    <Route path='/' component={Home}/>
                    <Route path='/Graphs' component={graphs}/>
                    
                </Switch>
            </Router>
        );
    }
}

export default App;
