import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Search } from 'lucide-react';
import Input from './Input'
import EventSearchInput from './EventSearchInput';
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";


const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  
  boxShadow: 24,
  p: 4,
};

export default function SearchEventForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='flex justify-center'>
      <Button
      onClick={handleOpen}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='rounded-md flex justify-center relative'>
        <div className="flex absolute top-0 py-4 left-0 px-4 mb-5 cursor-pointer" onClick={handleClose}>
        <CloseFullscreenIcon fontSize="30" className="bg-gray-500 rounded-xl text-white text-xl  "  />
      </div>
          <EventSearchInput />
        </Box>
      </Modal>
    </div>
  );
}
