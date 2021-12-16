//useCallback Hook

import React from 'react'

function CallbackTitle() {
    console.log('Rendering Title')
    return (
        <h1>
            useCallback Hook
        </h1>
    )
}

export default React.memo(CallbackTitle)
