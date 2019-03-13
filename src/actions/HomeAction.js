/*
 * @Author: chentao 
 * @Date: 2019-03-13 11:55:27 
 * @Last Modified by: chentao
 * @Last Modified time: 2019-03-13 17:09:47
 */

import { HOME_TYPE } from '../actionTypes'


import { fetchTypeNoParamGetData } from '../utils/HttpUtils'

//同步
export function inputData(params) {
    console.log('接收参数', params)
    return {
        type: HOME_TYPE.INPUT_DATA,
        params: params,
    }
}
//同步
export function queryData(params) {
    console.log('queryData', params)
    let url = "https://api.apiopen.top/EmailSearch?number=1012002"

    return (dispatch) => {
        console.log('dispatch',dispatch)
        fetchTypeNoParamGetData(url, (res) => {
            dispatch({
                type: HOME_TYPE.QUERY_DATA,
                params: res,
            })
        }, () => {
        })
    }

}

