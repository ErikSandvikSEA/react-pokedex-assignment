// from packages
import React, { useState } from 'react'
import {
	Grid,
	Container,
	CssBaseline,
	TextField,
	CircularProgress,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

// from files
import { SinglePokemon } from '../components'
import pokemonLogo from '../styles/images/Pokemon-Logo.png'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
}))

function PokemonList() {
	const classes = useStyles()
	const detailedPokemonList = useSelector((state) => state.detailedList)
	const isFetching = useSelector((state) => state.isFetching)
	const [searchFormValues, setSearchFormValues] = useState(``)

	const filteredList = detailedPokemonList.filter((pokemon) => {
		return pokemon.name
			.toLowerCase()
			.includes(searchFormValues.toLocaleLowerCase())
	})

	const searchHandler = (e) => {
		setTimeout(() => {
			setSearchFormValues(e.target.value)
		}, 300)
	}

	return isFetching ? (
		<CircularProgress />
	) : (
		<>
			<CssBaseline />
			<main>
				<div className={classes.heroContent}>
					<Container maxWidth="md">
						<img
							src={pokemonLogo}
							width="100%"
							alt="pokemon main title"
						/>
						<TextField
							id="filled-basic"
							label="Search"
							variant="filled"
							fullWidth
							onChange={searchHandler}
						/>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth="md">
					<Grid container spacing={5}>
						{filteredList.map((pokemon) => {
							return <SinglePokemon key={pokemon.id} pokemon={pokemon} />
						})}
					</Grid>
				</Container>
			</main>
		</>
	)
}

export default PokemonList
