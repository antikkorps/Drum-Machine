import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Layout from './components/UI/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Home' element={<Home />} />
          <Route path='About' element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
