import React,{ Component,Fragment } from 'react';

class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            title:"双向数据绑定",
            username:'11'
        }
    }

    inputChange = (e) =>{
        this.setState({
            username:e.target.value,
        })
    }
    setUsername = () =>{
        this.setState({
            username:"大哥"
        })
    }
    render(){
        const {title,username } =this.state;
        return(
            <Fragment>
                <h2>{title}</h2>

                {/*model改变影响view view改变反过来影响model*/}
                <input type="text" onChange={this.inputChange} value={username}/>
                <span>{username}</span>

                <button onClick={this.setUsername}>改变username的值</button>
                <br/>
                {/*非约束性组件*/}
                {/*如果只是获取  不改变input的值 就用defaultVlue*/}
                <input type="text" defaultValue={username}/>
            </Fragment>
        )
    }
}
export default Todo;