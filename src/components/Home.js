import React,{ Component,Fragment } from 'react';
class Home  extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list:["I" ]
        }
    }
    render(){
        const { inputValue,list} = this.state;
        return(
            <Fragment>
                <input
                    value={inputValue}
                    onChange={this.addOnChangeValue}
                />
                <button onClick={this.addList}>提交</button>
                <ul>
                    {
                        list.map((item,index) => (
                            <li key={index} onClick={this.delList.bind(this,index)}>{item}</li>
                        ))
                    }
                </ul>
            </Fragment>
        )
    }
    //获取vue改变的值
    addOnChangeValue = (e) =>{
        this.setState({
            inputValue:e.target.value
        })
    }
    //增加
    addList = () =>{
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:""
        })
    }
    //删除
    delList(index){
        // immutable state 不允许我们做任何改变
        // 所以复制一份出来 赋值给remoList 删除remoList的值 然后在把remoList赋值给list
        const adList = [...this.state.list]
        adList.splice(index,1)
        this.setState({
            list:adList
        })
    }
}
export default Home;