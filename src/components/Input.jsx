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
    <Box sx={{ "& > :not(style)": { m: 1 } }} className="bg-white">
      <FormControl variant="standard">
        <Box sx={{ display: "flex", alignItems: "flex-end", justifyItems: 'center' }}>
          <TextField id="input-with-sx" label="With sx" variant="standard" />
          <Search sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        </Box>
      </FormControl>
    </Box>
  );
}
