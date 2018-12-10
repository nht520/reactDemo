import React,{ Component,Fragment } from 'react';
import Zizujian from "./Zizujian";
import Chuanzhi from "./Chuanzhi";
class FuZi extends Component {
    constructor(props){
        super(props);
        this.state=({
            title:"大哥",
            zuzi:"父子",
            msg:'我是伏组件的msg'
        })
    }
    Fuzi = () =>{
        //ref调用子组件的方法 和数据
        this.refs.chuanzhi.chuAnzhi()
        alert(this.refs.zizujian.state.msg)
    }
    run  = () =>{
        // zuzi={this.fuzi 把伏组件的run 方法传给子组件
        // Fuzi={this} 把整个Fuzi组件传给子组件
        alert("我是父组件的方法")
    }
    getDate = () =>{
        this.zuzi=this.state.zuzi
        alert(this.zuzi)
    }
    //获取子组件传过来的数据
    huoqu = (result) =>{
        alert("获取子组件传过来的数据");
        this.setState({
            msg:result
        })
    }
    render(){
        return(
            <Fragment>
                <Chuanzhi ref="chuanzhi" run={this.run} Fuzi={this}/>
                <Zizujian ref="zizujian" run={this.run} Fuzi={this}/>
                <br/>
                <button onClick={this.Fuzi}>调用</button>
                <br/>
                <h5>{this.state.msg}</h5>
            </Fragment>
        )
    }
}
export default FuZi;
// 父子组件传值：
//     父组件给子组件传值
// 1.在调用子组件的时候定义一个属性  <Header msg='首页'></Header>
// 2.子组件里面 this.props.msg
// 说明：父组件不仅可以给子组件传值，还可以给子组件传方法,以及把整个父组件传给子组件。
//     父组件主动获取子组件的数据
// 1、调用子组件的时候指定ref的值   <Header ref='header'></Header>
// 2、通过this.refs.header  获取整个子组件实例
