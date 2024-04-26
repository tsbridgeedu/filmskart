import * as React from 'react';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import '../index.css'
import { Stadium } from '@mui/icons-material';
import { Search } from 'lucide-react';
import EventForm from './EventForm';





export default function EventSearch() {
  return (
    <Stack direction="row" spacing={4}>
     <EventForm />
      <Button
       sx={{
        backgroundColor: '#ef4444',
        ":hover": {
           bgcolor: '#f87171',
           color: '#ffffff'
        }
      }}
      variant="contained" endIcon={<Search size={18} />}>
        Search for Events
      </Button>
    </Stack>
  );
}
