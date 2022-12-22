import { AppBar, Badge, Box, styled, Toolbar, Typography,InputBase, Avatar, Menu, MenuItem } from "@mui/material";
import React,{useState} from "react";
import DevicesIcon from "@mui/icons-material/Devices";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Mail } from "@mui/icons-material";
const StyleToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  width: "40%",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
}));
const Icons = styled(Box)(({ theme }) => ({
    display:"none",
    alignItems:"center",
    gap:"20px",
    cursor:"pointer",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display:"flex",
    alignItems:"center",
    gap:"20px",
    cursor:"pointer",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}));
const Navbar = () => {

    const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky" sx={{backgroundColor:"#000"}}>
      <StyleToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Gulshan
        </Typography>
        <DevicesIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search .." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>

          <Badge badgeContent={2} color="error">
            <NotificationsIcon/>
          </Badge>
          <Avatar  onClick={() => setOpen(true)} sx={{width:"30px",height:"30px"}} src="https://media.licdn.com/dms/image/C4E03AQE6DjH_sm4m-g/profile-displayphoto-shrink_400_400/0/1630174148208?e=1677110400&v=beta&t=AxtnXkfeSopvPBKwCguOYvd0YxvOQyXWZQQXJVjfleM"/>
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
            <Typography>Gulshan</Typography>
            <Avatar sx={{width:"30px",height:"30px"}} src="https://media.licdn.com/dms/image/C4E03AQE6DjH_sm4m-g/profile-displayphoto-shrink_400_400/0/1630174148208?e=1677110400&v=beta&t=AxtnXkfeSopvPBKwCguOYvd0YxvOQyXWZQQXJVjfleM"/>
        </UserBox>
      </StyleToolBar>

      <Menu
        id="basic-menu"
       
        open={open}
        onClose={(e) =>setOpen(false)}
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
        <MenuItem>My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      
    </AppBar>
  );
};

export default Navbar;
