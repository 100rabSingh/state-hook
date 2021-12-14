//useEffect with cleanup i.e, mimic the componentDidUnmount lifecycle method

import React, { useState, useEffect } from 'react'

function EffectMouseCopy() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect Called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component unmounting')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])


    //The function that is passed to use effect can return a function which will be executed when the component will unmount.


    return (
        <div>
            Hooks X- {x} : Y - {y}
        </div>
    )
}

export default EffectMouseCopy
