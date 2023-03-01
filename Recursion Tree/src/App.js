import React, {Component} from 'react';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Graph from "./Graph/graph";



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
                    <Route path='/' component={Graph}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
