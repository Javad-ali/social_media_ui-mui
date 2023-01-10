import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBack from '@mui/icons-material/VideoCameraBack';
import PersonAdd from '@mui/icons-material/PersonAdd';
import DateRange from '@mui/icons-material/DateRange';
import { useState } from 'react';
import{styled,Typography,Avatar,TextField,Stack,ButtonGroup,Button} from '@mui/material'

const StyleModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
});
const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
});


const Add = () => {
    const [open,setOpen] =useState(false)
  return (
    <><Tooltip title="Add" sx={{position:"fixed",bottom:20,left:{xs:"calc(50%-25px)",md:30}}} onClick={e=>setOpen(true)}>
 <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
  </Tooltip>
  <StyleModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280}bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}><Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
   <UserBox>
   <Avatar sx={{width:30,height:30}} src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'/>
<Typography fontWeight={500} variant="span">sophie</Typography>
   </UserBox>
   <TextField fullWidth
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="whats's on your mind"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotions color='primary'/>
          <ImageIcon color='secondary'/>
          <VideoCameraBack color='success'/>
          <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button>POST</Button>
  <Button sx={{width:"100px"}}> 
    <DateRange/></Button>
</ButtonGroup>
   </Box>
</StyleModal>
  </>
  
  )
}

export default Add