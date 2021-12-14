//useEffect  with incorrect Dependency

import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
        // setCount(prevCount => prevCount + 1)    //another way to add dependency of changing state or props
    }

    useEffect(() => {

        // doSomething = () => {
        //     console.log(someProp)
        // }

        // doSomething()
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [count])                         //adding dependency of changing state or props ; when we define a function with some prop
    //in use effect we should not forget to add the dependency of that prop to the second argument i.e, [someProp]

    //Problem - when we leave a empty array it updates the value of state or props only one time because it is not looking for
    //changing state or props. Solution to that is add the dependency of changing state or prop to that array and tell react to look for it.

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
