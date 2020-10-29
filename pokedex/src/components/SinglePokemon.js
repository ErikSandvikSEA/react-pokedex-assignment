// from packages
import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
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
}))

function SinglePokemon(props) {
	const { pokemon } = props
	const classes = useStyles()
	const history = useHistory()

	return (
		<Grid item key={pokemon.id} xs={12} sm={6} md={4}>
			<Card className={classes.card}>
				<CardMedia
					className={classes.cardMedia}
					image={pokemon.sprites.front_default}
					title={pokemon.name}
				/>
                <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h4" component="h2">
                      {pokemon.name}
                    </Typography>
                    <Typography gutterBottom variant='h6'>
                      ID: {pokemon.id}
                    </Typography>
                </CardContent>
			</Card>
			{pokemon.name}
		</Grid>
	)
}

export default SinglePokemon
