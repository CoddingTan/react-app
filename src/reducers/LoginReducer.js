
import {LOGIN_TYPE} from '../actionTypes/index'

//默认的state
let initialState={  
    userInfo:{  

    }
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_TYPE.QUERY_DATA:
            return {
                ...state,//渲染state 
                userInfo: action.params
            }
        default:
            return state;
    }
}