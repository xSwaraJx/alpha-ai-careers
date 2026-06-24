import { Routes, Route } from 'react-router-dom'
import ScrollProgressBar from './components/layout/ScrollProgressBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Careers from './pages/Careers'
import JobDetail from './pages/JobDetail'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<JobDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
