// from packages
import React, { useState } from 'react'
import { Grid, Container, CssBaseline, Typography, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

// from files
import { SinglePokemon } from '../components'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
}))

function PokemonList() {
	const classes = useStyles()
	const detailedPokemonList = useSelector((state) => state.detailedList)
    const [searchFormValues, setSearchFormValues] = useState(``)
    
    const filteredList = detailedPokemonList.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchFormValues.toLocaleLowerCase())
    })

	const searchHandler = (e) => {
		setSearchFormValues(e.target.value)
	}

	return (
		<>
			<CssBaseline />
			<main>
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom
						>
							Pokémon
						</Typography>
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
					<Grid container spacing={10}>
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
