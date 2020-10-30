//from packages
import React, { useEffect } from 'react'
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
import { capitalizeFirstLetter } from "../constants/helpers"
import { primaryBlue, primaryRed, primaryYellow } from "../styles/appStyles"


const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
        margin: '10% 5%',
        display: `flex`,
        flexDirection: "column",
        alignItems: "center"
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
        margin: "5% 0%",
    },
    typeContainer: {
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-evenly`,
        margin: `2%`
    },
    typesBox: {
        margin: `2%`,
        padding: `5% 10%`,
        border: `3px solid ${primaryBlue}`,
        borderRadius: `5px`,
        background: primaryYellow

    }
}))

function PokemonDetails() {
	const classes = useStyles()
	const { id } = useParams()
	const detailedList = useSelector((state) => state.detailedList)
	const [filteredPokemon] = detailedList.filter((pokemon) => {
		return pokemon.id === parseInt(id) || pokemon.name === id
    })
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

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
                        <h1>{capitalizeFirstLetter(filteredPokemon.name)}</h1>
                        <h4>ID# {filteredPokemon.id}</h4>
                        <div className={classes.typeContainer}>
                            {filteredPokemon.types.map((singleType, idx) => {
                                return (
                                    <div key={idx} className={classes.typesBox}>
                                        <span>{capitalizeFirstLetter(singleType.type.name)}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <h5>Height: {filteredPokemon.height}</h5>
                        <h5>Weight: {filteredPokemon.weight}</h5>
					</Container>
					<Container maxWidth="lg"  className={classes.combatDetailsContainer}>
						<div>
							<h2>Moves</h2>
                            {filteredPokemon.moves.map((singleMove, i) => {
                                return (
                                    <div key={i}>
                                        <p>
                                            {capitalizeFirstLetter(singleMove.move.name)}
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
                                            {capitalizeFirstLetter(singleAbility.ability.name)}
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
