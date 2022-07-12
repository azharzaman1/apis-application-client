import { Box } from "@mui/material";
import { dashboardNavItems } from "../../../static/dashboard-nav";
import { NavItem } from "./NavItem";

const DashboardNavigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {dashboardNavItems.map((item) => (
        <NavItem
          key={item.key}
          icon={item.icon}
          href={item.href}
          title={item.title}
        />
      ))}
    </Box>
  );
};

export default DashboardNavigation;
