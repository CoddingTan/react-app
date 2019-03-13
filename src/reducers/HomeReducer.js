
import {HOME_TYPE} from '../actionTypes/index'

//默认的state
let initialState={  
    res:{  

    },
    isRequestFinish:false,
    inputRes:'' ,// 初始化一个值
}

export default function homeReducer(state = initialState, action) {
    console.log('reduce接收到的action',action)
    switch (action.type) {
        case HOME_TYPE.QUERY_DATA:
            return {
                ...state,//渲染state 
                res: action.params,
                isRequestFinish:true,
            }
            case HOME_TYPE.INPUT_DATA:
            return {
                 ...state,
                 inputRes:action.params
            }
        default:
            return state;
    }
}