import React from "react";
import Signin from './components/sign-in';
import Signup from './components/sign-up';
import Home from './components/home';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {page: "home"};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(pageName) {
        this.setState({
            page: pageName
        });
    }

    render (){

        if (this.state.page === "home") {
            return(
                <Home handleClick={this.handleClick}/>
            );
        }

        else if(this.state.page === "signin") 
            return(
                <Signin handleClick={this.handleClick}/>
            );

        else if(this.state.page === "signup") 
            return(
                <Signup handleClick={this.handleClick}/>
            );
        
     }

}

export {App};