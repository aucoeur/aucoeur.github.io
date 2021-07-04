import { Link } from 'react-router-dom';
import {
  ProSidebar,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import './SideBar.scss'

export default function SideBar({theme, collapse, toggle, setToggle, setTheme}) {
  return (
    <ProSidebar
      collapsed={collapse}
      toggled={toggle}
      breakPoint="md"
      onToggle={setToggle}
    >
      <SidebarHeader>
        <h3>Aucoeur Ngo</h3>
      </SidebarHeader>
      <SidebarContent>
       <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/projects">Projects</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/work">Work</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </SidebarContent>
      <SidebarFooter>
        © 2021 Aucoeur Ngo
      </SidebarFooter>
    </ProSidebar>

  )
}
