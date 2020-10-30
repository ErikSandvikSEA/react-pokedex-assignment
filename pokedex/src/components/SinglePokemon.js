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
import { primaryBlue, primaryYellow } from "../styles/appStyles"

const useStyles = makeStyles(() => ({
    button: {
        background: primaryBlue,
        fontWeight: `bold`,
        color: `white`,
        textTransform: `capitalize`
    },
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
        justifyContent: 'center',
        // border: `3px solid ${primaryBlue}`
	},
	cardMedia: {
		paddingTop: '100%', // 16:9
		boxShadow: '0 4px 12px 0px rgba(0,0,0,.25)',
		width: '100%',
		border: `5px solid ${primaryYellow}`,
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
                        className={classes.button}
						size="medium"
						id={pokemon.id}
						variant="contained"
						onClick={viewDetails}
					>
						<span id={pokemon.id}>View Pokémon Details</span>
					</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default SinglePokemon
