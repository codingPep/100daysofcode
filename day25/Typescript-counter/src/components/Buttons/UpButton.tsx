import React from 'react'

interface Prop{
    click: () => void
}

export const UpButton = ({click}:Prop) => {
    return (
        <div>
            <h1> <button onClick={click}>Up</button> </h1>
        </div>
    )
}
