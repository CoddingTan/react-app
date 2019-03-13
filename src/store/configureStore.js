/*
 * @Author: chentao 
 * @Date: 2019-03-13 10:25:55 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-03-13 16:58:34
 */
import { createStore,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
//导入所有的reducer 注入store中
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
//导出store
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState
    )
    return store
}