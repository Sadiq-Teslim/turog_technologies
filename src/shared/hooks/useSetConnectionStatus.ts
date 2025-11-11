import React, { useState } from "react"

export const useSetConnectionStatus = () => {
    const [connectionStatus, setConnectionStatus] = useState<boolean>(false) 
    const toggle = (connection: string) : boolean => {
        // TODO: call api to toggle connection status
        setConnectionStatus(!connectionStatus)
        return connectionStatus
    }
    return { connectionStatus, toggle }
}