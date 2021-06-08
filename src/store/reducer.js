const initialState = {
    UserInfo: {
        name: 'HUA'
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_USER_INFO':
            return {
                ...state,
                UserInfo: action.info
            }
        default:
            return state
    }
}