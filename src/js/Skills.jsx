import React from "react";
import typescriptLogo from "../img/svg/typescript-logo.svg";
import reactLogo from "../img/svg/react-logo.svg";
import nextLogo from "../img/svg/next-logo.svg";
import tailwindLogo from "../img/svg/tailwind-logo.svg";
import nodeLogo from "../img/svg/node-logo.svg";
import expressLogo from "../img/svg/express-logo.svg";

export default function Skills() {
    const skillsRef = React.useRef(null);

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
                        <figure style={{ "--order": 1 }}>
                            <img src={typescriptLogo} title="TypeScript" alt="TypeScript" width="60" height="60" style={{ "--order": 1 }} />
                        </figure>
                        <figure style={{ "--order": 2 }}>
                            <img src={reactLogo} title="React.js" alt="React.js" width="60" height="60" style={{ "--order": 2 }} />
                        </figure>
                        <figure style={{ "--order": 3 }}>
                            <img src={nextLogo} title="Next.js" alt="Next.js" width="60" height="60" style={{ "--order": 3 }} />
                        </figure>
                        <figure style={{ "--order": 4 }}>
                            <img src={tailwindLogo} title="TailwindCSS" alt="TailwindCSS" width="60" height="60" style={{ "--order": 4 }} />
                        </figure>
                        <figure style={{ "--order": 5 }}>
                            <img src={nodeLogo} title="Node.js" alt="Node.js" width="60" height="60" style={{ "--order": 5 }} />
                        </figure>
                        <figure style={{ "--order": 6 }}>
                            <img src={expressLogo} title="Express.js" alt="Express.js" width="60" height="60" style={{ "--order": 6 }} />
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
                            <span>React.js</span>
                        </li>
                        <li>
                            <span>Next.js</span>
                        </li>
                        <li>
                            <span>TailwindCSS</span>
                        </li>
                        <li>
                            <span>Python</span>
                        </li>
                        <li>
                            <span>Node.js</span>
                        </li>
                        <li>
                            <span>Express.js</span>
                        </li>
                        <li>
                            <span>JWT</span>
                        </li>
                        <li>
                            <span>npm</span>
                        </li>
                        <li>
                            <span>Jest</span>
                        </li>
                        <li>
                            <span>Git and Github</span>
                        </li>
                    </ul>
                </div>
                <p>
                    In addition to my skills, I possess a strong aptitude for learning new tools. I am a quick learner, capable of adapting to project
                    requirements and acquiring proficiency in additional technologies as needed.
                </p>
            </article>
        </section>
    );
}
