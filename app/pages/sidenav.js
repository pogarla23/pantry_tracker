// pages/sidenav.js
'use client';
import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';
 // Import signOut from next-auth/react

export default function Sidenav() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
        <Box sx={{ flex: 1 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          PANTRY TRACKER
        </Typography>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Button color="inherit" onClick={() => signOut({ callbackUrl: '/' })}>
            Sign Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
