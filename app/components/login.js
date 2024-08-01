import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useState } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Simulated login function (replace with actual authentication logic)
  const handleLogin = (event) => {
    event.preventDefault();
    // Add actual authentication logic here. For now, just simulate success.
    if (email && password) {
      // Call the onLoginSuccess callback to update the authentication state
      onLoginSuccess();
    } else {
      
      alert('Please enter both email and password.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          padding: 4,
          borderRadius: '12px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ marginBottom: 3, fontWeight: 600 }}>
          Sign In
        </Typography>
        <form noValidate onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#e0e0e0', // Light grey border
                },
                '&:hover fieldset': {
                  borderColor: '#007AFF', // Blue border on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#007AFF', // Blue border when focused
                },
              },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#e0e0e0', // Light grey border
                },
                '&:hover fieldset': {
                  borderColor: '#007AFF', // Blue border on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#007AFF', // Blue border when focused
                },
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              marginTop: 2,
              padding: 1.5,
              borderRadius: '8px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                bgcolor: '#005BBB', // Darker blue on hover
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
