import React from "react";
import ReactDOM from "react-dom";
import Morpheus from "./morpheus-component.jsx"
import Resume from "./resume-component.jsx"
import {Router, Route, IndexRoute, hashHistory} from "react-router";
    

export default class Home extends React.Component {
    render(){
        return(  
            <div>
                {this.props.children}
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home}>
            <IndexRoute component={Morpheus}></IndexRoute>
            <Route path="profession" component={Resume}></Route>
        </Route>
    </Router>, 
app);