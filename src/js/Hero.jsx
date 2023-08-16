import React from "react";
import reactLogo from "../img/react-logo.png";
import kgPhoto from "../img/KG-Photo.jpg";
import githubLogo from "../img/svg/github-logo.svg";
import linkedinLogo from "../img/svg/linkedin-logo.svg";

export default function Hero() {
    return (
        <section className="hero-section">
            <article className="hero-article">
                <div className="hero-section-text-div">
                    <h3>
                        <span className="hero-hello">Hello!</span>{" "}
                        <span className="hero-wave">&#128075;</span>{" "}
                        <span className="hero-im-kemal">I'm Kemal,</span>
                    </h3>
                    <h3 className="hero-react-h3">
                        <a href="https://react.dev" target="_blank">
                            <p>&lt;React /&gt;</p>
                            <figure>
                                <img src={reactLogo} width="462" height="422" />
                            </figure>
                        </a>{" "}
                        Developer
                    </h3>
                    <p>
                        dedicated to delivering seamless user experiences. Join me in creating
                        remarkable digital solutions!
                    </p>
                </div>
                <div className="hero-section-img-div">
                    <a href="https://github.com/kemalgalip" target="_blank">
                        <img src={githubLogo} width="55" height="55" />
                    </a>
                    <a href="https://www.linkedin.com/in/kemalgalip/" target="_blank">
                        <img src={linkedinLogo} width="55" height="55" />
                    </a>
                    <img src={kgPhoto} width="510" height="601" />
                    <div className="hero-section-img-div-first-div"></div>
                    <div className="hero-section-img-div-second-div"></div>
                </div>
            </article>
        </section>
    );
}
