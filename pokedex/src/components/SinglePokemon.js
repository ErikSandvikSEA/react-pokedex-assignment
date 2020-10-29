import React from 'react'

function SinglePokemon(props) {
    const { pokemon } = props
    return (
        <div>
            {pokemon.name}
        </div>
    )
}

export default SinglePokemon
