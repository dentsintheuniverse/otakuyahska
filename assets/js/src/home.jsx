import React from "react";
import ReactDOM from "react-dom";
import Pill from "./home_components/pill-component.jsx"
import Resume from "./resume-component.jsx"
    

class Home extends React.Component {
    render(){
        return(

                <Resume/>

        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Home/>, app);