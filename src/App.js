import React from 'react'
import { BrowserRouter as Router,Route , Switch } from 'react-router-dom'

import Movie from './Movie'
import MovieDetail from './MovieDetail'


function App() {
    return (
       <Router>
       <Switch>
           <Route path = "/detail/:id" component={MovieDetail} exact/>
           <Route path = "/" component={Movie}/>
       </Switch>
       
       </Router>

    )
    }
export default App
