// from packages
import React, { useEffect } from 'react'
import { Grid, Container, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'

// from files
import '../styles/PokemonList.css'
import { SinglePokemon } from '../components'
import { fetchPokemonList } from '../state/actions'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
}))

function PokemonList() {
	const classes = useStyles()
	const dispatch = useDispatch()
	const detailedPokemonList = useSelector((state) => state.detailedList)

	// useEffect(() => {
	// 	dispatch(fetchPokemonList())
	// }, [])

	return (
		<>
			<CssBaseline />
			<main>
				<Container className={classes.cardGrid} maxWidth="md">
					<Grid container spacing={4}>
						{detailedPokemonList.map((pokemon) => {
							return <SinglePokemon key={pokemon.id} pokemon={pokemon} />
						})}
					</Grid>
				</Container>
			</main>
		</>
	)
}

export default PokemonList
