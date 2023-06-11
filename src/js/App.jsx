import React from 'react'
import Hero from "./Hero"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Footer from "./Footer"

export default function App() {
    return (
        <>
            <main>
                <Hero />
                <About />
                <div className="body-container">
                    <Skills />
                    <Projects />
                </div>
            </main>
            <Footer />
        </>
    )
}