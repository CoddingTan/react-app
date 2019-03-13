"use strict";





const REQUESTIMEOUT = 20 * 1000   // 网络超时时间
const UPLOADTIMEOUT = 120 * 1000   // 上传超时时间

const REQUESTFAILED = 'false' 


/**
 *  方法描述: 判断是否有网络
 */
function checkNet() {
    // console.log(NetInfo)
    // console.log(NetInfo.isConnected)
    // if (NetInfo.isConnected) {
    return true
    // }
    // toast("请检查网络")
    // return false
}

/**
 * 检查类型
 * @param {*} responseJson 
 */
function checkType(responseJson) {
    return responseJson.type == 1
}

export function fetchTypeNoParamGetData(url,successCallBack, fairedCallBack) {
    console.log('url',url)
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //'Authorization': "BasicAuth" + " " + headerToken,
        },
        method: 'GET',
    }).then(
        (response) => { return response.json() }
        ).then(function (response) {
          
            //获取数据,数据处理
            console.log('res=' + JSON.stringify(response));
            // console.log("%%%%%%%%%%%%%%%")
            successCallBack(response);

        }).catch(function (err) {
            //错误处理
            fairedCallBack(err);
        });
}








