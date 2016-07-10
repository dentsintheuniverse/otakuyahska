import React from "react";
import ReactDOM from "react-dom";
import Pill from "./home_components/pill-component.jsx"
    

class Home extends React.Component {
    render(){
        return(
            <div id="morpheus-space">
                <Pill elementId="red_pill" elementClass="pill"/>
                <Pill elementId="blue_pill" elementClass="pill"/>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Home/>, app);