'use client';
import { Box, Modal, Typography, Stack, TextField, Button } from '@mui/material';

const InventoryModal = ({ open, handleClose, itemName, setItem, addItem }) => {
  const handleAddClick = () => {
    if (itemName.trim() !== '') {
      addItem(itemName);
      setItem('');
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        width={400}
        bgcolor="#FFFFFF"
        border="1px solid #E0E0E0"
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
        p={4}
        display="flex"
        flexDirection="column"
        gap={3}
        sx={{
          transform: 'translate(-50%, -50%)',
          borderRadius: '12px',
          outline: 'none', // Remove the default modal outline
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#333333',
            textAlign: 'center',
            fontWeight: 'bold', // Bold text for the title
          }}
        >
          Add Item
        </Typography>
        <Stack width="100%" direction="row" spacing={2}>
          <TextField
            id="item-name"
            label="Name"
            variant="outlined"
            fullWidth
            value={itemName}
            onChange={(e) => setItem(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E0E0E0', // Light grey border color
                  borderRadius: '8px',
                },
                '&:hover fieldset': {
                  borderColor: '#007AFF', // Blue border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#007AFF', // Blue border color when focused
                },
              },
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: '#007AFF', // Blue background
              color: '#FFFFFF', // White text
              borderRadius: '8px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                bgcolor: '#005BBB', // Darker blue on hover
              },
            }}
            onClick={handleAddClick}
          >
            Add
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default InventoryModal;
