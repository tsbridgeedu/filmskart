import Typography  from '@mui/material/Typography'
import  Stack  from '@mui/material/Stack'
import React from 'react'
import { FormControlLabel, FormGroup, RadioGroup,Radio, TextField, FormControl, FormLabel } from '@mui/material'
import { CheckBox } from '@mui/icons-material'
import {Button} from '@mui/material'
import { Box } from 'lucide-react'
import {Image} from 'mui-image'
const CheckoutContent = () => {
  return (
    <div>
      <Stack sx={{width:'100%', height:'100vh', }}>
    <Stack sx={{display:'flex',marginTop:'60px',marginRight:'60px', marginLeft:'60px'}} >
     <Stack sx={{display:'flex',flexDirection:'row',justifyContent:'', alignItems:'center', fontFamily:'Poppins'}}>
       <Typography sx={{paddingRight:'4px', gap:'3', color:'gray',fontFamily:'Poppins'}} variant='subtitle1' >
         Home /
       </Typography>
       <Typography sx={{paddingRight:'4px',gap:'3', color:'gray',fontFamily:'Poppins'}} variant='subtitle1' className='gap-2 mx-[3px] '>
         My Account /
       </Typography>
       <Typography  sx={{paddingRight:'4px' , gap:'3',color:'gray',fontFamily:'Poppins'}} variant='subtitle1' className='gap-2 mx-[3px]'>
          Product /
       </Typography>
       <Typography  sx={{paddingRight:'4px', gap:'3',color:'gray',fontFamily:'Poppins'}} variant='subtitle1' className='gap-2 mx-[3px]'>
         View Cart /
       </Typography>
       <Typography sx={{paddingRight:'4px',gap:'3',fontFamily:'Poppins'}} variant='subtitle1 ' className='gap-2 mx-[3px]'>
          Checkout 
       </Typography>
     </Stack>
    </Stack>


    <Stack sx={{display:'flex', width:'252px', height:'60px',marginTop:'50px', marginLeft:'100px', gap:'24px'}}>
     <Typography sx={{fontFamily:'Poppins', fontSize:'30px'}}>
        Billing Details
     </Typography>
    </Stack>


    <Stack sx={{display:'flex', width:'470px', height:'700px',marginTop:'30px', marginLeft:'100px', gap:'24px'}}>
     <Typography sx={{fontFamily:'Poppins', fontSize:'35px'}}>
      <TextField  sx={{width:'400px'}} id='filled-basic' label="First Name" variant='filled'/>
     </Typography>
     <Typography sx={{fontFamily:'Poppins', fontSize:'35px'}}>
      <TextField  sx={{width:'400px'}}  id='filled-basic' label="Company Name" variant='filled'/>
     </Typography>
     <Typography sx={{fontFamily:'Poppins', fontSize:'35px'}}>
      <TextField  sx={{width:'400px'}} id='filled-basic' label="Street-Address" variant='filled'/>
     </Typography>
     <Typography sx={{fontFamily:'Poppins', fontSize:'35px'}}>
      <TextField   sx={{width:'400px'}} id='filled-basic' label="Apartment,Floor.etc" variant='filled'/>
     </Typography>
     <Typography sx={{fontFamily:'Poppins', fontSize:'35px'}}>
      <TextField  sx={{width:'400px'}} id='filled-basic' label="Town/City" variant='filled'/>
     </Typography>
     <Typography sx={{fontFamily:'Poppins', fontSize:'35px'}}>
      <TextField   sx={{width:'400px'}} id='filled-basic' label="Phone Number" variant='filled'/>
     </Typography>
     <Typography sx={{fontFamily:'Poppins', fontSize:'35px'}}>
      <TextField  sx={{width:'400px'}}  id='filled-basic' label="Email Address" variant='filled'/>
     </Typography>
     <Typography sx={{fontFamily:'Poppins', fontSize:'35px',}}>
       <FormGroup >
        <FormControlLabel   control={<CheckBox sx={{color:'#ef4444'}}  defaultCheckbox/>} label='Save this information for faster checkout-out next time'/>
       </FormGroup>
     </Typography>
     
    </Stack>

     <Stack sx={{display:'flex', width:'527px', height:'500px',marginTop:'-600px', marginLeft:'778px', gap:'32px'}}>
       <Stack sx={{display:'flex', flexDirection:'row',marginLeft:'20px',marginRight:'20px' }}>
       <Typography sx={{fontFamily:'Poppins', fontSize:'15px'}}>
        LCD Monitor
       </Typography>
       <Typography sx={{fontFamily:'Poppins', fontSize:'15px',marginLeft:'300px'}}>
        $650
       </Typography>
       </Stack>

       <Stack sx={{display:'flex', flexDirection:'row',marginLeft:'20px',marginRight:'20px' }}>
       <Typography sx={{fontFamily:'Poppins', fontSize:'15px'}}>
        HI Gamepad
       </Typography>
       <Typography sx={{fontFamily:'Poppins', fontSize:'15px',marginLeft:'295px'}}>
        $1100
       </Typography>
       </Stack>

       <Stack sx={{display:'flex', flexDirection:'row',marginLeft:'20px',marginRight:'20px' }}>
       <Typography sx={{fontFamily:'Poppins', fontSize:'15px'}}>
        Subtotal
       </Typography>
       <Typography sx={{fontFamily:'Poppins', fontSize:'15px',marginLeft:'330px'}}>
        $1750
       </Typography>
       </Stack>
        

       <Stack sx={{display:'flex', flexDirection:'row',marginLeft:'20px',marginRight:'20px' }}>
       <Typography sx={{fontFamily:'Poppins', fontSize:'15px'}}>
        Shipping:
       </Typography>
       <Typography sx={{fontFamily:'Poppins', fontSize:'15px',marginLeft:'330px'}}>
        Free
       </Typography>
       </Stack>
     
       <Stack sx={{display:'flex', flexDirection:'row',marginLeft:'20px',marginRight:'20px' }}>
       <Typography sx={{fontFamily:'Poppins', fontSize:'15px'}}>
        Total:
       </Typography>
       <Typography sx={{fontFamily:'Poppins', fontSize:'15px',marginLeft:'352px'}}>
        $1750
       </Typography>
       </Stack>

       
      

       <Stack sx={{display:'flex', flexDirection:'row',marginLeft:'20px',marginRight:'20px' }}>
       <Typography sx={{fontFamily:'Poppins', fontSize:'15px'}}>
           <FormControl >
            <RadioGroup  aria-labelledby='Payment-methods' name='payment' defaultValue='Bank'>
              <Stack sx={{display:'flex',flexDirection:'row'}}>
              <FormControlLabel  value='bank' control={<Radio  />} label='Bank'/>
              <Image sx={{marginLeft:'57px'}} src="card_img.png"/>
              </Stack>
              <FormControlLabel  value='cashonDelivery' control={<Radio/>} label='Cash on Delivery'/>
            </RadioGroup>
           </FormControl>
       </Typography>
      
       </Stack>

      

       <Stack sx={{display:'flex', flexDirection:'row',marginLeft:'20px',marginRight:'20px' }}>
       <Typography sx={{fontFamily:'Poppins', fontSize:'15px'}}>
       <TextField  sx={{width:'250px'}} id='outlined-basic' label="Coupon Code" variant='outlined'/>
       </Typography>

       <Typography sx={{fontFamily:'Poppins', fontSize:'15px'}}>
       <Button sx={{width:'200px', height:'55px',marginLeft:'10px', backgroundColor:'#ef4444'}} variant='contained'>Apply Coupon</Button>
       </Typography>
      
       </Stack>

       <Stack sx={{display:'flex', flexDirection:'row',marginLeft:'20px',marginRight:'20px' }}>
       

       <Typography sx={{fontFamily:'Poppins', fontSize:'15px'}}>
       <Button sx={{width:'200px', height:'55px', backgroundColor:'#ef4444'}} variant='contained'>Place Order</Button>
       </Typography>
      
       </Stack>
     </Stack>
     </Stack>
    </div>
  )
}

export default CheckoutContent
