
/*
 * @Author: chentao 
 * @Date: 2019-03-13 11:38:23 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-03-13 14:38:52
 * 通过redux里面的combineReducers方法合并所有reducer
 */
import {combineReducers} from 'redux'
import homeReducer from './HomeReducer'

 export default combineReducers({
    homeReducer,
 })
 