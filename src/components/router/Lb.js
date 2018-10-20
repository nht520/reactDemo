import React,{ Component,Fragment } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
class Lb extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:'',
            cate:"",
            price:"",
            img_url:'',
            domain:'http://a.itying.com/',
            list:[]
        })
    }
    qinqiu = () =>{
        var api=this.state.domain+"api/productlist";
        Axios.get(api).then((res)=>{
            console.log(res)
            this.setState({
                list:res.data.result
            })
        },(err) =>{
            console.log(err)
        })
    }
    componentDidMount(){
        this.qinqiu()
    }
    render(){
        return(
            <Fragment>
                <div className="lb">
                    {
                        this.state.list.map((item,key)=>{
                            return(
                                <div className="item" key={key}>
                                    <h3 className="item_cate">{item.title}</h3>
                                    <ul className="item_list">
                                        {
                                            item.list.map((v,k)=>{
                                              return(
                                                  <li key={k}>
                                                      <Link to={`/XwXq/${v._id}`}>
                                                          <div className="inner">
                                                              <img alt="" src={`${this.state.domain}${v.img_url}`}/>
                                                              <p className="title">{v.title}</p>
                                                              <p className="price">{v.price}</p>
                                                          </div>
                                                      </Link>
                                                  </li>
                                              )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>

            </Fragment>
        )
    }
}
export default Lb;