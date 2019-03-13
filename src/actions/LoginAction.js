/*
 * @Author: chentao 
 * @Date: 2019-03-13 14:51:14 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-03-13 14:55:59
 */
import {lOGIN_TYPE} from './actionTypes' 
//同步
export function queryData(params) {
    console.log('queryData',params)
    return {
        type: lOGIN_TYPE.LOGIN_DATA,
        params: params
    }
}
