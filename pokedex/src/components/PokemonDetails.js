//from packages
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ButtonBase from '@material-ui/core/ButtonBase'
import Button from '@material-ui/core/Button'

//from files

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
        margin: '10% 5%',
	},

	image: {
		width: 250,
		height: 250,
	},
	img: {
		margin: 'auto',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	button: {
		margin: '2%',
	},
	detailsContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
    },
    pokemonDetailsContainer: {
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`
    },
    combatDetailsContainer: {
        display: `flex`,
        justifyContent: "space-evenly",
        margin: "5% 0%"
    }
}))

function PokemonDetails() {
	const classes = useStyles()
	const { id } = useParams()
	const detailedList = useSelector((state) => state.detailedList)
	const [filteredPokemon] = detailedList.filter((pokemon) => {
		return pokemon.id === parseInt(id) || pokemon.name === id
	})

	const RenderItems = () => {
		if (filteredPokemon) {
			return (
				<div className={classes.root}>
					<CssBaseline />
					<Container maxWidth="lg" className={classes.pokemonDetailsContainer}>
						<img
							className={classes.image}
							alt={`${filteredPokemon.name} Image`}
							src={
								filteredPokemon.sprites.other['official-artwork']
									.front_default
							}
						/>
					</Container>
					<Container maxWidth="lg"  className={classes.combatDetailsContainer}>
						<div>
							<h2>Moves</h2>
                            {filteredPokemon.moves.map((singleMove, i) => {
                                return (
                                    <div key={i}>
                                        <p>
                                            {singleMove.move.name}
                                        </p>
                                    </div>
                                )
                            })}
						</div>
						<div>
							<h2>Abilities</h2>
                            {filteredPokemon.abilities.map((singleAbility, i) => {
                                return (
                                    <div key={i}>
                                        <p>
                                            {singleAbility.ability.name}
                                        </p>
                                    </div>
                                )
                            })}
						</div>
					</Container>
				</div>
			)
		} else {
			return <h1>Loading...</h1>
		}
	}

	return <RenderItems />
}

export default PokemonDetails
