import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Call, Stadium } from "@mui/icons-material";

import { useUser } from "@clerk/clerk-react";
import toast, { Toaster } from "react-hot-toast";
import {
  Clapperboard,
  Contact,
  Contact2Icon,
  ImageUp,
  LocateFixed,
  LogIn,
  Mail,
  MapPin,
  Monitor,
  PartyPopper,
  Pencil,
  Phone,
  Speaker,
  Trophy,
  User,
  UserPlus2,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

// import {use}

import '../index.css'

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "0.5px solid #212",

  boxShadow: 24,
  p: 4,
};

export default function CreateEventForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { isSignedIn, user } = useUser();

  const eventType = [
    { value: "Virtual", icon: <Monitor size={18} /> },
    { value: "Offline", icon: <LocateFixed size={18} /> },
  ];

  const eventCategory = [
    {value: 'Celebration', icon: <PartyPopper size={20} className="bg-red-500 text-white font-bold rounded-xl w-6 h-6" />},
    {value: 'EDM Party', icon: <Speaker size={20} className="bg-red-500 text-white font-bold rounded-xl w-6 h-6" />},
    {value: 'Show', icon: <Clapperboard size={20} className="bg-red-500 text-white font-bold rounded-xl w-6 h-6" />},
    {value: 'Sports', icon: <Trophy size={20} className="bg-red-500 text-white font-bold rounded-xl w-6 h-6" />},

  ];

  const [title, setTitle] = useState('')

  return (
    <div>
      <Toaster position="top-center" />
      <NavLink to='/event-creation'>
      <Button
        
       
        sx={{
          backgroundColor: "#ef4444",
          ":hover": {
            bgcolor: "#f87171",
            color: "#ffffff",
          },
        }}
        variant="contained"
        startIcon={<Stadium className="" />}
        className=""
      >
        Organize an Event
      </Button>
      </NavLink>

    
    </div>
  );
}
