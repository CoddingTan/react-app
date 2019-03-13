/*
 * @Author: chentao 
 * @Date: 2019-03-13 10:37:39 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-03-13 17:56:29
 */
import React from 'react';
import { connect } from 'react-redux';
import * as HomeAction from './actions/HomeAction'
class Home extends React.Component {


    componentDidMount = () => {
        this.props.queryData("data_params")
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                console.log(i);
            }, 1000)
        }
        this.props.queryData("data_params")
        for (var i = 0; i < 10; i++) {
            ((i) => {
                setTimeout(() => {
                    console.log(i);
                }, 1000)
            })(i)
        }
    }
    /**
     * 示例代码 (常见需求):比如一个输入框输入事件触发redux
     */
    //渲染组件
    render() {
        const { inputRes, isRequestFinish, res } = this.props
        console.log('props', this.props)
        return (
            <div>
                <div> 我是Home组件</div>
                <div onClick={this.goToPage}>点击跳转到Login页面</div>
                <input placeholder='请输入东西' onChange={(event) => {
                    //调用redux函数
                    this.props.inputMyData(event.target.value)
                }} />
                <div>{inputRes}</div>
                {
                    isRequestFinish ? <div>{JSON.stringify(res)}</div> : null
                }
            </div>
        )
    }

    goToPage = () => {
        this.props.history.push({
            pathname: '/login'
        })
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        ...state.homeReducer, //该reducer对应store里面的reduce 
    }
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {

        queryData: (params) => dispatch(HomeAction.queryData(params)),
        inputMyData: (params) => dispatch(HomeAction.inputData(params))  //同步输入框输入事件
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
