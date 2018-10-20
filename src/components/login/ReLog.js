import React,{ Component,Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class  ReLog extends Component{
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
                <Router>
                    <div>
                        <header className="luyo">
                            <Link to="/">新闻列表</Link>
                        </header>
                        <Route  path="/Login" exact component={Login}/>
                    </div>
                </Router>
            </Fragment>
        )
    }
}
export default ReLog;