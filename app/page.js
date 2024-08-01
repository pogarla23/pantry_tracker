'use client';
require('dotenv').config();
import { Box,IconButton, Typography, Modal, Stack, TextField, Button, AppBar, Toolbar} from '@mui/material';
import { useState, useEffect } from 'react';
import { firestore } from '@/firebase';
import {Autocomplete, collection, query, getDocs, getDoc, setDoc, deleteDoc, doc } from 'firebase/firestore';
import * as React from 'react';
import Header from './components/header';
import InventoryAutocomplete from './components/Searchbar';
import InventoryModal from './components/AddModal';
import InventoryItem from './components/Inventoryitem';
import Login from './components/login';

export default function Home() {
  const [inventory, setInventory] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItem] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
 

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'));
    const docs = await getDocs(snapshot);
    const inventoryList = [];
    docs.forEach((doc) => {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      });
    });
    setInventory(inventoryList);
  };

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      if (quantity === 1) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { quantity: quantity - 1 });
      }
    }
    await updateInventory();
  };

  const removeIt = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await deleteDoc(docRef);
    }
    await updateInventory();
  };

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + 1 });
    } else {
      await setDoc(docRef, { quantity: 1 });
    }
    await updateInventory();
  };


 


  useEffect(() => {
    updateInventory();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const options = inventory.map(item => ({ label: item.name }));

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

/* START RETURN */
  return (
    <>
    <Header />
    <br />
    <br />
    <br />

    {isAuthenticated ? (
      <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      gap={7}
      sx={{ backgroundColor: '#F8F9FA', fontFamily: 'Poppins, sans-serif' }}
    >
      <InventoryModal
        open={open}
        handleClose={() => setOpen(false)}
        itemName={itemName}
        setItem={setItem}
        addItem={addItem}
      />

      <Box border="1px solid #E0E0E0" sx={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Box
          width="800px"
          height="100px"
          bgcolor="#FFFFFF"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={2}
          sx={{ borderBottom: '1px solid #E0E0E0', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: '#E0A840', // Light gold background
              color: '#FFF',
              borderRadius: '12px',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
              padding: '10px',
              fontFamily: 'Poppins, sans-serif',
            }}
            onClick={handleOpen}
          >
            {inventory.length === 0 ? 'Add your first item' : 'Add item'}
          </Button>

          <InventoryAutocomplete
            inventory={inventory}
            addItem={addItem}
          />

          
        </Box>

        <Stack width="800px" height="300px" spacing={2} overflow="auto" p={3}>
          {inventory.map(({ name, quantity }) => (
            <InventoryItem
              key={name}
              name={name}
              quantity={quantity}
              addItem={addItem}
              removeItem={removeItem}
              removeIt={removeIt}
            />
          ))}
        </Stack>
      </Box>
    </Box>
    ) : (
      
      <Login onLoginSuccess={handleLoginSuccess} />
    )}
  </>
    
  );
}
