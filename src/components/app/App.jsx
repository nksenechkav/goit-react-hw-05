import './App.css'
import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom'
import LoaderComponent from '../loader/Loader'
const Navigation = lazy(() => import("../navigation/Navigation"));
const HomePage = lazy(() => import("../../pages/homePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/moviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/movieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("../movieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../movieReviews/MovieReviews")
);
const NotFoundPage = lazy(() => import("../../pages/notFoundPage/NotFoundPage"));

function App() {
    return (
       <>     
            <Navigation/>
            <Suspense fallback={<LoaderComponent/>}>
            <Routes>
                <Route path = "/" element = {<HomePage/>}/>
                <Route path = "/movies" element = {<MoviesPage/>}/>
                        <Route path = "/movies/:movieId" element = {<MovieDetailsPage />}>
                        <Route path = "cast" element = {<MovieCast/>}/>
                        <Route path = "reviews" element = {<MovieReviews/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
            </Suspense>
       </>
    ) 
}

export default App
