//useContext Hook

import React from "react"

const UserContext = React.createContext('God')
const ChannelContext = React.createContext('Practice')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

const ChannelProvider = ChannelContext.Provider
const ChannelConsumer = ChannelContext.Consumer

export { UserProvider, UserConsumer, ChannelProvider, ChannelConsumer }
export { UserContext, ChannelContext }         