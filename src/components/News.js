import React,{ Component,Fragment } from 'react';
import sd from '../assets/images/sd.jpg'
class News extends Component{
    constructor(props){
        super(props);    /*用于父子组件传值  固定写法*/
        this.state={
            title:"我是一个NEws组件",
            blue:'blue',
            style:{
              color: "rgb(21, 146, 0)",
            },
            src:"https://www.baidu.com/img/bd_logo1.png",
            list:["00","11","22"],
            list0:[
                {
                    id:1,
                    title:"我是循环1"
                },
                {
                    id:2,
                    title:"我是循环2"
                }
            ],
            list1:[<h3 key="1">我是h3</h3>,<h4 key="2">我是h4</h4>]
        }
    }
    render(){
        const { title,list,list0,list1,style,blue,src }= this.state;
        return(
            <Fragment>
                <h2>{title}</h2>
                <ul>
                    {
                        list.map((item,id) => (
                            <li key={id}>{item}</li>
                        ))
                    }
                    {
                        list0.map((item,id) =>(
                            <li key={id}>{ item.title }</li>
                        ))
                    }
                </ul>
                {list1}
                <div title={title} style={{"color":"blue"}}>
                    绑定title 行内样式
                </div>
                <div  style={style}>
                   绑定style样式
                </div>
                <div className="red">
                    绑定class
                </div>
                <p className={blue}>
                    蓝色
                </p>
                <p className="logImage">
                    <img alt="111" src={sd} />
                    <br/>
                    <img alt="111" src={require('../assets/images/fdf.jpg')} />
                    <img alt="111" src="https://www.baidu.com/img/bd_logo1.png" />
                    <img alt="111" src={src} />
                    {/*引入图片*/}
                </p>
                <label htmlFor="name">姓名</label>
                <input id="name"/>

            </Fragment>
        )
    }
}

export default News;