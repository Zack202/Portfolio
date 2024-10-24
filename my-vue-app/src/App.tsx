import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { DarkModeProvider } from './Context/DarkModeContext'

import { Home, About, Projects, Contact } from './pages'

const App = () => {
  return (
    <main className="bg-slate-300/20 dark:bg-slate-900 h-full">
      <DarkModeProvider>
        <Router>
            <Navbar />
            <Routes>
                {/* <Route path="/" element={<Home />}/> */}
                <Route path="/" element={<About />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </Router>
      </DarkModeProvider>
    </main>
  )
}

export default App