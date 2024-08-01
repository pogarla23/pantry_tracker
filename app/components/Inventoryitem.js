import { Box, Typography, Button, IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const InventoryItem = ({ name, quantity, addItem, removeItem, removeIt }) => {
  return (
    <Box
      width="100%"
      minHeight="80px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="#FFFFFF"
      padding={2}
      sx={{
        borderRadius: '12px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        mb: 1, // Margin-bottom to space out items
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Typography
        variant="h6"
        color="#333333"
        sx={{ flex: 1, textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Typography>
      <Typography
        variant="h6"
        color="#333333"
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
        }}
      >
        {quantity}
      </Typography>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          sx={{
            bgcolor: '#c2c2c4',
            color: '#FFF',
            borderRadius: '50%',
            width: 36,
            height: 36,
            minWidth: 0,
            padding: 0,
            fontSize: '1rem',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              bgcolor: '#a1a1a3',
            },
          }}
          onClick={() => addItem(name)}
        >
          +
          
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#c2c2c4',
            color: '#FFF',
            borderRadius: '50%',
            width: 36,
            height: 36,
            minWidth: 0,
            padding: 0,
            fontSize: '1rem',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              bgcolor: '#a1a1a3',
            },
          }}
          onClick={() => removeItem(name)}
        >
          —
        </Button>
        <IconButton
          sx={{
            bgcolor: '#c2c2c4',
            color: '#FFF',
            borderRadius: '50%',
            width: 36,
            height: 36,
            minWidth: 0,
            padding: 0,
            fontSize: '1rem',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              bgcolor: '#a1a1a3',
            },
          }}
          onClick={() => removeIt(name)}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default InventoryItem;
