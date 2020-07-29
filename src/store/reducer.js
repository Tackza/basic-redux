const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREASE':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'PLUS':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'MINUS':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'CLEAR':
            return {
                ...state,
                counter: 0
            }
    }
    return state
}

export default reducer