import React from "react";

export default class Pill extends React.Component {
    navigate(){
        if(this.props.elementId==="red_pill"){
            this.props.navigateToProfession();
        }else{
            this.props.navigateToPlay();
        }   
    }
    render(){
        return(
            <div id={this.props.elementId} onClick={this.navigate.bind(this)} class={this.props.elementClass}>
            </div>
        );
    }
}