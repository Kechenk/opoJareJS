import { Box } from '@mui/material'
import React from 'react'

const Tombol = ({children}) => {
  return (
    <Box
    component="section"
    
    borderRadius={4}
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{ bgcolor : "transparent",
    borderColor : "white",
     }}
    >
      {children}
    </Box>
  )
}

export default Tombol