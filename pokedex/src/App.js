// from packages
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


// from files
import { PokemonList, PokemonDetails } from './components'
import { fetchPokemonList } from './state/actions'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPokemonList())
    }, [])


    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/pokemon/:id">
                        <PokemonDetails />
                    </Route>
                    <Route path="/">
                        <PokemonList />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
