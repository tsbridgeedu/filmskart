import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Search } from "lucide-react";

export default function InputForm() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }} className="">
       
      <FormControl variant="standard">
        <Box sx={{ display: "flex", alignItems: "flex-end", justifyItems: 'center' }} className='gap-2 w-full relative'>

          <TextField id="input-with-sx" label="Search products..." variant="standard" className=""/>
          <Search sx={{ color: "action.active", mr: 1, my: 0.5 }} className="cursor-pointer hover:scale-110 hover:ease-in-out transition-all duration-300" />
        </Box>
      </FormControl>
    </Box>
  );
}
