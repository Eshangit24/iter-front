import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const Navbar = () => {
    const location = useLocation()

    const tabs = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
    ]

    const activeIndex = tabs.findIndex((tab) => tab.path === location.pathname)

    return (
        <nav className="navbar-wrapper">
            <div className="logo-container">
                <Link to="/" className="brand-link">
                    <img src={logo} alt="IterDX Global" className="logo-img" />
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
                <Link className="inquiry-btn" to="/contact">
                    Inquiry
                </Link>
            </div>
        </nav>
    )
}

export default Navbar