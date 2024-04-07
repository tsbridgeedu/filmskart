import React from "react";
import "./adminNav.css";
import { Box } from "@mui/material";
const AdminNav = () => {
  return (
    <Box
      p={2}
      bgcolor={"#222"}
      sx={{
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        height: 100,
        width: "calc(100vw-300px)",
      }}
      flexDirection={"column"}
    >
      Box
    </Box>
  );
};

export default AdminNav;
