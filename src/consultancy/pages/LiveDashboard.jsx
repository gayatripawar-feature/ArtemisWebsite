import React from "react";
const LiveDashboard = () => {
  const queryParams = new URLSearchParams(window.location.search);
const dashboardUrl = queryParams.get("url");
console.log(dashboardUrl);
return (
    <iframe
      src={dashboardUrl}
      title="Dashboard"
      width="100%"
      height="100vh"
      style={{
        border: "none",
      }}
    />
  );
};

export default LiveDashboard;