import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'

function App() {
    return (
        <div>
            <nav>
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/Users">Users</NavLink>
            </nav>
        <Routes>
            <Route path = "/" element = {<HomePage/>}/>
            <Route path = "/Users" element = {<div>Users Page</div>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        </div>
    )
  
}

export default App
