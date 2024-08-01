import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';


const InventoryAutocomplete = ({ inventory, addItem }) => {
  const [inputValue, setInputValue] = useState('');

  // Handle input change in Autocomplete
  const handleInputChange = (event, newValue) => {
    setInputValue(newValue);
  };

  // Handle Autocomplete change or free solo input
  const handleAutocompleteChange = async (event, newValue) => {
    if (newValue && !inventory.some(item => item.name === newValue.trim())) {
      // Only add the item if it's not already in the inventory and is not empty
      const trimmedValue = newValue.trim();
      if (trimmedValue) {
        await addItem(trimmedValue);
        setInputValue(''); // Clear the input field
      }
    }
  };

  return (
    <Autocomplete
      freeSolo
      disableClearable
      options={inventory.map((item) => item.name)}
      value={inputValue}
      onInputChange={handleInputChange}
      onChange={handleAutocompleteChange}
      renderInput={(params) => (
        <TextField
          {...params}

          
          label="Search Item"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
          sx={{ 
            width: '100%', // Fit the width to its content
            minWidth: 200, // Optional: set a minimum width if needed
          }}
        />
      )}
    />
  );
};

export default InventoryAutocomplete;
