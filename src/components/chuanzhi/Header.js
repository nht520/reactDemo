import React,{ Component,Fragment } from 'react';
import PropTypes from 'prop-types';
class Header extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:""
        })
    }
    render(){
        return(
            /*
父组件给子组件传值：
    defaultProps:父子组件传值中，如果父组件调用子组件的时候不给子组件传值，可以在子组件中使用defaultProps定义的默认值
    propTypes：验证父组件传值的类型合法性
            1、引入import PropTypes from 'prop-types';
            2、类.propTypes = {
                name: PropTypes.string
            };
    都是定义在子组件里面
https://reactjs.org/docs/typechecking-with-proptypes.html
*/
            <Fragment>
                <header className="Header">
                    {this.props.title}
                </header>
            </Fragment>
        )
    }
}
//chuanzhi组件没有传值  我自定义默认值
Header.defaultProps={
    title: "标题"
}
// 验证父组件传值的类型合法性
Header.propTypes = {
    name: PropTypes.number
}
export default Header;