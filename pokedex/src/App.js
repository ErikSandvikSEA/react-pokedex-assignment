// from packages
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


// from files
import { PokemonList, PokemonDetails } from './components'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/pokemon:id">
                        <PokemonDetails />
                    </Route>
                    <Route path="/pokemon">
                        <PokemonList />
                    </Route>
                    <Route path="/">
                        HomePage
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
