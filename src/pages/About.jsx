import React from 'react'
import { motion } from 'framer-motion'
import hero from '../assets/hero.png'

const leftReveal = {
    initial: { opacity: 0, x: -70, y: 12, filter: 'blur(10px)' },
    whileInView: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
}

const rightReveal = {
    initial: { opacity: 0, x: 70, y: 12, filter: 'blur(10px)' },
    whileInView: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
}

const imageLeft = {
    initial: { opacity: 0, x: -90, scale: 0.95, filter: 'blur(12px)' },
    whileInView: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
}

const imageRight = {
    initial: { opacity: 0, x: 90, scale: 0.95, filter: 'blur(12px)' },
    whileInView: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
}

const About = () => {
    return (
        <section className="about-page">
            <div className="about-block top">
                <div className="about-shell">
                    <div className="about-grid about-grid-top">
                        <motion.div className="about-copy top-copy" {...leftReveal}>
                            <h1 className="about-main-title">About IterDX</h1>
                            <p className="about-paragraph">
                                IterDX is a strategic consultancy and product engineering house. We serve as a professional bridge to the AI era, guiding organizations and individuals from legacy systems to stabilized, high-performance digital operations.
                            </p>
                        </motion.div>

                        <motion.div className="about-image-box top" {...imageRight}>
                            <img src={hero} alt="About IterDX" className="about-image" />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="about-block middle">
                <div className="about-shell">
                    <div className="about-grid reverse">
                        <motion.div className="about-image-box middle" {...imageLeft}>
                            <img src={hero} alt="Why IterDX" className="about-image" />
                        </motion.div>

                        <motion.div className="about-copy wide" {...rightReveal}>
                            <h2 className="about-heading">Why IterDX: Navigating the Shift</h2>
                            <p className="about-paragraph">
                                We are the consultants for those at risk in the digital transition. We simplify the complex, providing the roadmap and the tools—from AI automation to security vaults—to ensure our partners do not just survive the digital shift, but thrive within it.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="about-block bottom">
                <div className="about-shell">
                    <div className="about-grid">
                        <motion.div className="about-copy" {...leftReveal}>
                            <h2 className="about-heading">Who We Are: Building the Future</h2>
                            <p className="about-paragraph">
                                We are engineers of scale. Beyond consultancy, we develop our own enterprise SaaS platforms and industrial-grade software. This dual expertise allows us to provide battle-tested solutions, using our proprietary innovations to solve the largest efficiency challenges of the modern market.
                            </p>
                        </motion.div>

                        <motion.div className="about-image-box bottom" {...imageRight}>
                            <img src={hero} alt="Who we are" className="about-image" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About