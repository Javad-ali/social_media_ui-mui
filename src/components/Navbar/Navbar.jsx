import React from 'react'
import{AppBar,Toolbar,styled,Typography,InputBase,Box,Menu,MenuItem} from '@mui/material'
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Badge from '@mui/material/Badge';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications'
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';


const StyledToolbar= styled(Toolbar)({
display:"flex",
justifyContent:"space-between"
});
const Search = styled("div")(({theme})=>({
  backgroundColor:"#fff",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%",
   
}))
const Icons = styled(Box)(({theme})=>({
  display:"none",gap:"20px",alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));
const UserBox = styled(Box)(({theme})=>({
  display:"flex",gap:"10px",alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));
const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <AppBar position='sticky'sx={{backgroundColor:"#663399"}}>
     <StyledToolbar>
      <Typography variant="h6"sx={{display:{xs:"none",sm:"block"}}}>FunSkoot</Typography>
      <AnnouncementIcon sx={{display:{xs:"block",sm:"none"}}}/>
      <Search><InputBase placeholder='search...'/></Search>
      <Icons><Badge badgeContent={4} color="error">
  <Mail  />
</Badge>
<Badge badgeContent={2} color="error">
  <Notifications/>
</Badge>
<Avatar sx={{width:30,height:30}} 
src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'
onClick={e=>setOpen(true)}
/>
</Icons>
<UserBox onClick={e=>setOpen(true)}>
<Avatar sx={{width:30,height:30}} src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'/>
<Typography variant='span'>sophie</Typography>
</UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

      </AppBar>
  );
};

export default Navbar 