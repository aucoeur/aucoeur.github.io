import "./Main.css";

import {
  PDFIcon,
  GithubIcon,
  LinkedInIcon,
  MediumIcon,
  MailIcon,
  ThreeDPrinterIcon,
} from "../Icons";

export default function Main() {
  return (
    <div className="main">
      <div className="header">
        <h1>Hi, hello, I'm Aucoeur (okkurr!)</h1>
        <h3>Software Engineer. Perpetual Tinkerer :]</h3>
        <ThreeDPrinterIcon />
      </div>

      <div className="social-links">
        <div className="link-row">
          <a href="/AucoeurNgo-Resume.pdf" className="button">
            <div className="row">
              View Resume <PDFIcon />
            </div>
          </a>
        </div>

        <div className="link-row">
          <a href="https://github.com/aucoeur" className="button">
            <div className="row">
              GitHub <GithubIcon />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/aucoeurngo/" className="button">
            <div className="row">
              LinkedIn <LinkedInIcon />
            </div>
          </a>
        </div>

        <div className="link-row">
          <a href="https://medium.com/@aucoeurngo" className="button">
            <div className="row">
              Medium <MediumIcon />
            </div>
          </a>

          <a href="mailto:hire@aucoeur.dev" className="button">
            <div className="row">
              Contact Me <MailIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
