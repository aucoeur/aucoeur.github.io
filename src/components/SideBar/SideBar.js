import { Link } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import './SideBar.scss'

export default function SideBar({ collapse, toggle, setToggle}) {
  return (
    <ProSidebar
      collapsed={collapse}
      toggled={toggle}
      breakPoint="md"
      onToggle={setToggle}
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
      <SidebarFooter className="sidebar-header">
        © 2021 Aucoeur Ngo
      </SidebarFooter>
    </ProSidebar>

  )
}
