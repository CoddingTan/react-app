import React, { PureComponent } from 'react';
import './HelloWorld.css'

class HelloWrold extends PureComponent{

    constructor(props){
        super(props)
        console.log('react的构造器调用了')
    }
    componentDidMount(){
        console.log('did函数被调用了')
    }
    render(){
        console.log("render")
        var a
        console.log('var:'+a)
        return <div className="helloWorldContainer">
            <div>我是helloWorld自定义组件</div>
        </div>
    }
}
export default HelloWrold