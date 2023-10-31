import { useReducer } from "react";

function reducer(state, action) {
    if (action.type === 'increment_age') {
        return {
            age: state.age + 1
        }
    }

    throw Error('Unknow action');
}

export default function Counter () {
    const [state, dispatch] = useReducer(reducer, {age: 42})

    return (
        <>
            <button onClick={() => {
                dispatch({type: 'increment_age'})
            }}>
                Increment age
            </button>

            <p>you are {state.age}</p>
        </>
    )
}