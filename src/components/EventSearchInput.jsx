import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Search } from "lucide-react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function EventSearchInput() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }} className="">
<Typography variant="h6" id='modal-modal-title'  className="text-center" >
  Search for Events:
</Typography>
      
       
      <FormControl variant="standard">
        <Box sx={{ display: "flex", flexDirection: 'column', justifyItems: 'center' }} className='gap-2  w-full relative p-2'>

          <TextField id="input-with-sx" label="Search events..." variant="standard" className="" color=''/>
          <TextField id="input-with-sx" label="Location" variant="standard" className="" />
          <div className="flex my-4 justify-center">
          <Button
           sx={{
            backgroundColor: '#ef4444',
            ":hover": {
               bgcolor: '#f87171',
               color: '#ffffff'
            },
            
          }}
          className=""
          >
            <div className="flex gap-2 justify-between items-center text-white">
Search
            <Search size={20}/>
            </div>
          </Button>
          </div>
        </Box>
      </FormControl>
    </Box>
  );
}
