import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Call, Stadium } from "@mui/icons-material";

import { useUser } from "@clerk/clerk-react";
import toast, { Toaster } from "react-hot-toast";
import {
  Contact,
  Contact2Icon,
  LocateFixed,
  LogIn,
  Mail,
  MapPin,
  Monitor,
  Pencil,
  Phone,
  User,
  UserPlus2,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { FormControl, Input, MenuItem, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

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
  return (
    <div>
      <Toaster position="top-center" />
      <Button
        onClick={handleOpen}
        // id='event__organize__button'
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {isSignedIn ? (
          <Box sx={style} className="rounded-md">
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

            <Stack className="flex mt-7">
              <FormControl component={"form"}>
                <Input
                  placeholder="Event Title"
                  endAdornment={<Pencil />}
                  className="my-3"
                  required
                />
                <Input
                  placeholder="Enter your Name"
                  endAdornment={<User />}
                  className="my-3"
                  required
                />
                <Input
                  placeholder="Enter your Email"
                  endAdornment={<Mail />}
                  className="my-3"
                  required
                />
                <Input
                  placeholder="Contact No."
                  endAdornment={<Phone />}
                  className="my-3"
                  reuired
                />
                <Input
                  placeholder="City"
                  endAdornment={<MapPin />}
                  className="my-3"
                  required
                />
                <TextField
                  id="standard-select-currency-native"
                  select
                  label="Event Type"
                  defaultValue="Type"
                  sx={{
                    marginBottom: "12px",
                  }}
                  variant="standard"
                >
                  {eventType.map((event) => {
                    return (
                      <MenuItem
                        key={event.icon}
                        value={event.value}
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]} className="my-3">
                    <DatePicker label="Date of Event" />
                  </DemoContainer>
                </LocalizationProvider>
              </FormControl>
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
      </Modal>
    </div>
  );
}
