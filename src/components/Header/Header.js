import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
        <h2>Hi, hello, I'm Aucoeur (okkurr!)</h2>
        <h4>Professional Dilettante.  Aspiring Software Engineer.</h4>
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
