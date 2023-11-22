import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from "react-router-dom";
// import { Icon } from '@mui/material';

export const mainListItems = (
  <React.Fragment>
    <NavItem icon={<DashboardIcon />} text="Dashboard" path="/dashboard" />
    <NavItem icon={<ShoppingCartIcon />} text="Orders" path="/orders" />
    <NavItem icon={<PeopleIcon />} text="Customers" path="/customers" />
    <NavItem icon={<BarChartIcon />} text="Reports" path="/reports" />
    <NavItem icon={<LayersIcon />} text="Integrations" path="/integrations" />
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      <h3>Saved reports</h3>
    </ListSubheader>
    <NavItem icon={<AssignmentIcon />} text="Current month" path="/reports/current-month" />
    <NavItem icon={<AssignmentIcon />} text="Last quarter" path="/reports/last-quarter" />
    <NavItem icon={<AssignmentIcon />} text="Year-end sale" path="/reports/year-end-sale" />
  </React.Fragment>
);

interface NavItemProps {
  icon: React.ReactElement;
  text: string;
  path: string;
}

function NavItem({ icon, text, path }: NavItemProps) {
  const navigate = useNavigate();

  return (
    <ListItemButton onClick={() => navigate(path)}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
}