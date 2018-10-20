import React, {Component,Fragment} from 'react';

class Sjonclick extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"我是事件对象组件",
            userName:"",
            addName:''
        }
    }
// 事件对象  、键盘事件、 表单事件 、ref获取dom节点、React实现类似vue双休数据绑定
// 事件对象:在触发DOM上的某个事件时,会产生一个事件对象event。这个对象中包含着所有与事件有关的信息
run = (e) =>{
    // alert(this.state.title)
    // console.log(e.target);
    // e.target.style.color="red"
//    获取demo的属性
    alert(e.target.getAttribute('aid'))
}
// 1.监听表单的改变事件
// 2.在改变的事件里面获取表单输入的值
// 3.把表单的值赋值给userNamer
// 4. 点击按钮的时候获取state里面的user里面的值
inputValueButton = (e) =>{
    this.setState({
        userName:e.target.value
    })
}
gtInput = () =>{
    let val = this.state.userName;
    alert(val)
}

//用ref获取input的值
inputValu = () =>{
    let value = this.refs.addName.value;
    this.setState({
        addName:value,
    })
}
btInput1 = () =>{
    let value = this.state.addName;
    alert(value)
}
//键盘事件
inputKeyUp =(e) =>{
    if (e.keyCode === 13){
        alert("你按下了回车")
        // alert(e.target.value)
    }
}
render(){
        const { title,} = this.state;
    return(
        <Fragment>
            <h2>
                {title}
            </h2>
            <button aid="123" onClick={this.run}>事件对象</button>
            {/**/}
            <br/>
            {/*获取表单的值*/}
            <input type="text"  onChange={this.inputValueButton} />
            <button onClick={this.gtInput}>点击按钮获取input的方法1</button>
            <br/>

            {/*用ref获取表单的值*/}
            <input type="text" ref="addName" onChange={this.inputValu} />
            <button onClick={this.btInput1}>点击按钮获取input的方法2</button>
            <br/>
            {/*键盘事件*/}
            <input onKeyUp={this.inputKeyUp}/>
            {/**/}
        </Fragment>
    )
}
}

export default Sjonclick;