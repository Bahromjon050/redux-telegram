const initialState = {
    data: JSON.parse(localStorage.getItem('data')) || [],
    objShow: JSON.parse(localStorage.getItem('user')) || {},
    chatData: JSON.parse(localStorage.getItem('chat')) || []
}

export const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'Add':
            localStorage.setItem('data', JSON.stringify([...state.data, action.payload]))
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data'))
            }
        case 'Edit':
            localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === action.payload.id ? action.payload : val)))
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data'))
            }
        case 'Show':
            localStorage.setItem('user', JSON.stringify(action.payload))
            return {
                ...state,
                objShow: JSON.parse(localStorage.getItem('user'))
            }
        case 'delShow':
            localStorage.setItem('user', JSON.stringify({}))
            return {
                ...state,
                objShow: JSON.parse(localStorage.getItem('user'))
            }
        case 'setchat':
            let objTime = {
                soat: new Date().getHours(),
                minut: new Date().getMinutes()
            }
            if (action.payload.text !== '') {
                localStorage.setItem('chat', JSON.stringify([...state.chatData, { id: new Date().getTime(), hour: objTime, text: action.payload.text }]))
            }
            return {
                ...state,
                chatData: JSON.parse(localStorage.getItem('chat')) || []
            }
        case 'setedit':
            let objTime2 = {
                soat: new Date().getHours(),
                minut: new Date().getMinutes()
            }
            localStorage.setItem('chat', JSON.stringify(state.chatData.map((val) => val.id === action.payload.id ? { ...action.payload, hour: objTime2 } : val)))
            return {
                ...state,
                chatData: JSON.parse(localStorage.getItem('chat')) || []
            }
        case 'setdel':
            localStorage.setItem('chat', JSON.stringify(state.chatData.filter((val) => val.id !== action.payload.id)))
            return {
                ...state,
                chatData: JSON.parse(localStorage.getItem('chat')) || []
            }
        default: return state
    }
}