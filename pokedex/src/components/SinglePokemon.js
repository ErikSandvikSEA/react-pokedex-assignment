import React from 'react'

function SinglePokemon(props) {
    const { item } = props
    return (
        <div>
            {item.name}
        </div>
    )
}

export default SinglePokemon
