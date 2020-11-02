// from packages
import React from 'react'
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

// from files 
import { capitalizeFirstLetter } from "../constants/helpers"
import { primaryYellow } from "../styles/appStyles"
import "../styles/PokemonDetails.css"

const useStyles = makeStyles(() => ({
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
        justifyContent: 'center',
	},
	cardMedia: {
		paddingTop: '100%', // 16:9
		boxShadow: '0 4px 12px 0px rgba(0,0,0,.25)',
		width: '100%',
		border: `5px solid ${primaryYellow}`,
		borderRadius: '5px',
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: '2%',
    },
    nameHover: {
        cursor: "pointer"
    }
}))

function SinglePokemon(props) {
	const { pokemon } = props
	const classes = useStyles()
	const history = useHistory()

	const viewDetails = () => {
		history.push(`/${pokemon.id}`)
	}

	return (
		<Grid item key={pokemon.id} xs={12} sm={6} md={4}>
			<Card className={classes.card}>
				<CardMedia
					className={classes.cardMedia}
					image={pokemon.sprites.front_default}
					title={pokemon.name}
				/>
				<CardContent className={classes.cardContent}>
					<Typography
                        className={classes.nameHover}
						variant="h6"
						component="h2"
						onClick={viewDetails}
					>
						{capitalizeFirstLetter(pokemon.name)}
					</Typography>
					<Typography variant="subtitle1">
						ID# {pokemon.id}
					</Typography>
				</CardContent>
				<CardActions className={classes.cardActions}>
					<button
                        className="view-details_button"
						id={pokemon.id}
						onClick={viewDetails}
					>
						<span id={pokemon.id}>View Pokémon Details</span>
					</button>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default SinglePokemon
