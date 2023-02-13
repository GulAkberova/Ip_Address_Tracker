import React from 'react'
import { Audio } from 'react-loader-spinner'

function Loading() {
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
            <Audio
                height="80"
                width="80"
                color="black"
                ariaLabel="loading"
            />
        </div>
    )
}

export default Loading