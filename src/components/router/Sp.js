import React,{ Component,Fragment } from 'react';
import {Link} from "react-router-dom";
class Sp extends Component{
    constructor(props){
        super(props);
        this.state=({
            list:[
                {
                    id:1,
                    title:"我是商品1"
                },
                {
                    id:2,
                    title:"我是商品2"
                },
                {
                    id:3,
                    title:"我是商品3"
                },
                {
                    id:4,
                    title:"我是商品4"
                },
            ]
        })
    }
    render(){
        return(
            <Fragment>
                <p>我是商品页面</p>
                {
                    this.state.list.map((item,key)=>(
                        <li key={key}>
                            {/*git传值*/}
                            <Link to={`/SpXq?aid=${item.id}`}>{item.title}</Link>
                        </li>
                    ))
                }
                <button>请求</button>
            </Fragment>
        )
    }
}
export default Sp;