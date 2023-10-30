import { useCallback, useEffect, useState } from "react";

const s = new Set()

const Child = ({callback}) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('child useeffect')
        setCount(callback())
    }, [callback]);

    return (
        <div>
            child count: {count}
        </div>
    )
}

export default function Parent() {
    const [count, setCount] = useState(1)
    const [val, setVal] = useState('')

    const callback = useCallback(() => {
        console.log(count, 'usecallback');
        return count;
    }, [count])

    // const callback = () => {
    //     console.log(count, 'usecallback');
    //     return count;
    // }

    s.add(callback)
    console.log(s, 'sssss')

    return (
        <div>
            <h4>parent count:{count}</h4>
            <h4>set size:{s.size}</h4>
            <div>
                <button onClick={() => setCount(count + 1)}>+</button>
                <input value={val} onChange={event => setVal(event.target.value)}/>
            </div>
            <Child callback={callback} />
        </div>
    )
}