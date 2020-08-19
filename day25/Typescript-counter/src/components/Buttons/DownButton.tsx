import React from 'react'

interface Prop{
    click: ()=>void
}
export const DownButton = ({click}:Prop) => {
    return (
        <div>
            <h1><button onClick={click}>Down</button></h1>
        </div>
    )
}
