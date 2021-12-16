//Custom Hook
//Using Custom Hook useInput

import React, { useState } from 'react'
import useInput from '../hooks/useInput'

function CustomUserForm() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        First Name :
                    </label>
                    <input type='text' {...bindFirstName}></input>
                </div>
                <div>
                    <label>
                        Last Name :
                    </label>
                    <input type='text' {...bindLastName}></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CustomUserForm
