import React from "react";
import "./adminNav.css";
import { Box, Avatar, Stack } from "@mui/material";
import {deepPurple } from '@mui/material/colors';
const AdminNav = () => {
  return (
  <nav className="admin-nav-container w-full h-[60px] flex justify-end items-center border-solid border-b border-x-gray-50 ">
    <div className="nav-bar flex items-center justify-center m-[20px]">
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: deepPurple[500] }} className="cursor-pointer">OP</Avatar>
      </Stack>
    </div>
  </nav>
  );
};

export default AdminNav;
