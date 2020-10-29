// from packages
import React from 'react'
import {
	Card,
	Button,
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

const useStyles = makeStyles(() => ({
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
		boxShadow: '0 4px 12px 0px rgba(0,0,0,.25)',
		width: '98%',
		border: '1px',
		borderRadius: '5px',
	},
	cardContent: {
		flexGrow: 1,
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
		history.push(`/pokemon/${pokemon.id}`)
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
						gutterBottom
						variant="h4"
						component="h2"
						onClick={viewDetails}
					>
						{capitalizeFirstLetter(pokemon.name)}
					</Typography>
					<Typography gutterBottom variant="h6">
						ID: {pokemon.id}
					</Typography>
				</CardContent>
				<CardActions className={classes.cardActions}>
					<Button
						size="large"
						color="secondary"
						id={pokemon.id}
						variant="contained"
						onClick={viewDetails}
					>
						<span id={pokemon.id}>View Pokemon Details</span>
					</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default SinglePokemon
