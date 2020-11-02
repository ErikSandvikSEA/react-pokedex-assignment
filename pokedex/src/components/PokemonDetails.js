//from packages
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import {CssBaseline, Container, CircularProgress} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

//from files
import { capitalizeFirstLetter } from '../constants/helpers'
import { primaryBlue, primaryYellow } from '../styles/appStyles'
import '../styles/PokemonDetails.css'
import pokemonLogo from '../styles/images/Pokemon-Logo.png'

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
		margin: '10% 5%',
		display: `flex`,
		flexDirection: 'column',
		alignItems: 'center',
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
		alignItems: `center`,
		background: `white`,
		border: `5px solid #ffca00`,
		borderRadius: `10px`,
	},
	typeContainer: {
		display: `flex`,
		flexDirection: `row`,
		justifyContent: `space-evenly`,
		margin: `2%`,
	},
	typesBox: {
		margin: `2%`,
		padding: `5% 10%`,
		border: `3px solid ${primaryBlue}`,
		borderRadius: `5px`,
		background: primaryYellow,
	},
}))

function PokemonDetails() {
	const classes = useStyles()
	const history = useHistory()
	const { id } = useParams()
	const detailedList = useSelector((state) => state.detailedList)
	const [filteredPokemon] = detailedList.filter((pokemon) => {
		return pokemon.id === parseInt(id) || pokemon.name === id
	})

	const goBack = () => {
		history.push("/")
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const RenderItems = () => {
		if (filteredPokemon) {
			return (
				<div className={classes.root}>
					<CssBaseline />
					<Container
						maxWidth="lg"
						className={classes.pokemonDetailsContainer}
					>
						<img className="logo" src={pokemonLogo} alt="main logo" />
						<img
							className={classes.image}
							alt={`${filteredPokemon.name}`}
							src={
								filteredPokemon.sprites.other['official-artwork']
									.front_default
							}
						/>
						<div className="details_container">
							<h1>{capitalizeFirstLetter(filteredPokemon.name)}</h1>
							<h4>ID# {filteredPokemon.id}</h4>
							<div className={classes.typeContainer}>
								{filteredPokemon.types.map((singleType, idx) => {
									return (
										<div key={idx} className={classes.typesBox}>
											<span>
												{capitalizeFirstLetter(
													singleType.type.name
												)}
											</span>
										</div>
									)
								})}
							</div>
							<h5>Height: {filteredPokemon.height}</h5>
							<h5>Weight: {filteredPokemon.weight}</h5>
						</div>
						<button className="back-button" onClick={goBack}>
							Back to Main List
						</button>
					</Container>
					<Container maxWidth="lg" className="combatDetailsContainer">
						<div className="moves-abilities__container">
							<h2>Moves {`(${filteredPokemon.moves.length})`}</h2>
							<ul className="no-bullets">
								{filteredPokemon.moves.map((singleMove, i) => {
									return (
										<li key={i} className="no-bullets">
											<a
												className="no-decoration"
												target="_blank"
												rel="noreferrer"
												href={`https://bulbapedia.bulbagarden.net/wiki/${capitalizeFirstLetter(
													singleMove.move.name
												).replace('-', '_')}_(move)`}
											>
												{capitalizeFirstLetter(
													singleMove.move.name
												)}
											</a>
										</li>
									)
								})}
							</ul>
						</div>
						<div className="moves-abilities__container">
							<h2>
								Abilities {`(${filteredPokemon.abilities.length})`}
							</h2>
							<ul className="no-bullets">
								{filteredPokemon.abilities.map((singleAbility, i) => {
									return (
										<li key={i} className="no-bullets">
											<a
												className="no-decoration"
												target="_blank"
												rel="noreferrer"
												href={`https://bulbapedia.bulbagarden.net/wiki/${capitalizeFirstLetter(
													singleAbility.ability.name
												).replace('-', '_')}_(Ability)`}
											>
												{capitalizeFirstLetter(
													singleAbility.ability.name
												)}
											</a>
										</li>
									)
								})}
							</ul>
						</div>
					</Container>
				</div>
			)
		} else {
			return <CircularProgress />
		}
	}

	return <RenderItems />
}

export default PokemonDetails
