import React from "react";
import typescriptLogo from "../img/svg/typescript-logo.svg";
import nextLogo from "../img/svg/next-logo.svg";
import expressLogo from "../img/svg/express-logo.svg";
import supabaseLogo from "../img/svg/supabase-logo.svg";
import postgresqlLogo from "../img/svg/postgresql-logo.svg";
import dockerLogo from "../img/svg/docker-logo.svg";

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
                            <img src={nextLogo} title="Next.js" alt="Next.js" width="60" height="60" style={{ "--order": 2 }} />
                        </figure>
                        <figure style={{ "--order": 3 }}>
                            <img src={expressLogo} title="Express.js" alt="Express.js" width="60" height="60" style={{ "--order": 3 }} />
                        </figure>
                        <figure style={{ "--order": 4 }}>
                            <img src={supabaseLogo} title="Supabase" alt="Supabase" width="60" height="60" style={{ "--order": 4 }} />
                        </figure>
                        <figure style={{ "--order": 5 }}>
                            <img src={postgresqlLogo} title="PostgreSQL" alt="PostgreSQL" width="60" height="60" style={{ "--order": 5 }} />
                        </figure>
                        <figure style={{ "--order": 6 }}>
                            <img src={dockerLogo} title="Docker" alt="Docker" width="60" height="60" style={{ "--order": 6 }} />
                        </figure>
                    </div>
                </div>
                <div className="skills-tech-stack">
                    <h4>My Stack</h4>
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
                            <span>React Native</span>
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
                            <span>Supabase</span>
                        </li>
                        <li>
                            <span>MySQL</span>
                        </li>
                        <li>
                            <span>PostgreSQL</span>
                        </li>
                        <li>
                            <span>Prisma</span>
                        </li>
                        <li>
                            <span>Drizzle</span>
                        </li>
                        <li>
                            <span>MongoDB</span>
                        </li>
                        <li>
                            <span>Jest</span>
                        </li>
                        <li>
                            <span>Docker</span>
                        </li>
                        <li>
                            <span>Git</span>
                        </li>
                        <li>
                            <span>GitHub</span>
                        </li>
                        <li>
                            <span>Cloudflare</span>
                        </li>
                        <li>
                            <span>AWS (Amazon Web Services)</span>
                        </li>
                        <li>
                            <span>Nginx</span>
                        </li>
                    </ul>
                </div>
                <p>
                    In addition to my skills, I possess a strong aptitude for learning new tools. I am a quick learner, capable of adapting to project requirements and
                    acquiring proficiency in additional technologies as needed.
                </p>
            </article>
        </section>
    );
}
