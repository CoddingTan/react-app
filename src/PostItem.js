import React, { Component,PureComponent } from 'react';

/**
 * 子组件 item组件
 */
class PostItem extends Component{


    //构造器
     constructor(props){
         super(props);
         this.state={
            text:''
         }
     }
     
     //按钮的点击事件
     btnOnClick=()=>{
           let{onVote}=this.props
            console.log("子组件点击事件")
            this.setState({
                text:'66666' //子组件点击改变子组件的值
            },()=>{
                 console.log("text",this.state.text)
            })

            //调用一个函数  点击传值给父组件
            //onVote("子组件传的值value")
     }

     //子组件渲染问题
     render(){
         console.log('子组件item_render')
          return (
              <div>
                   <div>帖子列表:</div>
                   <ul>
                       <li>大家一起来学习React组件</li>
                       <li>前端框架你最爱哪个</li>
                       <li onClick={this.btnOnClick}>web App的时代已经到来</li>
                   </ul>
              </div>
          )
     }
     //接受父组件传值
     componentWillReceiveProps(nextProps){
            console.log('子组件postItem的WillnextProps方法响应参数接下来的NextProps：',nextProps)
            console.log('子组件postItem的WillnextProps方法响应参数接下来的当前的Props：',this.props)
            if(nextProps.parentText!==this.props.parentText){
                 //2次渲染的 结果不一样
                 console.log('不全等于')
            }else{
                console.log("else")
            }
        
     }
     //是不是 应该更新组件
     shouldComponentUpdate(nextProps,nextState){
         console.log('shouldComponentUpdate')
         return false;
     }
     //当shouldComnponet组件返回为true的时候才会更新 
     componentWillUpdate(){
         console.log('将会更新')
     }

     //更新 的 render之后调用 
     componentDidUpdate(){
         console.log('render之后的didUpdate方法')
     }
}

export default PostItem