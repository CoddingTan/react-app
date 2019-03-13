/*
 * @Author: chentao 
 * @Date: 2019-03-13 11:55:27 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-03-13 14:39:33
 */

import {HOME_TYPE }from '../actionTypes'
//同步
export function queryData(params) {
    console.log('queryData',params)
    return {
        type: HOME_TYPE.QUERY_DATA,
        params: params
    }
}
