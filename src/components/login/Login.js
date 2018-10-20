import React,{ Component,Fragment } from 'react';
import {Link} from "react-router-dom";
// import { Link } from "react-router-dom";
// import Axios from 'axios';
class Login extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"登录"
        })
    }
    login =()=>{
        console.log("111")
    }
    render(){
        return(
            <Fragment>
                <p>{this.state.title}</p>
                <button onClick={this.login}>登录</button>
            </Fragment>
        )
    }
}
export default Login;