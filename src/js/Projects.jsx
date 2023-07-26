import React from "react";

import narutopediaSS from "../img/ss/narutopedia-screenshot.png";
import hairCoutureSS from "../img/ss/hair-couture-screenshot.png";
import skyCastSS from "../img/ss/skycast-screenshot.png";
import twitterCloneSS from "../img/ss/twitterclone-screenshot.png";
import chatONSS from "../img/ss/chaton-screenshot.png";

import cssLogo from "../img/svg/css-logo.svg";
import sassLogo from "../img/svg/sass-logo.svg";
import javascriptLogo from "../img/svg/javascript-logo.svg";
import typescriptLogo from "../img/svg/typescript-logo.svg";
import reactLogo from "../img/svg/react-logo.svg";
import nextLogo from "../img/svg/next-logo.svg";
import tailwindLogo from "../img/svg/tailwind-logo.svg";
import npmLogo from "../img/svg/npm-logo.svg";

export default function Projects() {
    const projectsRef = React.useRef(null);
    const projectOneRef = React.useRef(null);
    const projectTwoRef = React.useRef(null);
    const projectThreeRef = React.useRef(null);
    const projectFourRef = React.useRef(null);
    const projectFiveRef = React.useRef(null);

    React.useEffect(() => {
        if (projectsRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        projectsRef.current.setAttribute("data-intersect", "");
                    }
                },
                { rootMargin: "0px 0px -100px 0px" }
            );

            observer.observe(projectsRef.current);

            return () => observer.unobserve(projectsRef.current);
        }
    }, [projectsRef.current]);

    React.useEffect(() => {
        if (projectOneRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        projectOneRef.current.setAttribute("data-intersect", "");
                    }
                },
                { rootMargin: "0px 0px -175px 0px" }
            );

            observer.observe(projectOneRef.current);

            return () => observer.unobserve(projectOneRef.current);
        }
    }, [projectOneRef.current]);

    React.useEffect(() => {
        if (projectTwoRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        projectTwoRef.current.setAttribute("data-intersect", "");
                    }
                },
                { rootMargin: "0px 0px -175px 0px" }
            );

            observer.observe(projectTwoRef.current);

            return () => observer.unobserve(projectTwoRef.current);
        }
    }, [projectTwoRef.current]);

    React.useEffect(() => {
        if (projectThreeRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        projectThreeRef.current.setAttribute("data-intersect", "");
                    }
                },
                { rootMargin: "0px 0px -175px 0px" }
            );

            observer.observe(projectThreeRef.current);

            return () => observer.unobserve(projectThreeRef.current);
        }
    }, [projectThreeRef.current]);

    React.useEffect(() => {
        if (projectFourRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        projectFourRef.current.setAttribute("data-intersect", "");
                    }
                },
                { rootMargin: "0px 0px -175px 0px" }
            );

            observer.observe(projectFourRef.current);

            return () => observer.unobserve(projectFourRef.current);
        }
    }, [projectFourRef.current]);

    React.useEffect(() => {
        if (projectFiveRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        projectFiveRef.current.setAttribute("data-intersect", "");
                    }
                },
                { rootMargin: "0px 0px -175px 0px" }
            );

            observer.observe(projectFiveRef.current);

            return () => observer.unobserve(projectFiveRef.current);
        }
    }, [projectFiveRef.current]);

    return (
        <section className="projects-section">
            <article ref={projectsRef} className="projects-article">
                <h2>What I Did</h2>
                <p>
                    Here are some of my latest projects. In these projects, different parts of the
                    web development principles and technologies are used. Details are explained in
                    descriptions.
                </p>
                <div>
                    <div ref={projectOneRef} className="project-card">
                        <a href="https://kemalgalip-narutopedia.vercel.app" target="_blank">
                            <img src={narutopediaSS} width="960" height="1474" />
                        </a>
                        <div>
                            <h3>NarutoPedia - Naruto Universe</h3>
                            <p>
                                Informative server side application about the popular anime/manga
                                series Naruto, built with an external{" "}
                                <a href="https://www.narutodb.xyz" target="_blank">
                                    API.
                                </a>{" "}
                                Dynamic routing and pagination used (Next.js version 13+).
                            </p>
                            <div>
                                <div className="project-card-img-div">
                                    <img
                                        src={sassLogo}
                                        title="SASS/SCSS"
                                        alt="SASS/SCSS"
                                        width="45"
                                        height="45"
                                    />
                                    <img
                                        src={typescriptLogo}
                                        title="TypeScript"
                                        alt="TypeScript"
                                        width="45"
                                        height="45"
                                    />
                                    <img
                                        src={nextLogo}
                                        title="Next.js"
                                        alt="Next.js"
                                        width="45"
                                        height="45"
                                    />
                                </div>
                                <div className="project-card-link-div">
                                    <a
                                        href="https://github.com/kemalgalip/hair-couture"
                                        target="_blank"
                                    >
                                        Source
                                    </a>
                                    <a
                                        href="https://kemalgalip-narutopedia.vercel.app"
                                        target="_blank"
                                    >
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={projectTwoRef} className="project-card">
                        <a href="https://kemalgalip-haircouture.vercel.app" target="_blank">
                            <img src={hairCoutureSS} width="960" height="2533" />
                        </a>
                        <div>
                            <h3>Hair Couture - Hair Salon Website</h3>
                            <p>
                                General purpose hair salon website. Appointment and contact form
                                submits are handled with RegEx. It is also built with React Router
                                DOM, providing multi-page-like experience.
                            </p>
                            <div>
                                <div className="project-card-img-div">
                                    <img
                                        src={sassLogo}
                                        title="SASS/SCSS"
                                        alt="SASS/SCSS"
                                        width="45"
                                        height="45"
                                    />
                                    <img
                                        src={javascriptLogo}
                                        title="JavaScript"
                                        alt="JavaScript"
                                        width="45"
                                        height="45"
                                    />
                                    <img
                                        src={reactLogo}
                                        title="ReactJS"
                                        alt="ReactJS"
                                        width="45"
                                        height="45"
                                    />
                                </div>
                                <div className="project-card-link-div">
                                    <a
                                        href="https://github.com/kemalgalip/hair-couture"
                                        target="_blank"
                                    >
                                        Source
                                    </a>
                                    <a
                                        href="https://kemalgalip-haircouture.vercel.app"
                                        target="_blank"
                                    >
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={projectThreeRef} className="project-card">
                        <a href="https://kemalgalip-skycast.vercel.app" target="_blank">
                            <img src={skyCastSS} width="960" height="932" />
                        </a>
                        <div>
                            <h3>SkyCast - Weather Forecast</h3>
                            <p>
                                Contains some advanced JavaScript syntax (fetching different datas
                                from the same API at the same time, getting and setting data from/to
                                local storage, dark-light mode etc.).
                            </p>
                            <div>
                                <div className="project-card-img-div">
                                    <img
                                        src={cssLogo}
                                        title="CSS"
                                        alt="CSS"
                                        width="45"
                                        height="45"
                                    />
                                    <img
                                        src={typescriptLogo}
                                        title="TypeScript"
                                        alt="TypeScript"
                                        width="45"
                                        height="45"
                                    />
                                    <img
                                        src={reactLogo}
                                        title="ReactJS"
                                        alt="ReactJS"
                                        width="45"
                                        height="45"
                                    />
                                </div>
                                <div className="project-card-link-div">
                                    <a
                                        href="https://github.com/kemalgalip/sky-cast"
                                        target="_blank"
                                    >
                                        Source
                                    </a>
                                    <a href="https://kemalgalip-skycast.vercel.app" target="_blank">
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={projectFourRef} className="project-card">
                        <a href="https://kemalgalip-twitterclone.vercel.app" target="_blank">
                            <img src={twitterCloneSS} width="960" height="901" />
                        </a>
                        <div>
                            <h3>Twitter - Clone Website</h3>
                            <p>
                                The website clone of Twitter, built using the TailwindCSS framework,
                                automatically presents tweet layouts tailored to various data types
                                such as images, replies, and quoted tweets.
                            </p>
                            <div>
                                <div className="project-card-img-div">
                                    <img
                                        src={javascriptLogo}
                                        title="JavaScript"
                                        alt="JavaScript"
                                        width="45"
                                        height="45"
                                    />
                                    <img
                                        src={reactLogo}
                                        title="ReactJS"
                                        alt="ReactJS"
                                        width="45"
                                        height="45"
                                    />
                                    <img
                                        src={tailwindLogo}
                                        title="TailwindCSS"
                                        alt="TailwindCSS"
                                        width="45"
                                        height="45"
                                    />
                                </div>
                                <div className="project-card-link-div">
                                    <a
                                        href="https://github.com/kemalgalip/twitter-clone"
                                        target="_blank"
                                    >
                                        Source
                                    </a>
                                    <a
                                        href="https://kemalgalip-twitterclone.vercel.app"
                                        target="_blank"
                                    >
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={projectFiveRef} className="project-card">
                        <a href="https://kemalgalip-chaton.vercel.app" target="_blank">
                            <img src={chatONSS} width="960" height="2667" />
                        </a>
                        <div>
                            <h3>ChatON - Chat App Introduction</h3>
                            <p>
                                CSS focused, animation rich project. Visual satisfaction was the
                                first priority. I used 2 ready libraries to dive in to npm libraries
                                and build something more quickly ("Features" and "FAQs" sections).
                            </p>
                            <div>
                                <div className="project-card-img-div">
                                    <img
                                        src={cssLogo}
                                        title="CSS"
                                        alt="CSS"
                                        width="45"
                                        height="45"
                                    />
                                    <img
                                        src={reactLogo}
                                        title="ReactJS"
                                        alt="ReactJS"
                                        width="45"
                                        height="45"
                                    />
                                    <img
                                        src={npmLogo}
                                        title="npm"
                                        alt="npm"
                                        width="45"
                                        height="45"
                                    />
                                </div>
                                <div className="project-card-link-div">
                                    <a href="https://github.com/kemalgalip/chat-on" target="_blank">
                                        Source
                                    </a>
                                    <a href="https://kemalgalip-chaton.vercel.app" target="_blank">
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}
