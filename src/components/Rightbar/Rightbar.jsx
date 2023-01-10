import React from 'react'
import {Box,Typography} from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';




const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
            <Box position="fixed" width={300}>
             <Typography variant='h6'fontWeight={100}>Online friends</Typography>
             <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="https://image.winudf.com/v2/image1/Y29tLnpvem96aW5lYndhbGxwYXBlci5zb3dhcl9iYW5hdF9XYWxscGFwZXJzX3NjcmVlbl8wXzE1ODM5OTUyNzhfMDc5/screen-0.jpg?fakeurl=1&type=.webp" />
  <Avatar alt="Travis Howard" src="https://i.pinimg.com/736x/76/f8/2a/76f82aaff9b85422997fc70501b29673.jpg" />
  <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ih6aHnXGEUR_BJczej1kkic3J9VMyrTXwg&usqp=CAU" />
  <Avatar alt="Agnes Walker" src="https://media.istockphoto.com/id/1201024669/photo/handsome-man-in-casual-clothing.jpg?s=612x612&w=0&k=20&c=TexR7OTm-QRZCtkDecnSVgihtLMbG9WynadACrEiMf0=" />
  <Avatar alt="Trevor Henderson" src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" />
  <Avatar alt="Travis Howard" src="https://i.pinimg.com/736x/76/f8/2a/76f82aaff9b85422997fc70501b29673.jpg" />
  <Avatar alt="Agnes Walker" src="https://media.istockphoto.com/id/1201024669/photo/handsome-man-in-casual-clothing.jpg?s=612x612&w=0&k=20&c=TexR7OTm-QRZCtkDecnSVgihtLMbG9WynadACrEiMf0=" />
  <Avatar alt="Trevor Henderson" src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" />
  <Avatar alt="Travis Howard" src="https://i.pinimg.com/736x/76/f8/2a/76f82aaff9b85422997fc70501b29673.jpg" />
</AvatarGroup>
<Typography variant='h6'fontWeight={100} mt={2} mb={2} >Latest Posts</Typography>
   <ImageList cols={3} rowHeight={100} gap={5}>
    <ImageListItem>
      <img src="https://i.pinimg.com/736x/76/f8/2a/76f82aaff9b85422997fc70501b29673.jpg"
      alt=''/>
    </ImageListItem>
    <ImageListItem>
      <img src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg"
      alt=''/>
    </ImageListItem>
    <ImageListItem>
      <img src="https://media.istockphoto.com/id/1201024669/photo/handsome-man-in-casual-clothing.jpg?s=612x612&w=0&k=20&c=TexR7OTm-QRZCtkDecnSVgihtLMbG9WynadACrEiMf0="
      alt=''/>
    </ImageListItem>
   </ImageList>
   <Typography variant='h6'fontWeight={100} mt={2}  >Latest Conversation</Typography>
   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.hdqwalls.com/wallpapers/cute-girl-art-4k-o8.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://i.pinimg.com/736x/76/f8/2a/76f82aaff9b85422997fc70501b29673.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
            </Box>

      </Box>
  )
}

export default Rightbar