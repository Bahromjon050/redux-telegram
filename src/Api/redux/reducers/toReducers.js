const initialState = {
    data: []
}

export const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'Add':
            return {
                ...state,
                data: [{ id: 0, name: "1" }]
            }
        case 'Del':
            return {
                ...state,
                data: [{ id: 0, name: "2" }]
            }
        default: return state
    }
}