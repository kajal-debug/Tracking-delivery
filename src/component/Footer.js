import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <>
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <BottomNavigation showLabels>
          <p>Copyright © Tracker Courier All rights reserved.</p>
        </BottomNavigation>
      </Box>
    </>
  );
}

export default Footer;
