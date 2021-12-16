import React, { useState, useEffect, useRef } from 'react'

function RefHookTimer() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        };
    }, [])

    return (
        <div>
            Hook Timer - {timer}
            <div>
                <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
            </div>
        </div>
    )
}

export default RefHookTimer

//useRef hook second use - it can be use to create a generic container which  hold a mutable value similar to instance property on
// a class component. this generic container does not cause re-renders when the data stored changes.
// at the same time it remembers the stored data even after the other state variable cause re-render to the components. 