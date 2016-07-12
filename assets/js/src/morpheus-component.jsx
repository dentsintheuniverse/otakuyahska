import React from "react";
import Pill from "./morpheus_components/pill-component.jsx"
  

export default class Morpheus extends React.Component {
    navigateToProfession(){
        this.props.history.pushState(null, "profession");
    }
    
    navigateToPlay(){
        this.props.history.pushState(null, "play");
    }
    
    render(){
        console.log("Morpheus "+this.props.history);
        return(
            <div id="morpheus-space">
                <Pill elementId="red_pill" navigateToProfession={this.navigateToProfession.bind(this)} elementClass="pill"/>
                <Pill elementId="blue_pill" navigateToPlay={this.navigateToPlay.bind(this)} elementClass="pill"/>
            </div>
        );
    }
}
