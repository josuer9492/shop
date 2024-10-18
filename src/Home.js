

import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  return (
      <div className="App-header">
        <ShoppingCartIcon fontSize='large' color='#000'></ShoppingCartIcon>
        <Stack direction="row" spacing={2} sx={{marginTop:"22px"}}>
          <Button LinkComponent={Link} to={'/venta'} variant="contained">Venta</Button>
          <Button variant="contained">Resumen</Button>
        </Stack>
      </div>
  );
}

export default App;
