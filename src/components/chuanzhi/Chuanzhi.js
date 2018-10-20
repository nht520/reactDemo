import React,{ Component,Fragment } from 'react';
import Header from "./Header";
// import Axios from 'axios';
//跨域请求
import fetchJsonp from 'fetch-jsonp';
//引用路由
class Chuanzhi extends Component{
    constructor(props){
        console.log("1构造函数")
        super(props);
        this.state=({
            title:"我是组件1",
            list:[ ]
        })
    }
    componentWillMount(){
        this.qingqiu()
    }
    chuAnzhi = () =>{
        alert("我是组件1的方法")
    }
    zhengeg = () =>{
    //获取伏组件的数据
        // alert(this.props.Fuzi.state.title)
    //    可以直接调用伏组件的方法
        this.props.Fuzi.run()
    }
    qingqiu = () =>{
        var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
        // Axios.get(api).then((res)=>{
        //     console.log(res)
        //     this.setState({
        //         list:res.data.result
        //     })
        // },(err)=>{
        //     console.log(err)
        // })
        fetchJsonp(api)
        .then((res)=> {
                return res.json()
        }).then((json) =>{
                console.log(json)
                this.setState({
                    list:json.result
                })
        }).catch(function(err) {
            console.log(err)
        })
    }
    render(){
        const { title } = this.state;
        return(
            <Fragment>
                <Header/>
                <h5>{title}</h5>
                <br/>
                <button onClick={this.chuAnzhi}>方法1</button>
                <button onClick={this.props.run}>获取父组件的方法</button>
                {/*获取整个FuZi组件*/}
                <button onClick={this.props.Fuzi.getDate}>获取整个FuZi组件</button>
                <br/>
                {/*子组件获取整个父组件组件实列*/}
                <button onClick={this.zhengeg}>子组件获取整个父组件组件实列</button>
                {/*rect获取数据*/}
                <ul>
                    {
                        this.state.list.map((item,aid)=>(
                            <li key={aid}>{item.title}</li>
                        ))
                    }
                </ul>
                <button onClick={this.qingqiu}>请求数据</button>
            </Fragment>
        )
    }
}
export default Chuanzhi;
