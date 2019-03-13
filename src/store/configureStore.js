/*
 * @Author: chentao 
 * @Date: 2019-03-13 10:25:55 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-03-13 14:38:37
 */
import { createStore } from 'redux'

//导入所有的reducer 注入store中
import rootReducer from '../reducers'
//导出store
export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState
    )
    return store
}