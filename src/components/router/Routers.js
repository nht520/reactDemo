import React,{ Component,Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Lb from "./Lb";
import XwXq from "./XwXq";
import Sp from "./Sp";
import SpXq from "./SpXq";
class Routers extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:""
        })
    }
    render(){
        return(
            <Fragment>
                <Router>
                    <div>
                        <header className="luyo">
                            <Link to="/">新闻列表</Link>
                            <Link to="/XwXq">新闻详情</Link>
                            <Link to="/Sp">商品列表</Link>
                            <Link to="/SpXq">商品详情</Link>
                        </header>
                        <Route  path="/" exact component={Lb}/>
                        {/*动态路由传值*/}
                        <Route  path="/XwXq/:_id" exact component={XwXq}/>
                        <Route  path="/Sp" exact component={Sp}/>
                        <Route  path="/SpXq" exact component={SpXq}/>
                    </div>
                </Router>
            </Fragment>
        )
    }
}
export default Routers;