import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from './assets/logo.png'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Footer from './components/Footer'

const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

const Navigation = () => {
    const location = useLocation()

    const tabs = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' }
    ]

    const activeIndex = tabs.findIndex((tab) => tab.path === location.pathname)

    return (
        <nav className="navbar-wrapper">
            <div className="logo-container">
                <Link to="/" className="brand-link">
                    <img src={logo} alt="IDX" className="logo-img" />
                    <span className="brand-text">ITERDX GLOBAL</span>
                </Link>
            </div>

            <div className="nav-pill-container">
                <div className="nav-pill">
                    {activeIndex !== -1 && (
                        <motion.div
                            className="active-pill-bg"
                            initial={false}
                            animate={{ x: `calc(${activeIndex} * var(--pill-item-width))` }}
                            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                        />
                    )}

                    {tabs.map((tab) => (
                        <Link
                            key={tab.name}
                            to={tab.path}
                            className={`nav-item ${location.pathname === tab.path ? 'is-active' : ''}`}
                        >
                            <span>{tab.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="inquiry-btn-container">
                <button
                    className="inquiry-btn"
                    onClick={() => window.open('https://wa.me/94700000000', '_blank', 'noopener,noreferrer')}
                >
                    Inquiry
                </button>
            </div>
        </nav>
    )
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="main-wrapper">
                <Navigation />
                <main className="page-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App