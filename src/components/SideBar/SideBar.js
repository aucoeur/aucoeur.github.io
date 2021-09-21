import {Link} from 'react-router-dom'
import './SideBar.scss'

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="path" >
          <Link to="/">Main</Link>
        </div>
         <div className="path" >
          <Link to="/about">About</Link>
        </div>
         <div className="path" >
          <Link to="/projects">Projects</Link>
        </div>
         <div className="path" >
          <Link to="/contact">Contact</Link>
        </div>

    </div>
  )
}
