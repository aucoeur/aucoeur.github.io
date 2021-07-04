import { Link } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';


// import sideBg from '../../assets/eggen.png';
import sideBg from '../../assets/side-bg-smoke.png';
import './SideBar.scss'

export default function SideBar({ collapse, toggle, setToggle}) {
  return (
    <ProSidebar
      image={sideBg}
      collapsed={collapse}
      toggled={toggle}
      breakPoint="md"
      onToggle={setToggle}
      className="sidebar"
    >

      <SidebarHeader className="sidebar-header">
        <h4>Aucoeur Ngo</h4>
      </SidebarHeader>
      <SidebarContent>
        <Menu>
          <MenuItem>
            <Link to="/">Main</Link>
          </MenuItem>
        </Menu>

        <Menu>
          <MenuItem>
            <Link to="/about">About</Link>
          </MenuItem>
        </Menu>

        <Menu>
          <MenuItem>
            <Link to="/projects">Projects</Link>
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem>
            <Link to="/work">Work</Link>
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem>
            <Link to="/contact">Contact</Link>
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter className="sidebar-footer">
        © 2021 Aucoeur Ngo
      </SidebarFooter>
    </ProSidebar>

  )
}
