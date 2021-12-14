//useContext Hook
import React from 'react'
import { UserConsumer, ChannelConsumer } from './UserContext'

function ContextComponentF() {
    return (
        <div>
            <UserConsumer>
                {
                    user => {
                        return (
                            <ChannelConsumer>
                                {
                                    channel => {
                                        return (
                                            <div> User Context Value {user}, Channel Context Value {channel} </div>
                                        )
                                    }
                                }
                            </ChannelConsumer>
                        )
                    }
                }
            </UserConsumer >
        </div >
    )
}

export default ContextComponentF
