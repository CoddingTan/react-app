/*
 * @Author: chentao 
 * @Date: 2019-03-13 10:25:55 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-03-14 10:10:25
 */
import { createStore,applyMiddleware } from 'redux'

//https://www.redux.org.cn/docs/advanced/AsyncFlow.html
//本身redux只支持同步数据流 可以使用 applyMiddleware() 来增强 createStore()  然后在Action那里如果做网络请求 就而已直接通过dispatch方法触发action给reduce接收
import thunkMiddleware from 'redux-thunk';//
//导入所有的reducer 注入store中
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
//导出store
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState
    )
    return store
}