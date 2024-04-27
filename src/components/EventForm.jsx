import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Stadium } from '@mui/icons-material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0.5px solid #212',
  
  boxShadow: 24,
  p: 4,
};

export default function EventForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
       <Button
       onClick={handleOpen}
      id='event__organize__button'
      sx={{
        backgroundColor: '#ef4444',
        ":hover": {
            bgcolor: '#f87171',
            color: '#ffffff'
         }
      }}
      variant="contained" startIcon={<Stadium className='' />} className=''>
        Organize an Event
      </Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-md">
          <Typography id="modal-modal-title" variant="h5" component="h2" className='text-center font-extrabold'>
            Organize:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='text-center'>
            Please fill out the form:
          </Typography>

          
        </Box>
      </Modal>
    </div>
  );
}