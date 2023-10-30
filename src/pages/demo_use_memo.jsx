import React, {useState, useMemo, useCallback} from "react";

const s = new Set()
export default function MyComponent(props) {
    const [count, setCount] = useState(0);

    const expensiveFunction = useMemo(() => {
        console.log('caculating,,,')
        let result = 0;
        for (let i = 0; i < count * 100000; i++) {
            result += i;
        }
        return result;
    }, [count])

    //  const expensiveFunction = (() => {
    //     console.log('caculating,,,')
    //     let result = 0;
    //     for (let i = 0; i < count * 100000; i++) {
    //         result += i;
    //     }
    //     return result;
    // })();


    // const handleClick = useCallback(() => {
    //     console.log('click,,,')
    //     setCount(count + 1)
    // }, [count])

    const handleClick = () => {
        console.log('click,,,')
        setCount(count + 1)
    }

    s.add(handleClick)
    console.log(s, '2222')


    return (
        <div>
            <p>count: {count}</p>
            <p>expensiveFunction: {expensiveFunction}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}