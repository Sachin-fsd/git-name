import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";
import { Route, Routes } from 'react-router-dom';
import Search from './Search';
import Login from './login';
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
function App() {
  
  return (
    <main>
      <ToastContainer />
      {/* <button onClick={notify}>Notify!</button>
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <ClipLoader
        color='#ddd'
        // loading={loading}
        cssOverride={override}
        size={50}
        // aria-label="Loading Spinner"
        // data-testid="loader"
      /> */}
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      </main>
  );
}
export default App