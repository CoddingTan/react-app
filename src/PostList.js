import React, { Component,PureComponent } from 'react';
import logo from './logo.svg';
import './PostList.css';
import HelloWrold from './HelloWorld';
import PostItem from './PostItem'
import User from './User'

/**
 * 父组件  list组件
 */
class PostList extends PureComponent {

  
  constructor(props){
     super(props)
     this.state={
        parentText:'init',
        isShow:false,
        sonValue:'sonValue',
        i:0
     }
     this.handerOnVote=this.handerOnVote.bind(this)
  }

  //子组件调用方法  这个是回调方法
  handerOnVote(value){
    this.setState({
       sonValue:value,
       isShow:!this.state.isShow
    })
  }

  //父组件某个位置点击事件
  parentOnclick=()=>{
      console.log("我是父组件的点击事件")
      let num=(++this.state.i)
      console.log('num',num)
      let strNum=num.toString()
      console.log(strNum)
      this.setState({
        parentText:'prentText_after',
        b:'c',
      },()=>{
          console.log('父组件的setState方法设置成功之后')
      })
      
  }
  
  //render函数的返回值
  render() {
   console.log('parent_render_props',this.props)
    return (
      <div className="App">
        <User name="React" age="4" address="America"/>
        <PostItem parentText={this.state.parentText} onVote={this.handerOnVote}/>
         <div>{this.state.isShow?this.state.sonValue:''}</div>
         <div>父组件测试{this.state.i}</div>
        <div onClick={this.parentOnclick} >父组件点击</div>
      </div>
    );
  }

  //这个方法是用来接收父组件传过来的props 如果父组件继承的是PureComponent
  componentWillReceiveProps(nextProps){
      console.log('parent_nextProps',nextProps)
  }

}

export default PostList;
