//useContext Hook

import React, { useContext } from 'react'
import ContextComponentF from './ContextComponentF'
import { UserContext, ChannelContext } from './UserContext'

function ContextComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {/* <ContextComponentF /> */}
            {user} - {channel}
        </div>
    )
}

export default ContextComponentE
