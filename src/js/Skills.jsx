import React from "react"
import htmlLogo from "../img/svg/html-logo.svg"
import cssLogo from "../img/svg/css-logo.svg"
import javascriptLogo from "../img/svg/javascript-logo.svg"
import reactLogo from "../img/svg/react-logo.svg"
import gitLogo from "../img/svg/git-logo.svg"

export default function Skills() {
    const skillsRef = React.useRef(null)

    const [currentLogo, setCurrentLogo] = React.useState(null)

    React.useEffect(() => {
        if (skillsRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        skillsRef.current.setAttribute("data-intersect", "")
                    }
                },
                { rootMargin: "0px 0px -250px 0px" }
            )

            observer.observe(skillsRef.current)

            return () => observer.unobserve(skillsRef.current)
        }
    }, [skillsRef.current])
    
    return (
        <section className="skills-section">
            <article ref={skillsRef} className="skills-article">
                <h2>What I Do</h2>
                <div className="skills-logos-parent">
                    <div className="skills-logos-div">
                        <figure style={{ "--order": 1 }} onMouseEnter={() => {setCurrentLogo(1)}} onMouseLeave={() => {setCurrentLogo(null)}}><img className={ currentLogo === null ? "" : currentLogo === 1 ? "hover" : "not-hover"} src={htmlLogo} title="HTML" alt="HTML" width="60" height="60" style={{ "--order": 1 }} /></figure>
                        <figure style={{ "--order": 2 }} onMouseEnter={() => {setCurrentLogo(2)}} onMouseLeave={() => {setCurrentLogo(null)}}><img className={ currentLogo === null ? "" : currentLogo === 2 ? "hover" : "not-hover"} src={cssLogo} title="CSS" alt="CSS" width="60" height="60" style={{ "--order": 2 }} /></figure>
                        <figure style={{ "--order": 3 }} onMouseEnter={() => {setCurrentLogo(3)}} onMouseLeave={() => {setCurrentLogo(null)}}><img className={ currentLogo === null ? "" : currentLogo === 3 ? "hover" : "not-hover"} src={javascriptLogo} title="JavaScript" alt="JavaScript" width="60" height="60" style={{ "--order": 3 }} /></figure>
                        <figure style={{ "--order": 4 }} onMouseEnter={() => {setCurrentLogo(4)}} onMouseLeave={() => {setCurrentLogo(null)}}><img className={ currentLogo === null ? "" : currentLogo === 4 ? "hover" : "not-hover"} src={reactLogo} title="React" alt="React" width="60" height="60" style={{ "--order": 4 }} /></figure>
                        <figure style={{ "--order": 5 }} onMouseEnter={() => {setCurrentLogo(5)}} onMouseLeave={() => {setCurrentLogo(null)}}><img className={ currentLogo === null ? "" : currentLogo === 5 ? "hover" : "not-hover"} src={gitLogo} title="Git" alt="Git" width="60" height="60" style={{ "--order": 5 }} /></figure>
                    </div>
                </div>
                <p>In addition to my proficiency in these, I possess a strong aptitude for learning new tools. I am a quick learner, capable of adapting to project requirements and acquiring proficiency in additional technologies as needed.</p>
            </article>
        </section>
    )
}