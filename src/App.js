import React,{ Component,Fragment } from 'react'
import './assets/css/css.css';
//引用Home组件
import TodoList from "./components/TodoList/TodoList";
import FuZi from "./components/chuanzhi/FuZi";
import List from "./components/List";
import Sjonclick from "./components/Sjonclick";
import Todo from "./components/Todo";
import ReactFrom from "./components/ReactFrom";
import News from "./components/News";
import Lifecycle from "./components/Lifecycle";
import Routers from "./components/router/Routers";
class App extends Component {
    constructor(props){
        super(props);
        this.state = ({
            flag:true,
            title:"我是app的title"
        })
    }
    setFlag=()=>{
        this.setState({
            flag:!this.state.flag,
            title:"我是改变后的title"
        })
    }
    render(){
        return(
            <Fragment>
                {/**/}
                <Routers/>
                {/*组件传值*/}
                <FuZi/>
                {/*todList功能 并且保存在本地*/}
                <TodoList/>
                <List/>
                <Sjonclick/>
                {/*双相数据绑定*/}
                <Todo/>
                {/*input表单获取值*/}
                <ReactFrom/>
                {/*rect 基础事件 绑定方法*/}
                <News/>
                {/*<Lifecycle/>*/}
                {
                    this.state.flag?<Lifecycle title={this.state.title}/>:""
                }
                <button onClick={this.setFlag}>销毁组件</button>
            </Fragment>
        )
    }
}
export default App;