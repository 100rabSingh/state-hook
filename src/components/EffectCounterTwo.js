//Conditional Render in useEffect

import React, { useState, useEffect } from 'react'

function EffectCounterTwo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('Updating Document Title')
        document.title = `You Clicked ${count} times`
    }, [count])                                             //To conditional render of useEffect we pass second paramenter which is an
    //Array and within this array we specify prop or state we need to watch for.
    //Only if that props or state changes the useEffect will be executed.

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => { setCount(count + 1) }}>Click {count} times</button>
        </div>
    )

}

export default EffectCounterTwo
