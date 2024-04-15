import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/homePage/HomePage'
import NotFoundPage from '../../pages/notFoundPage/NotFoundPage'
import Navigation  from '../navigation/Navigation'
import MovieDetailsPage from '../../pages/movieDetailsPage/MovieDetailsPage'
import MoviePage from '../../pages/moviePage/MoviePage'
import MovieCast  from '../movieCast/MovieCast'
import MovieReviews  from '../movieReviews/MovieReviews'

function App() {
    return (
        <header>
            <Navigation/>
        <Routes>
            <Route path = "/" element = {<HomePage/>}/>
            <Route path = "/movies" element = {<MoviePage/>}>
                 <Route path = ":movieId" element = {<MovieDetailsPage/>}>
                    <Route path = "cast" element = {<MovieCast/>}/>
                    <Route path = "reviews" element = {<MovieReviews/>}/>
                 </Route>
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        </header>
    )
  
}

export default App
