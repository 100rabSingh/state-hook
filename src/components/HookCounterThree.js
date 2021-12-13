//useState with Objects
//useState does not automatically update or merge the object
//this is key difference to setState which you will come across in class components, setState update and merge the object
//in useState you have to do it manually.
//for that we use spread operator 

import React, { useState } from 'react'

function HookCounterThree() {

    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <form>
                <input
                    type='text'
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })}>
                </input>
                <input
                    type='text'
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })}>
                </input>
                <h2>Your First Name is - {name.firstName}</h2>
                <h2>Your last Name is - {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>

            </form>
        </div>
    )
}

export default HookCounterThree
