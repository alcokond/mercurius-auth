import React from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      }
    },
  });
  
const MuiSidebar = () => {
  
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
    <ThemeProvider theme={theme}>
    <IconButton size='large' edge='end' color='primary' aria-label='logo' onClick={()=>setIsDrawerOpen(true)}>
        <MenuIcon />
    </IconButton>
    </ThemeProvider>
    <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h5' component='div'>
                Componentes
            </Typography>
        </Box>
        <Box p={2} width='250px' textAlign='left' role='presentation'>
            <Typography variant='h7' component='div'>
                Inputs
            </Typography>
        </Box>

    </Drawer>
    </>
  )
}

export default MuiSidebar
