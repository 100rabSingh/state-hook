import React, { useState, useEffect } from 'react'
import EffectMouseCopy from './EffectMouseCopy'

function EffectMouseContainer() {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <EffectMouseCopy />}
        </div>
    )
}

export default EffectMouseContainer
