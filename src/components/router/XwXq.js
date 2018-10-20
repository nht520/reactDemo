import React,{ Component,Fragment } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
class XwXq extends Component{
    constructor(props){
        super(props);
        this.state=({
            list:[],
            domain:'http://a.itying.com/',
        })
    }
    xq = (_id) =>{
        var api=this.state.domain+'api/productcontent?id='+_id;
        Axios.get(api).then((res)=>{
            console.log(res);
            this.setState({
                list:res.data.result[0]
            })
        },(err)=>{
            console.log(err)
        })
    }
    componentDidMount(){
        //先在路由界面加上path="/XwXq/:aid"
        //获取动态路由传值
        let _id = this.props.match.params._id;
        console.log(_id)
        this.xq(_id)
    }
    render(){
        return(
            <Fragment>
               <ul className="xq">
                   <div className="back">  <Link to='/'>返回</Link></div>
                   <li>
                       <h2>{this.state.list.title}</h2>
                       <p className="price">{this.state.list.price}/份</p>
                       {this.state.list.img_url?<img alt="" src={`${this.state.domain}${this.state.list.img_url}`} />:""}
                       <p>价格{this.state.list.price}</p>
                   </li>
                   <div className="p_detial">
                       <h3>商品详情</h3>
                       {/*解析html*/}
                       <div
                           className="p_content"
                           dangerouslySetInnerHTML={{__html: this.state.list.content}}>
                       </div>
                   </div>
               </ul>
            </Fragment>
        )
    }
}
export default XwXq;
//  /*
// react解析html
//     https://reactjs.org/docs/dom-elements.html
//     <div className="p_content"  dangerouslySetInnerHTML={{__html: this.state.list.content}}> </div>*/