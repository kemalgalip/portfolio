import React from "react"
import footerWave from "../img/svg/footer-wave.svg"
import gmailLogo from "../img/svg/gmail-logo.svg"
import linkedinLogo from "../img/svg/linkedin-logo.svg"
import footerThumbsUp from "../img/svg/footer-thumbs-up.svg"

export default function Footer() {
    const date = new Date()

    const year = date.getFullYear()

    return (
        <>
            <div className="footer-wave-div">
                <img src={footerWave} width="1440" height="320" />
            </div>
            <footer>
                <article className="footer-article">
                    <div className="footer-text-div">
                        <h2>Want to work with me?</h2>
                        <p>Let's turn aspirations into achievements!</p>
                    </div>
                    <div className="footer-link-div">
                        <a href="mailto:kemalgalipbusiness@gmail.com" target="_blank" title="kemalgalipbusiness@gmail.com"><img src={gmailLogo} alt="GMail" width="45" height="45" /></a>
                        <a href="https://www.linkedin.com/in/kemalgalip/" target="_blank" title="LinkedIn"><img src={linkedinLogo} alt="LinkedIn" width="45" height="45" /></a>
                    </div>
                    <img src={footerThumbsUp} />
                </article>
                <p>Kemal Galip &copy; {year}</p>
            </footer>
        </>
    )
}