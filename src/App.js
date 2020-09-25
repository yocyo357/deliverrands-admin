import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Login from './pages/login_page/Login'
import Home from './pages/home_page/Home';
import GroceryAndPalengkeContextProvider from './contexts/GroceryAndPalengkeContext';
import GroceryOrdersContextProvider from './contexts/GroceryOrdersContext';
import PalengkeOrdersContextProvider from './contexts/PalengkeOrderContext';
function App() {
  return (
    <GroceryOrdersContextProvider>
      <PalengkeOrdersContextProvider>
        <GroceryAndPalengkeContextProvider>
          <BrowserRouter>
            <Switch >
              <div>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
              </div>
            </Switch >
          </BrowserRouter>
        </GroceryAndPalengkeContextProvider>
      </PalengkeOrdersContextProvider>
    </GroceryOrdersContextProvider>
  );
}

export default App;
