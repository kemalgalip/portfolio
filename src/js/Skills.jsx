import React from "react";
import cssLogo from "../img/svg/css-logo.svg";
import sassLogo from "../img/svg/sass-logo.svg";
import javascriptLogo from "../img/svg/javascript-logo.svg";
import typescriptLogo from "../img/svg/typescript-logo.svg";
import reactLogo from "../img/svg/react-logo.svg";
import tailwindLogo from "../img/svg/tailwind-logo.svg";
import gitLogo from "../img/svg/git-logo.svg";

export default function Skills() {
    const skillsRef = React.useRef(null);

    const [currentLogo, setCurrentLogo] = React.useState(null);

    React.useEffect(() => {
        if (skillsRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        skillsRef.current.setAttribute("data-intersect", "");
                    }
                },
                { rootMargin: "0px 0px -250px 0px" }
            );

            observer.observe(skillsRef.current);

            return () => observer.unobserve(skillsRef.current);
        }
    }, [skillsRef.current]);

    return (
        <section className="skills-section">
            <article ref={skillsRef} className="skills-article">
                <h2>What I Do</h2>
                <div className="skills-logos-parent">
                    <div className="skills-logos-div">
                        <figure
                            style={{ "--order": 1 }}
                            onMouseEnter={() => {
                                setCurrentLogo(1);
                            }}
                            onMouseLeave={() => {
                                setCurrentLogo(null);
                            }}
                        >
                            <img className={currentLogo === null ? "" : currentLogo === 1 ? "hover" : "not-hover"} src={sassLogo} title="SASS/SCSS" alt="SASS/SCSS" width="60" height="60" style={{ "--order": 1 }} />
                        </figure>
                        <figure
                            style={{ "--order": 2 }}
                            onMouseEnter={() => {
                                setCurrentLogo(2);
                            }}
                            onMouseLeave={() => {
                                setCurrentLogo(null);
                            }}
                        >
                            <img className={currentLogo === null ? "" : currentLogo === 2 ? "hover" : "not-hover"} src={javascriptLogo} title="JavaScript" alt="JavaScript" width="60" height="60" style={{ "--order": 2 }} />
                        </figure>
                        <figure
                            style={{ "--order": 3 }}
                            onMouseEnter={() => {
                                setCurrentLogo(3);
                            }}
                            onMouseLeave={() => {
                                setCurrentLogo(null);
                            }}
                        >
                            <img className={currentLogo === null ? "" : currentLogo === 3 ? "hover" : "not-hover"} src={typescriptLogo} title="TypeScript" alt="TypeScript" width="60" height="60" style={{ "--order": 3 }} />
                        </figure>
                        <figure
                            style={{ "--order": 4 }}
                            onMouseEnter={() => {
                                setCurrentLogo(4);
                            }}
                            onMouseLeave={() => {
                                setCurrentLogo(null);
                            }}
                        >
                            <img className={currentLogo === null ? "" : currentLogo === 4 ? "hover" : "not-hover"} src={reactLogo} title="ReactJS" alt="ReactJS" width="60" height="60" style={{ "--order": 4 }} />
                        </figure>
                        <figure
                            style={{ "--order": 5 }}
                            onMouseEnter={() => {
                                setCurrentLogo(5);
                            }}
                            onMouseLeave={() => {
                                setCurrentLogo(null);
                            }}
                        >
                            <img className={currentLogo === null ? "" : currentLogo === 5 ? "hover" : "not-hover"} src={tailwindLogo} title="TailwindCSS" alt="TailwindCSS" width="60" height="60" style={{ "--order": 5 }} />
                        </figure>
                        <figure
                            style={{ "--order": 6 }}
                            onMouseEnter={() => {
                                setCurrentLogo(6);
                            }}
                            onMouseLeave={() => {
                                setCurrentLogo(null);
                            }}
                        >
                            <img className={currentLogo === null ? "" : currentLogo === 6 ? "hover" : "not-hover"} src={gitLogo} title="Git" alt="Git" width="60" height="60" style={{ "--order": 6 }} />
                        </figure>
                    </div>
                </div>
                <div className="skills-tech-stack">
                    <h4>Tech Stack</h4>
                    <ul>
                        <li>
                            <span>HTML5</span>
                        </li>
                        <li>
                            <span>CSS3</span>
                        </li>
                        <li>
                            <span>SASS/SCSS</span>
                        </li>
                        <li>
                            <span>JavaScript</span>
                        </li>
                        <li>
                            <span>TypeScript</span>
                        </li>
                        <li>
                            <span>ReactJS</span>
                        </li>
                        <li>
                            <span>TailwindCSS</span>
                        </li>
                        <li>
                            <span>Git and Github</span>
                        </li>
                    </ul>
                </div>
                <p>In addition to my skills, I possess a strong aptitude for learning new tools. I am a quick learner, capable of adapting to project requirements and acquiring proficiency in additional technologies as needed.</p>
            </article>
        </section>
    );
}
