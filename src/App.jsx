import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import { Route, Routes } from 'react-router-dom';
import Search from './root/Search';
import AuthLayout from './auth/AuthLayout';
import Login from './auth/login';
import RootLayout from './root/RootLayout';
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
function App() {
  
  return (
    <main>
      <ToastContainer />
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Search />} />
        </Route>
      </Routes>
      </main>
  );
}
export default App