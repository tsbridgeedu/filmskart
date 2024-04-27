import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import LoginIcon from "@mui/icons-material/Login";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { NavLink } from "react-router-dom";

import { SignOutButton, useUser } from "@clerk/clerk-react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Settings, User } from "lucide-react";
import { AccountCircleOutlined, SettingsAccessibilitySharp, SettingsApplications, SettingsApplicationsOutlined, SupervisedUserCircle } from "@mui/icons-material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function AccountButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <div >
      <Avatar
        alt=""
        src={isSignedIn ? user.firstName : ""}
        sx={{ width: 24, height: 24 }}
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        
        onClick={handleClick}
        
      />
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {isSignedIn ? (
          <>
          <MenuItem sx={{my: 0.5}}>
          Hey {user.firstName}!
          <AccountCircleOutlined sx={{ml: 1 }}/>
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
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
        ) : (
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
        )}
      </StyledMenu>
    </div>
  );
}
