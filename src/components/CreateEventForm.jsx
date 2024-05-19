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

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {isSignedIn ? (
          <Box sx={style} className="rounded-md relative" >
            <div className="flex absolute top-0 py-3 left-0 px-3 mb-5 cursor-pointer" onClick={handleClose}>
        <CloseFullscreenIcon fontSize="30" className="bg-black rounded-xl text-white text-xl  "  />
      </div>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              className="text-center font-extrabold"
            >
              
              Organize an Event
              <hr className="bg-red-500 h-[2px] mx-10 mt-1" />
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              className="text-center"
            >
              Please fill out the form:
            </Typography>

            <Stack className="flex mt-7 overflow-y-scroll scrollbar bg-slate-50 px-2 rounded-md " sx={{
              height: 300
            }}>
              <FormControl component={"form"} className="">
                <TextField
                  label="Event Image"
                  variant="standard"
                  className="cursor-pointer"
                  sx={{
                    mt: '8px',
                    cursor: 'pointer'
                  }}
                  required
                  InputProps={{
                    readOnly: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <ImageUp  className="ml-1 " size={20} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Event Title"
                  variant="standard"
                  className="my-3 "
                  value={title}
                  onChange={event => {setTitle(event.target.value)
                  console.log(event.target.value)
                  }}
                  sx={{
                    mt: '8px'
                  }}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Pencil className="ml-1 " size={20} />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  label="Enter your Name"
                  className="my-3"
                  sx={{
                    mt: '8px'
                  }}
                  required
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <User className="ml-1" size={20} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Enter your Email"
                  type="email"
                  className="my-3"
                  sx={{
                    mt: '8px'
                  }}
                  required
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Mail className="ml-1" size={20} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Contact No."
                  className="my-3"
                  sx={{
                    mt: '8px'
                  }}
                  required
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Phone className="ml-1" size={20} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="City"
                  className="my-3"
                  sx={{
                    mt: '8px'
                  }}
                  required
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MapPin className="ml-1" size={20} />

                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id=""
                  select
                  label="Event Type"
                  required
                  sx={{
                    marginBottom: "12px",
                    mt: '8px'
                  }}
                  variant="standard"
                >
                  {eventType.map((event) => {
                    return (
                      <MenuItem
                        key={event.icon}
                        
                        className="text-black"
                      >
                        <div className="flex gap-2">
                          {event.icon}
                          {event.value}
                        </div>
                      </MenuItem>
                    );
                  })}
                </TextField>
                <TextField
                  id=""
                  
                  required
                  label="Event Category"
                 select
                  sx={{
                    marginBottom: "12px",
                    mt: '5px'
                  }}
                  variant="standard"
                >
                  {eventCategory.map((event) => {
                    return (
                      <MenuItem
                        key={event.icon}
                       
                        className="text-black"
                      >
                        <div className="flex gap-2">
                          {event.icon}
                          {event.value}
                        </div>
                      </MenuItem>
                    );
                  })}
                </TextField>
               <Box className='flex mb-3 mt-1'>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]} className="my-3">
                    <DatePicker label="Date of Event" />
                  </DemoContainer>
                </LocalizationProvider>
               </Box>
              </FormControl>
            </Stack>

            <Stack sx={{
              display: 'flex',
             
            }}
            className="mt-5"
            >
            <Button  sx={{
                backgroundColor: "#ef4444",
                ":hover": {
                  bgcolor: "#f87171",
                  color: "#ffffff",
                },
              }}
              
              >
                <h2 className="text-white">Submit</h2>
            </Button>
            </Stack>
          </Box>
        ) : (
          <Box
            sx={style}
            className="rounded-md flex flex-col justify-center items-center gap-5"
          >
            <Typography variant="h5" id="modal-modal-title" component={"h2"}>
              Let's Sign In :
            </Typography>

            <Button
              className=""
              variant="contained"
              sx={{
                backgroundColor: "#ef4444",
                ":hover": {
                  bgcolor: "#f87171",
                  color: "#ffffff",
                },
              }}
              endIcon={<LogIn size={18} />}
            >
              <NavLink to={"/login"}> Login</NavLink>
            </Button>

            <Typography
              variant="subtitle2"
              id="modal-modal-title"
              component={"h5"}
              className="pt-5"
            >
              Don't have an Account?
            </Typography>

            <Button
              className=""
              variant="contained"
              sx={{
                backgroundColor: "#ef4444",
                ":hover": {
                  bgcolor: "#f87171",
                  color: "#ffffff",
                },
              }}
              endIcon={<UserPlus2 size={18} />}
            >
              <NavLink to={"/signup"}> Sign Up</NavLink>
            </Button>
          </Box>
        )}
      </Modal> */}
    </div>
  );
}
