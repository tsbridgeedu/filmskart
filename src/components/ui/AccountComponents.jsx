import MenuItem from "@mui/material/MenuItem";
import Divider  from "@mui/material/Divider";
import { SignOutButton, useUser } from "@clerk/clerk-react";

import { AccountCircleOutlined,  SettingsApplicationsOutlined } from "@mui/icons-material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";


import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";

export const SignedAccountComponents = ({handleClose}) => {

    const {user} = useUser()

    return (
        <>
        <MenuItem sx={{my: 0.5}} onClick={handleClose}>
          <Stack className="flex items-center justify-center w-full">
          <AccountCircleOutlined sx={{ml: 1 }}/>
          Hey {user.firstName}!
          </Stack>
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem  disableRipple onClick={handleClose}>
            <NavLink to={'/profile'}>
              <SettingsApplicationsOutlined/>
              Your Account
            </NavLink>
          </MenuItem>

          <MenuItem>
        <ExitToAppIcon />
          <SignOutButton />
          </MenuItem>
        </>
    )
}

export const SignedOutAccountComponents = ({handleClose}) => {
  return(
    <>
    
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
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <ManageAccountsIcon />
              Profile
            </MenuItem>
    </>
  )
}