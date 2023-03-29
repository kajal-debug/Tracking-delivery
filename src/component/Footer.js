import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <>
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <div showLabels  style={{backgroundColor:"#6f6666",display:"flex",justifyContent:"space-between"}}>
         <p>2023Copyright © Tracker Courier All rights reserved |</p>
         <p> Tearm & Condition |Privacy Policy|  Disclimer</p>
         </div>
      </Box>
    </>
  );
}

export default Footer;
