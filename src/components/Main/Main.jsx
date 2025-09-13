import './Main.css'

import Icon from './Icon'

const pdf_icon = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiDQoJeT0iMHB4IiB3aWR0aD0iMzYuMzc1cHgiIGhlaWdodD0iMzYuMzc2cHgiIHZpZXdCb3g9IjAgMCAzNi4zNzUgMzYuMzc2Ig0KCXN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2LjM3NSAzNi4zNzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0UyRTVFNyIgZD0iTTMzLjkzOCwyNS42MjZ2OC4yNWMwLDEuMzgzLTEuMTE5LDIuNS0yLjUsMi41aC0yNi41Yy0xLjM4MSwwLTIuNS0xLjExNy0yLjUtMi41di04LjI1YzAtMS4zODEsMS4xMTktMi41LDIuNS0yLjUNCgkJczIuNSwxLjExOSwyLjUsMi41djUuNzVoMjEuNXYtNS43NWMwLTEuMzgxLDEuMTE5LTIuNSwyLjUtMi41UzMzLjkzOCwyNC4yNDUsMzMuOTM4LDI1LjYyNnogTTE2LjQyLDI3Ljc2OA0KCQljMC40ODgsMC40ODgsMS4xMjksMC43MzIsMS43NjgsMC43MzJjMC42NDMsMCwxLjI3OS0wLjI0NCwxLjc3LTAuNzMybDcuNS03LjQ5OGMwLjk3OC0wLjk3NSwwLjk3OC0yLjU1OCwwLTMuNTM1DQoJCWMtMC45NzctMC45NzctMi41NjEtMC45NzctMy41MzUsMGwtMy4yMzEsMy4yMzJWMi41YzAtMS4zODEtMS4xMTktMi41LTIuNS0yLjVzLTIuNSwxLjExOS0yLjUsMi41djE3LjQ2N2wtMy4yMzItMy4yMzINCgkJYy0wLjk3Ny0wLjk3Ny0yLjU2MS0wLjk3Ny0zLjUzNSwwYy0wLjk3NywwLjk3OC0wLjk3NywyLjU2LDAsMy41MzVMMTYuNDIsMjcuNzY4eiIgLz4NCgk8L2c+DQo8L3N2Zz4NCg==`

export default function Main() {
  return (
    <div className="main">
      <div className="header">
        <h1>Hi, hello, I'm Aucoeur (okkurr!)</h1>
        <h3>Software Engineer. Perpetual Tinkerer :]</h3>
        <Icon />
      </div>


      <div className="badges">
        <div className="row one">
          <a href="/AucoeurNgo-Resume.pdf">
            <img src={`https://img.shields.io/badge/pdf-view_my_resume-darkblue?style=for-the-badge&labelColor=010160&logo=${pdf_icon}`} alt="pdf badge text" />
          </a>
        </div>

        <div className="row">
          <a href="https://github.com/aucoeur"><img src="https://img.shields.io/badge/github-grey?style=for-the-badge&logo=github&logoColor=white&labelColor=24292e" alt="github badge" /></a>

          <a href="https://www.linkedin.com/in/aucoeurngo/"><img src="https://img.shields.io/badge/linkedin-blue?style=for-the-badge&logo=linkedin&labelColor=005b8e" alt="linkedin badge" /></a>
        </div>

        <div className="row">
          <a href="https://medium.com/@aucoeurngo"><img src="https://img.shields.io/badge/medium-333333?style=for-the-badge&logo=medium&logoColor=white&labelColor=black" alt="medium badge" /></a>

          <a href="mailto:aucoeurngo@gmail.com"><img src="https://img.shields.io/badge/contact_me-ff4500?style=for-the-badge&logo=gmail&logoColor=white&labelColor=e43e02" alt="email badge" /></a>

        </div>
      </div>
    </div>
  )
}
