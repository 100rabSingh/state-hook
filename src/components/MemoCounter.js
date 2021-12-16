import React, { useState, useMemo } from 'react'

function MemoCounter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    // const isEven = () => {
    //     let i = 0
    //     while (i < 2000000000) i++
    //     return counterOne % 2 === 0
    // }

    //Here first we use isEven as a function to check whether the count is even or not, but because of while loop iterations it will
    //take time in every update (with CounterOne it is fine).
    //But in Case of updating Count Two also it will take time because the whole component will re-render and isEven Function will
    //be called again, even though it has no use in updating countertwo.

    // This is where useMemo comes into the picture. It only re-render the isEven when counterOne updates, not counterTwo
    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default MemoCounter

//useCallback vs useMemo
// useCallback caches the provided function instance itself
// useMemo invokes the function and caches the result
