import { actionTypes } from "./actionTypes"

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREASE
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.PLUS:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.MINUS:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.CLEAR:
            return {
                ...state,
                counter: 0
            }
    }
    return state
}

export default reducer