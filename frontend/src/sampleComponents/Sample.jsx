import React from 'react'
import usePing from '../hooks/apis/queries/usePing'

const Sample = () => {
    const { data, error, isLoading } = usePing()
    
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    
    return (
        <div>Sample Component 
            {data && <div>{data.message}</div>}
        </div>
    )
}

export default Sample