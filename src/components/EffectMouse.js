//Render useEffect only once

import React, { useState, useEffect } from 'react'

function EffectMouse() {

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
    //To render useEffect only once (i.e, initial render) we pass a empty array as an second argument.
    //It tells the react that this particular effect does not depend on any props or state, so there is no reason to run this effect on
    //re-renders. 
    //This is also a mimic of componentDidMount

    return (
        <div>
            Hooks X- {x} : Y - {y}
        </div>
    )
}

export default EffectMouse
