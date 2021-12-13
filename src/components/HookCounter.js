// useState Hook -  lets you add a React State to a functional Component
//useState Hook accepts the initial value as argument and return the current value of the argument and the method capable of updating it.

import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)           //Array Destructing

    return (
        <div>
            <button onClick={() => setCount(count + 1)}> Count {count}</button>
        </div>
    )
}

export default HookCounter
