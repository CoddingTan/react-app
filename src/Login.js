/*
 * @Author: chentao 
 * @Date: 2019-03-13 15:05:30 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-03-13 16:23:56
 * 登陆页面
 */
import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            inputValue: '',
            isShow: false,
        }
        this.btnOnclick = this.btnOnclick.bind(this)
    }

    btnOnclick() {
        console.log('按钮点击')
        this.setState({
            count: ++this.state.count,
            isShow: !this.state.isShow,
        })
    }


    render() {
        return (
            <div className="container">
                <div className="loginTitle">登陆</div>

                <input className="inputValue" placeholder="请输入账号" onChange={(e) => {
                    console.log('val', e.target.value)
                    this.setState({
                        inputValue: e.target.value
                    })

                }} />
                <div className="content" onClick={this.btnOnclick}>按钮点击{this.state.count}</div>
                {
                    this.state.isShow ? <div>你的输入结果为：{this.state.inputValue}</div> : null
                }
                {/* 使用Link标签跳转过去 */}
                <Link to={{
                    pathname: '/postList'
                }}
                >跳转过去</Link>

                <div onClick={this.startActivity}>点击跳转</div>
            </div>
        )
    }


    startActivity = () => {
        console.log('history', this.props.history)
        //this.props.history.goBack()
        /**区别地址
         * http://zhangdajia.com/2018/11/30/React-router-v4%E4%B8%ADBrowserRouter%E5%92%8CHashRouter%E7%9A%84%E5%8C%BA%E5%88%AB/
         * 在资料中自定义参数大多使用query字段，通过js传递参数时，query属于自定义属性
         */
        // this.props.history.push({
        //     pathname: '/postList',
        //     state: {
        //         msg: '来自首页的问候！by query'
        //     }
        // })
        this.props.history.push({
            pathname: '/postList',
            query: {
                msg: '来自首页的问候！by query'
            }
        })
    }
}
export default Login