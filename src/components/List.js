import React,{ Component,Fragment } from 'react'

class List extends Component{

    constructor(props){
        super(props);
    //    定义数据
        this.state={
            name:"我是List组件",
            age:"改变this指向方法2",
            three:"改变this指向方法3 ",
            gb:"改变state里面的值",
            gbcz:"gaibian",
            userinfo:{
                name:"REACT"
            }

        }
        //第二种改变this指向的方法
        this.delClick = this.delClick.bind(this)
    }
    addClick(){
        alert(this.state.name)
    }
    delClick(){
        alert(this.state.age)
    }
    moveClick =()=>{
        alert(this.state.three)
    }
    gbClick = () => {
        this.setState({
            gb:"改变了,这是改变后的值"
        })
    }
    //点击方法的时候传值
    setName = (a,b) =>{
        this.setState({
            gbcz:a+b
        })
    }

    render(){
        const {name,gb,gbcz} = this.state;
        return(
            <Fragment>
                <h2>
                    {name}
                </h2>
                <h1>
                    { this.state.userinfo.name }
                </h1>

                {/*<button onClick={this.addClick()}>方法后面加括号会自动执行</button>*/}
                <button onClick={this.addClick.bind(this)}>改变this指向方法1</button>
                <button onClick={this.delClick}>改变this指向方法2</button>
                <button onClick={this.moveClick}>改变this指向方法3</button>

                <h5>{gb}</h5>
                <button onClick={this.gbClick}>改变state里面的值</button>
                <br/>
                <h5>{gbcz }</h5>
                <button onClick={this.setName.bind(this,'我是传过来的1','我是2')}>执行方法传值</button>
                <br/>
            </Fragment>
        )
    }
}

export default List;