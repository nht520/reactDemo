import React,{ Component,Fragment } from 'react';
import Header from "./Header";
class Zizujian extends Component{
    constructor(props){
        super(props);
        this.state=({
            // title:"2015",
            title:"我是组件2",
            msg:"我是组件2的msg",
        })
    }
    ziZujian =() =>{
        alert("我是组件2的方法")
    }
    render(){
        const { title } = this.state;
        return(
            <Fragment>
                <Header title={title} name={this.state.title}/>
                <h5>{title}</h5>
                <button onClick={this.ziZujian}>方法2</button>
                <button onClick={this.props.run}>获取父组件的方法</button>
                <br/>
                {/*子组件执行伏组件的方法给父组件传值*/}
                <button onClick={this.props.Fuzi.huoqu.bind(this,this.state.msg)}>子组件给伏组件传值</button>
            </Fragment>
        )
    }

}
export default Zizujian;