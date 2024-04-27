import * as React from "react";


import Stack from "@mui/material/Stack";
import "../index.css";

import CreateEventForm from "./CreateEventForm";
import SearchEventForm from "./SearchEventForm";

export default function EventSearch() {
  return (
    <Stack direction="row" spacing={4}>
      <CreateEventForm />
      <SearchEventForm />
    </Stack>
  );
}
