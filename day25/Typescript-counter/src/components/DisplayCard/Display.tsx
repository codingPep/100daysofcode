import React from 'react'


interface Prop{
    text ?: number
}

export const Display = ({text}:Prop) => {
    return (
        <div>
            <h1>Counter value: {text}</h1>
        </div>
    )
}
