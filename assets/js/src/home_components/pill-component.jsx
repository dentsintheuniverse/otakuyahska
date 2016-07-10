import React from "react";
import ReactDOM from "react-dom";
import Resume from "../resume-component.jsx"

export default class Pill extends React.Component {
    handleRedirectForPill(){
        if(this.props.elementId === "red_pill"){
            ReactDOM.render(<Resume/>, document.getElementById('app'));
        }else{
            
        }
    }
    render(){
        return(
            <div id={this.props.elementId} onClick={this.handleRedirectForPill.bind(this)} class={this.props.elementClass}>
            </div>
        );
    }
}