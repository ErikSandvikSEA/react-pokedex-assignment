// from packages 
import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


// from files 
import "../styles/PokemonList.css"

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    }
  }));

function PokemonList() {
    const classes = useStyles()

    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    <p>hey</p>
                    <p>you</p>
                </Grid>
            </Container>
        </div>
    )
}

export default PokemonList
