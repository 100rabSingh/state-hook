//useCallback Hook

import React, { useState, useCallback } from 'react'
import CallbackButton from './CallbackButton'
import CallbackCount from './CallbackCount'
import CallbackTitle from './CallbackTitle'

function CallbackParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <CallbackTitle />
            <CallbackCount text='Age' count={age} />
            <CallbackButton handleClick={incrementAge}>Increment Age</CallbackButton>
            <CallbackCount text='Salary' count={salary} />
            <CallbackButton handleClick={incrementSalary}>Increment Salary</CallbackButton>
        </div>
    )
}

export default CallbackParentComponent
