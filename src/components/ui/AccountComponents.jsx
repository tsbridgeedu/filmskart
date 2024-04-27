import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { SignOutButton, useUser } from "@clerk/clerk-react";

import {
  AccountCircleOutlined,
  SettingsApplicationsOutlined,
} from "@mui/icons-material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { BsBagX, BsCart2 } from "react-icons/bs";
import { ShoppingCart } from "lucide-react";

export const SignedAccountComponents = ({ handleClose }) => {
  const { user } = useUser();

  return (
    <>
      <MenuItem sx={{ my: 0.5 }} onClick={handleClose}>
        <Stack className="flex items-center justify-center w-full">
          <AccountCircleOutlined sx={{ ml: 1 }} />
          Hey {user.firstName}!
        </Stack>
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem disableRipple onClick={handleClose}>
        <NavLink to={"/profile"}>
          <SettingsApplicationsOutlined />
          Your Account
        </NavLink>
      </MenuItem>

      <MenuItem>
        <ExitToAppIcon />
        <SignOutButton />
      </MenuItem>
    </>
  );
};

export const SignedOutAccountComponents = ({ handleClose }) => {
  return (
    <>
     <MenuItem onClick={handleClose} disableRipple className="">
        {/* <ManageAccountsIcon />
              Profile */}

        <Stack
          className=" w-full"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
            marginTop: '2px'
          }}
        >
          <img src="/logo.png" alt="Filmskart Logo" className="w-28" />
        </Stack>
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem onClick={handleClose} disableRipple>
        <NavLink to={"/login"}>
          <LoginIcon />
          Login
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleClose} disableRipple>
        <NavLink to={"/signup"}>
          <HowToRegIcon />
          Sign Up
        </NavLink>
      </MenuItem>
     
    </>
  );
};
