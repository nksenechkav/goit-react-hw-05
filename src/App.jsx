import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import Navigation  from './components/navigation/Navigation'

function App() {
    return (
        <div>
            <Navigation/>
        <Routes>
            <Route path = "/" element = {<HomePage/>}/>
            <Route path = "/Users" element = {<div>Users Page</div>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        </div>
    )
  
}

export default App
