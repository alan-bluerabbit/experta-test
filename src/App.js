import React from 'react';
import Dashboard from './views/Dashboard/view'

import { StoreProvider } from './helpers/store';

function App() {
  return (
    <StoreProvider>  
      <Dashboard />
    </StoreProvider>
  );
}

export default App;
