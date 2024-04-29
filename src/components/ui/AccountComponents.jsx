import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import {
  
  SignInButton,
  SignOutButton,
  SignUpButton,
  useUser,
} from "@clerk/clerk-react";

import "../../index.css";

import {
  AccountCircleOutlined,
 
} from "@mui/icons-material";


import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";


import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { LogOut, Settings2, SquareUser } from "lucide-react";

export const SignedAccountComponents = ({ handleClose }) => {
  const { user } = useUser();

  return (
    <>
      <MenuItem sx={{ my: 0.5 }} onClick={handleClose}>
        <Stack className="flex items-center justify-center w-full">
          <AccountCircleOutlined sx={{ ml: 1 }} />
          Hey {user.firstName || user.username}!
        </Stack>
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem disableRipple onClick={handleClose} className=" " >
        <NavLink to={"/profile"} className="flex items-center gap-3">
          <SquareUser size={18} className="hover:text-red-500" />

          <Typography fontFamily={"Poppins"} fontWeight={'500'} variant="subtitle2 " >
            Account
          </Typography>
        </NavLink>
      </MenuItem>

      <MenuItem >
       <NavLink to='/user-profile' className="flex  gap-3">
       <Settings2 size={18} />
        <Typography fontFamily={"Poppins"} fontWeight={'500'} variant="subtitle2 ">
            Settings
          </Typography>
       </NavLink>
      </MenuItem>

      <MenuItem className="flex  gap-3  ">
        <LogOut size={18} />
        <SignOutButton className="main__sign__out__btn font-medium hover:text-red-500 hover:font-normal transition-all duration-300" />
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
            marginTop: "2px",
          }}
        >
          <img src="/logo.png" alt="Filmskart Logo" className="w-28" />
        </Stack>
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem onClick={handleClose} disableRipple>
        <LoginIcon />
        <SignInButton>Login</SignInButton>
      </MenuItem>
      <MenuItem onClick={handleClose} disableRipple>
        <HowToRegIcon />
        <SignUpButton>Sign Up</SignUpButton>
      </MenuItem>
    </>
  );
};
