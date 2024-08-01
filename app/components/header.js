'use client';
import { Box, Typography, Button, AppBar, Toolbar } from '@mui/material';
import * as React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#253A4A', // Dark blue background
        boxShadow: 'none',
        borderBottom: '2px solid #0D1419', // Bottom border for contrast
        alignContent: 'center',
        width:'100%'
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          fontFamily: 'Cormorant, serif', // Custom font for a refined look
        }}
      >
        <Box sx={{ flex: 1 }} />
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            color: '#E0A840', // Light gold text color
            letterSpacing: '2px', // Letter spacing for a modern look
          }}
        >
          PANTRY TRACKER
        </Typography>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Link href="https://github.com/pogarla23/pantry_tracker" passHref>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#E0A840', // Light gold background
                color: '#FFF', // White text
                borderRadius: '8px', // Rounded corners
                '&:hover': {
                  bgcolor: '#D89C39', // Darker gold on hover
                },
              }}
            >
              More Info
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
