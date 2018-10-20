import React,{ Component,Fragment } from 'react';
import url from 'url'
class SpXq extends Component{
    constructor(props){
        super(props);
        this.state=({

        })
    }
    componentDidMount(){
        //先在路由界面加上path="/XwXq/:aid"
        //获取动态路由传值
        // console.log(url.parse(this.props.location.search))
        var query =url.parse(this.props.location.search,true).query;
        console.log(query)
    }
    render(){
        return(
            <Fragment>
                <p>我是商品详情页面</p>
            </Fragment>
        )
    }
}
export default SpXq;