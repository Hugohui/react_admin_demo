/**
 * React Hook
 * useReducer 
 */
import { useReducer } from "react"


const initialState = {
    count: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        default:
            throw new Error()
    }
}

function HookReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment'})}>加法</button>
            <button onClick={() => dispatch({type: 'decrement'})}>减法</button>
        </>
    )
}

export default HookReducer