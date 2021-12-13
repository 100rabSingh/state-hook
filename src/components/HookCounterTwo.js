//useState with previous State

import React, { useState } from 'react'

function HookCounterTwo() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            // setCount(count + 1)
            setCount(prevCount => prevCount + 1)
        }
        console.log(count)
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => { setCount(initialCount) }}>Reset</button>
            <button onClick={() => { setCount(prevCount => prevCount + 1) }}>Increment</button>
            <button onClick={() => { setCount(prevCount => prevCount - 1) }}>Decrement</button>
            <button onClick={incrementFive}>Increment Five</button>
        </div>
    )
}

export default HookCounterTwo

//You should set State using a function which updates the state based on previous state value. As you can see in incrementFive method
// if we use the (commented out) setCount it will update the value by 1 only.
