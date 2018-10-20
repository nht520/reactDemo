import React,{ Component,Fragment } from 'react';
class ReactFrom extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"我是ReactFrom表单提交",
            name:"",
            sex:"1",
            city:'',
            aep:'',
            select:[
                "北京","上海","省政"
            ],
            aihao:[
                {
                    id:1,
                    title:'敲代码',
                    "checked":false
                },
                {
                    id:2,
                    title:'玩游戏',
                    "checked":false
                },
                {
                    id:3,
                    title:'玩游戏',
                    "checked":false
                }
            ],
            info:''
        }
    }
    handeName = (e) =>{
        this.setState({
            name:e.target.value,
        })
    }
    handeSex = (e) =>{
        this.setState({
            sex:e.target.value
        })
    }
    addSelect = (e) =>{
        this.setState({
            city:e.target.value
        })
    }
    handCheckbox = (key) =>{
        const hobby = this.state.aihao;
        hobby[key].checked=!hobby[key].checked;
        this.setState({
            aihao:hobby
        })
    }
    addInfo = (e) =>{
        this.setState({
            info:e.target.value
        })
    }
    addClick = () =>{
        console.log(
            this.state.name,
            this.state.sex,
            this.state.city,
            this.state.aihao,
            this.state.info
        )
    }
    render(){
        const {title,name,select,aihao,info,city } = this.state;
        return(
            <Fragment>
                <h2>{title}</h2>
                用户名：<input type="text" value={name} onChange={this.handeName}/>
                <br/>
                性别：男：<input type="radio" value="1" checked={this.state.set===1} onChange={this.handeSex}/>
                      女：<input type="radio" value="2" checked={this.state.set===2} onChange={this.handeSex}/>
                <br/>
                居住城市：<select value={city} onChange={this.addSelect}>
                    {
                        select.map((item,key)=>(
                            <option key={key}>{item}</option>
                        ))
                    }
                </select>
                <br/>
                爱好：
                {
                    aihao.map((item,key)=>(
                        <span key={key}>
                             <input
                                 type="checkbox"
                                 checked={item.checkbox}
                                 onChange={this.handCheckbox.bind(this,key)}
                             />{item.title}
                        </span>
                    ))
                }
                <br/>
                备注：<textarea value={info} onChange={this.addInfo}>
                     </textarea>
                <input  type="submit"  defaultValue="提交" onClick={this.addClick}/>
            </Fragment>
        )
    }
}
export default ReactFrom;