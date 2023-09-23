import React from 'react';
import '/Users/Adrian Gonzalez/Desktop/muse-meditation/src/App.css';
import Navbar from '/Users/Adrian Gonzalez/Desktop/muse-meditation/src/Components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '/Users/Adrian Gonzalez/Desktop/muse-meditation/src/Pages/Home.js';
import Reports from '/Users/Adrian Gonzalez/Desktop/muse-meditation/src/Pages/Reports.js';
import Products from "/Users/Adrian Gonzalez/Desktop/muse-meditation/src/Pages/Products.js";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";



function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route
            path="/reports"
            element={
              <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  <Reports />
                </PersistGate>
              </Provider>
            }
          />
          <Route path="/products" element={<Products />} />
    </Routes>
  </Router>
    </>
  );
}

export default App;
