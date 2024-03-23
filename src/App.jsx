import { Routes, Route } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import Register from './pages/Register'
import Login from './pages/Login'
import Teams from './pages/Teams'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import CreateTeam from './pages/CreateTeam'

function App() {
  const [user, setUser] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const checkTokenFunction = async () => {
        await checkToken()
      }
      checkTokenFunction()
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }
  return (
    <div className={`${darkMode && 'dark'}`}>
      <Navbar toggleDarkMode={toggleDarkMode} user={user} />
      <main className="dark:bg-gray-900   bg-neutral-100 h-screen pt-4">
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/createteam" element={<CreateTeam />}></Route>
          <Route path="/login" element={<Login setUser={setUser} />}></Route>
          <Route path="/teams" element={<Teams />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
