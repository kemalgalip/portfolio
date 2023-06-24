import React from "react";
import aboutMe from "../img/svg/about-me.svg";
import aboutWave from "../img/svg/about-wave.svg";

export default function About() {
    const aboutRef = React.useRef(null);

    React.useEffect(() => {
        if (aboutRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        aboutRef.current.setAttribute("data-intersect", "");
                    }
                },
                { rootMargin: "0px 0px -100px 0px" }
            );

            observer.observe(aboutRef.current);

            return () => observer.unobserve(aboutRef.current);
        }
    }, [aboutRef.current]);

    return (
        <>
            <section className="about-section">
                <article ref={aboutRef} className="about-article">
                    <img src={aboutMe} title="About Me" width="890.1063" height="611.97208" />
                    <h3>
                        Who <span>I Am</span>
                    </h3>
                    <p>
                        Hello! I am <span>Kemal Galip</span>, an aspiring front-end React developer. I can describe myself as a fast learner, adaptable to challenges, and a very organized code writer. <span>Easy-to-read</span> code is my top priority, anyone can clearly see how clean my code is by casting an eye on my GitHub repositories. I love learning from <span>professionals</span> in the field, and projects that are <span>beyond me.</span> I always look for challenging problems, which has helped me <span>learn quickly</span> and develop <span>strong skills.</span> I have a <span>team-oriented</span> mindset, valuing open communication, and actively collaborating with my peers to <span>achieve collective success.</span>
                    </p>
                </article>
            </section>
            <div>
                <img src={aboutWave} width="1440" height="320" />
            </div>
        </>
    );
}
