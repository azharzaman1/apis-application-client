import { Drawer, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import Heading from "../../../Generic/Heading";
import DashboardNavigation from "../DashboardNavigation";

const DashboardSidebar = ({ open, onClose }) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const content = (
    <div className="dashboard-sidebar-content">
      <div className="sidebar-header py-6 px-6">
        <Link to="/">
          <Heading className="!text-white opacity-80">API Archive</Heading>
        </Link>
      </div>
      <DashboardNavigation />
    </div>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
      className="dashboard-sidebar !text-white"
    >
      {content}
    </Drawer>
  );
};

export default DashboardSidebar;
