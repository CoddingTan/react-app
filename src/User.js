
import React, { PureComponent,Component } from 'react';
/**
 * 子组件 User组件
 */
class User extends Component{
     

    constructor(props){
        super(props)
        console.log('user_constructor',this.props)
    }
    render(){
         const {name,age,address}=this.props
         console.log('子组件user',this.props)
            return (
                <div>
                    <ul>
                        <li>姓名：{name}</li>
                        <li>年龄：{age}</li>
                        <li>出生地：{address}</li>
                    </ul>
                </div>
            )
    }

    componentWillReceiveProps(nextProps){
        console.log('user组件的WillReceiverProps方法触发')
    }
}
export default User