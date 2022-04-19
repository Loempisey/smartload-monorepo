import * as React from 'react';
import { styled, useTheme, } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import ViewAgendaRoundedIcon from '@mui/icons-material/ViewAgendaRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Link from 'next/link'
import { alpha } from '@mui/material/styles';
import { useRouter } from 'next/router';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';
import ProfilePopover from './Profile';
import {fireAuth} from '../../../services/firebase'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width:` calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function LeftSideBar({ children }) {
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft:` calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
 

  const handlelogout = () =>{
    fireAuth.signOut()
    
  }

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ backgroundColor: "rgb(73, 121, 255)" }}>

        <Toolbar style={{ backgroundColor: "rgb(73, 121, 255)" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Grid item xs={2}>
          <Typography variant="h6" noWrap component="div">
            Smart Load
          </Typography>
          </Grid>
          <Grid item xs={6}>
            <Toolbar
              style={{ marginTop: "8px", postition: "absolute" }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                margin-top="20px"
                margin="30px"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
              </Typography>
              {/* <Search style={{ width: "300px" }}>
                <SearchIconWrapper >
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search> */}
            </Toolbar>
          </Grid>
          <Grid item xsd={4} style={{paddingLeft:"290px"}} >
            <ProfilePopover/>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ backgroundColor: "rgb(73, 121, 255)" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List
          sx={{ width: '100%', maxWidth: 360, height: "100%", bgcolor: 'rgb(73, 121, 255)', color: 'white' }}
          component=""
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" style={{ backgroundColor: "rgb(73, 121, 255)", color: "white", }}>
              <Typography style={{fontSize:"20px",marginTop:"10px",textAlign:"center"}}>Menu</Typography>
            </ListSubheader>
          }
        >
          <Link href="/dashboard">
            <ListItemButton style={router.pathname == '/dashboard' ? { backgroundColor: "whitesmoke", borderRadius: "10px", width: "300px", color: "black" } : {}}>
              <ListItemIcon>
                <ViewAgendaRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Link>
          <Link href="/customer">
            <ListItemButton style={router.pathname == '/customer' ? { backgroundColor: "whitesmoke", borderRadius: "10px", width: "300px", color: "black" } : {}}>
              <ListItemIcon>
                <GroupRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Customer" />
            </ListItemButton>
          </Link>
          <Link href="/order">
            <ListItemButton style={router.pathname == '/order' ? { backgroundColor: "whitesmoke", borderRadius: "10px", width: "300px", color: "black" } : {}}>
              <ListItemIcon>
                <EventNoteRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </Link>
          <Link href="/history">
            <ListItemButton style={router.pathname == '/history' ? { backgroundColor: "whitesmoke", borderRadius: "10px", width: "300px", color: "black" } : {}}>
              <ListItemIcon>
                <HistoryRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
          </Link>
          <Link href="/setting">
            <ListItemButton style={router.pathname == '/setting' ? { backgroundColor: "whitesmoke", borderRadius: "10px", width: "300px", color: "black" } : {}}>
              <ListItemIcon>
                <SettingsApplicationsRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </Link>
          <Link href="/">
            <ListItemButton>
              <ListItemIcon>
                <LogoutRoundedIcon onClick={handlelogout}/>
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </Link>

        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
        <DrawerHeader />
        <div>
          {children}
        </div>
      </Box>
    </Box>
  );
}