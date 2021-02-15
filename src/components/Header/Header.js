import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
        <h1>Hi, hello, I'm Aucoeur (okkurr!)</h1>
        <h3>Professional Dilettante.  Aspiring Software Engineer.</h3>

        <div className="animation">
         <div className="threedp">
            <div className="box">
                <div className="inner">
                    <svg
                        viewBox="-55.5 -40 150 130"
                        fill="transparent" stroke="orangered"
                        stroke-width="4"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M 20 0 V 8 H 32 Q 36 12 32 16 H 4 Q 0 20 4 24 H 64 Q 68 28 64 32 H -28 Q -32 36 -28 40 H 64 Q 68 44 64 48 H -28 Q -32 52 -28 56 H 64 Q 68 60 64 64 H -30" />
                    </svg>
                    <div className="bars"></div>
                    <div className="hotend"></div>
                </div>
                <div className="bed"></div>
            </div>
            <div className="spool"></div>
          </div>
        </div>

        <div className="badges">
          <a href="https://www.linkedin.com/in/aucoeurngo/"><img src="https://img.shields.io/badge/AUCOEUR_NGO-blue?style=for-the-badge&logo=linkedin&labelColor=005b8e" alt="linkedin badge" /></a>&nbsp;&nbsp;
          <a href="https://medium.com/@aucoeurngo"><img src="https://img.shields.io/badge/@aucoeurngo-333333?style=for-the-badge&logo=medium&logoColor=white&labelColor=black" alt="medium badge" /></a>&nbsp;&nbsp;
          <a href="https://github.com/aucoeur"><img src="https://img.shields.io/badge/aucoeur-grey?style=for-the-badge&logo=github&logoColor=white&labelColor=24292e" alt="github badge"/></a>&nbsp;&nbsp;
          <a href="mailto:aucoeurngo@gmail.com"><img src="https://img.shields.io/badge/contact_me-red?style=for-the-badge&logo=gmail&logoColor=white&labelColor=D14836" alt="email badge" /></a>&nbsp;&nbsp;
        </div>
    </div>
  )
}

export default Header;
