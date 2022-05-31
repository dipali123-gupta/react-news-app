import { AppBar, IconButton, Toolbar, Typography,Button,Menu, Box ,Newspaper} from '@mui/material'



import React from 'react'

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu/>
        </IconButton>
        
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          News App
        </Typography>
        <Button variant="contained" color='error'>See Latest News</Button>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign up</Button>
       
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar