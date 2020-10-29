//from packages
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button'

//from files

const useStyles = makeStyles((theme) => ({
    root: {
         flexGrow: 1,
         margin: '20%',
    },
    paper: {
         padding: theme.spacing(2),
         margin: 'auto',
         maxWidth: 500,
    },
    image: {
         width: 128,
         height: 128,
    },
    img: {
         margin: 'auto',
         display: 'block',
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
}));

function PokemonDetails() {
    const { id } = useParams()
    const detailedList = useSelector(state => state.detailedList)
    const [filteredPokemon] = detailedList.filter(pokemon => {
        return pokemon.id === parseInt(id)
    })

    console.log(filteredPokemon)

    return (
        <div>
            Details
        </div>
    )
}

export default PokemonDetails
