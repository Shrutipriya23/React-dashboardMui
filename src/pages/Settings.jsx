import React from 'react';
import Sidenav from "./components/Sidenav";
import Navbar from"./components/Navbar";
import Box from '@mui/material/Box';
import List from "../settings/List";



const Settings= () => {
  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
      <Sidenav/>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <List/>
      </Box>

    </Box>
    
    </>
  )
}

export default Settings;

