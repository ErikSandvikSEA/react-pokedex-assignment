// from packages 
import React, { useEffect } from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux"

// from files 
import "../styles/PokemonList.css"
import { fetchBaseList } from "../state/actions"

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    }
  }));

function PokemonList() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const basePokemonList = useSelector(state => state.basePokemonList)

    useEffect(() => {
        dispatch(fetchBaseList())
    }, [])

    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    <p>hey</p>
                </Grid>
            </Container>
        </div>
    )
}

export default PokemonList
