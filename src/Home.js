/*
 * @Author: chentao 
 * @Date: 2019-03-13 10:37:39 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-03-13 16:18:54
 */
import React from 'react';
import {connect} from 'react-redux';
import * as HomeAction from './actions/HomeAction'
class Home extends React.Component{


    componentDidMount=()=>{
        this.props.queryData("data_params")
    }
    
    //渲染组件
    render(){
        const {}=this.props
        console.log('props',this.props)
        return (
            <div>
                 <div> 我是Home组件</div>
                 <div onClick={this.goToPage}>点击跳转到Login页面</div>
            </div>
        )
    }

    goToPage=()=>{
            this.props.history.push({
                pathname:'/login'
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
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
