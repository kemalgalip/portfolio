import React from 'react';
import aboutMe from '../img/svg/about-me.svg';
import aboutWave from '../img/svg/about-wave.svg';

export default function About() {
    const aboutRef = React.useRef(null);

    React.useEffect(() => {
        if (aboutRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        aboutRef.current.setAttribute('data-intersect', '');
                    }
                },
                { rootMargin: '0px 0px -100px 0px' }
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
                        Hello! I am <span>Kemal Galip</span>, an aspiring full stack developer. I can describe myself as a fast learner, adaptable to changes, and a very
                        organized code writer. I love learning from <span>experienced professionals</span> in the field, and projects that are <span>beyond me.</span> I always
                        seek solving challenging problems, which has helped me <span>learn efficiently</span> and develop <span>strong skills.</span> I have a{' '}
                        <span>team-oriented</span> mindset, valuing open communication, and actively collaborating with my peers to achieve <span>collective success.</span>
                    </p>
                </article>
            </section>
            <div>
                <img src={aboutWave} width="1440" height="320" />
            </div>
        </>
    );
}
