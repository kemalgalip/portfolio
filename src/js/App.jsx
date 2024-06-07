import React from "react";

import Lenis from "@studio-freight/lenis";

import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

export default function App() {
    React.useEffect(() => {
        const lenis = new Lenis({
            wheelMultiplier: 2,
            duration: "1.5",
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

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
    );
}
