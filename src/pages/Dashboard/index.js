import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Nothing to display in root Dashboard page(like stats, activity, notification, etc)
    // So redirecting to the first tab and only tab in out case [APIs]
    navigate("/dashboard/apis", { replace: true });
  });
  return <Outlet />;
};

export default Dashboard;
