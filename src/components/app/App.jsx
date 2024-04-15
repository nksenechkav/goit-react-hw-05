import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/homePage/HomePage'
import NotFoundPage from '../../pages/notFoundPage/NotFoundPage'
import Navigation  from '../navigation/Navigation'

function App() {
    return (
        <div className='movies-container'>
            <Navigation/>
        <Routes>
            <Route path = "/" element = {<HomePage/>}/>
            <Route path = "/Movies" element = {<div>Movie Page</div>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        </div>
    )
  
}

export default App
