


import React, { useEffect } from "react";


import DirectorDesk from "../components/TeamPage/DirectorDesk";

import OrgChart from "../components/TeamPage/OrgChart/OrgChart";

const TeamPage = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <DirectorDesk />
      <OrgChart />

    </>
  );
};

export default TeamPage;