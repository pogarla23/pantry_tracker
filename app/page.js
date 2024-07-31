'use client';
import { Box,IconButton, Typography, Modal, Stack, TextField, Button, AppBar, Toolbar} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';
import { firestore } from '@/firebase';
import { collection, query, getDocs, getDoc, setDoc, deleteDoc, doc } from 'firebase/firestore';
import * as React from 'react';
import Link from 'next/link';

//For auth to work in production, you'll need to update your environment variables in your Vercel project too. Check out this guide on how to add environment variables on Vercel.

const Header = () => {
  
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#253A4A', boxShadow: 'none', borderBottom: '2px solid #0D1419' }} // Dark blue background with bottom border
    >
      <Toolbar
        sx={{ display: 'flex', justifyContent: 'center', margin: '10px', fontFamily: 'Cormorant, serif' }} // Centered content and custom font
      >
        <Box sx={{ flex: 1 }} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: 'center', color: '#E0A840' }} // Light gold text color
        >
          PANTRY TRACKER
        </Typography>
        <Box
          sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}
        >
          <Link href="https://github.com/pogarla23/pantry_tracker" passHref>
            <Button
              variant="contained"
              sx={{ bgcolor: '#E0A840', color: '#FFF', borderRadius: '8px' }} // Light gold background and white text
            >
              Go to Login
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default function Home() {
  
  const [inventory,setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName,setItem] = useState('')

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc) => {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),

      })
    })
    setInventory(inventoryList)
    
  }

  const removeItem = async(item) => {
    const docRef = doc(collection(firestore,'inventory'),item)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()){
      const {quantity} = docSnap.data()
      if (quantity === 1){
        await deleteDoc(docRef)
      }else{
        await setDoc(docRef, {quantity:quantity -1})
      }
    }
    await updateInventory()
  }

  const removeIt = async(item) =>{
    const docRef = doc(collection(firestore,'inventory'),item)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()){
      const {quantity} = docSnap.data()
      await deleteDoc(docRef)
    }
    await updateInventory()
  }

  const addItem = async(item) => {
    const docRef = doc(collection(firestore,'inventory'),item)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()){
      const {quantity} = docSnap.data()
      await setDoc(docRef, {quantity: quantity +1 })

    }else{
      await setDoc(docRef, {quantity: 1})
    }
    await updateInventory()
  }

  useEffect(() => {
    updateInventory();
  }, []);

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      gap={7}
      sx={{ backgroundColor: '#F8F9FA', fontFamily: 'Poppins, sans-serif' }} // Light background and Poppins font
    >
      <Header />

      <Modal open={open} onClose={handleClose}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          width={400}
          bgcolor="#FFFFFF" // White background for the modal
          border="1px solid #E0E0E0" // Light gray border
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)" // Subtle shadow
          p={4}
          display="flex"
          flexDirection="column"
          gap={3}
          sx={{ transform: 'translate(-50%, -50%)', borderRadius: '12px' }} // Rounded corners
        >
          <Typography variant="h6" sx={{ color: '#333333', textAlign: 'center' }}>Add Item</Typography>

          <Stack width="100%" direction="row" spacing={2}>
            <TextField
              variant="outlined"
              fullWidth
              value={itemName}
              onChange={(e) => setItem(e.target.value)}
              sx={{
                borderColor: '#E0E0E0', // Light gray border
                borderRadius: '8px',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' // Light shadow for TextField
              }}
            />

            <Button
              variant="contained"
              sx={{
                bgcolor: '#007AFF', // Bright blue background
                color: '#FFFFFF', // White text
                borderRadius: '8px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' // Light shadow
              }}
              onClick={() => {
                addItem(itemName);
                setItem('');
                handleClose();
              }}
            >
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>

      <Box border="1px solid #E0E0E0" sx={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}> {/* Border, rounded corners, and shadow */}
        <Box
          width="800px"
          height="100px"
          bgcolor="#FFFFFF" // White background
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={2}
          sx={{ borderBottom: '1px solid #E0E0E0', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }} // Bottom border and shadow
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: '#E0E0E0', // Light gray background
              color: '#333333', // Dark text
              borderRadius: '12px',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)', // Light shadow
              padding: '10px',
              fontFamily: 'Poppins, sans-serif'
            }}
            onClick={handleOpen}
          >
            Add to Inventory
          </Button>
        </Box>

        <Stack width="800px" height="300px" spacing={2} overflow="auto" p={3}>
          {inventory.map(({ name, quantity }) => (
            <Box
              key={name}
              width="100%"
              minHeight="70px"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              bgcolor="#FFFFFF" // White background
              padding={2}
              sx={{
                borderRadius: '12px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' // Light shadow
              }}
            >
              <Typography variant="h4" color="#333333" sx={{ flex: 1, textAlign: 'left', fontFamily: 'Poppins, sans-serif' }}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Typography>
              <Typography variant="h4" color="#333333" sx={{ flex: 1, textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}>
                {quantity}
              </Typography>
              <Stack direction="row" spacing={1}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#c2c2c4', // Light gray background
                    color: '#FFF', // White text
                    borderRadius: '50%',
                    width: 32, // Smaller width
                    height: 32, // Smaller height
                    minWidth: 0,
                    padding: 0,
                    fontSize: '1rem',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' // Light shadow
                  }}
                  onClick={() => addItem(name)}
                >
                  +
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#c2c2c4', // Light gray background
                    color: '#FFF', // White text
                    borderRadius: '50%',
                    width: 32, // Smaller width
                    height: 32, // Smaller height
                    minWidth: 0,
                    padding: 0,
                    fontSize: '1rem',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' // Light shadow
                  }}
                  onClick={() => removeItem(name)}
                >
                  —
                </Button>
                <IconButton
                  sx={{
                    bgcolor: '#c2c2c4', // Light gray background
                    color: '#FFF', // White text
                    borderRadius: '50%',
                    width: 32, // Smaller width
                    height: 32, // Smaller height
                    minWidth: 0,
                    padding: 0,
                    fontSize: '1rem',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' // Light shadow
                  }}
                  onClick={() => removeIt(name)}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

