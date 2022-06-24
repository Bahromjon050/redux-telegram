const initialState = {
    data: JSON.parse(localStorage.getItem('data')) || [],
    objShow: JSON.parse(localStorage.getItem('user')) || {}
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
        default: return state
    }
}