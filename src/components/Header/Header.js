import React from 'react';
import './Header.css';

import Icon from '../Icon/Icon';
import pdf_icon from '../../assets/pdf_icon.svg';

function Header() {
  return (
    <div className="Header">
      <div className="intro">
        <h1>Hi, hello, I'm Aucoeur (okkurr!)</h1>
        <h3>Professional Dilettante.  Aspiring Software Engineer.</h3>
      </div>

      <Icon />

      <div className="badges">
        <div className="col">
          <div className="row">
            <span className="res">
            <a href={process.env.PUBLIC_URL + 'AucoeurNgo-Resume.pdf'}>
              <img src="https://img.shields.io/badge/resume-darkred.svg?style=for-the-badge&labelColor=darkred" alt="pdf badge text"/>
              <img src={pdf_icon} className="res-icon" style={{ width: 28 }}
              alt="pdf icon" /></a></span>

            <a href="https://github.com/aucoeur"><img src="https://img.shields.io/badge/aucoeur-grey?style=for-the-badge&logo=github&logoColor=white&labelColor=24292e" alt="github badge"/></a>
            </div>
          <div className="row">
            <a href="mailto:aucoeurngo@gmail.com"><img src="https://img.shields.io/badge/contact_me-red?style=for-the-badge&logo=gmail&logoColor=white&labelColor=D14836" alt="email badge" /></a>
          </div>
        </div>

          <div className="col">
             <div className="row">
              <a href="https://www.linkedin.com/in/aucoeurngo/"><img src="https://img.shields.io/badge/AUCOEUR_NGO-blue?style=for-the-badge&logo=linkedin&labelColor=005b8e" alt="linkedin badge" /></a>
            <div className="row">
              <a href="https://medium.com/@aucoeurngo"><img src="https://img.shields.io/badge/@aucoeurngo-333333?style=for-the-badge&logo=medium&logoColor=white&labelColor=black" alt="medium badge" /></a>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header;
