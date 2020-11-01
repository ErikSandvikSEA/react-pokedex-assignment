// from packages
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// from files
import './styles/App.css'
import { PokemonList, PokemonDetails } from './components'
import { fetchPokemonList } from './state/actions'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPokemonList())
	}, [])

	return (
		<div className="root">
			<div className="app">
				<BrowserRouter>
					<Switch>
						<Route path="/:id">
							<PokemonDetails />
						</Route>
						<Route path="/">
                            <div className="pokemon__list">

							<PokemonList />
                            </div>
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		</div>
	)
}

export default App
