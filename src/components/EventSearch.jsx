import * as React from "react";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import "../index.css";
import { Stadium } from "@mui/icons-material";
import { Search } from "lucide-react";

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
