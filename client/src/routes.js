import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  CurrencyConverter,
  Home,
  Sample,
  Shopping,
} from './pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sample" element={<Sample />} />
      <Route path="/currency-converter" element={<CurrencyConverter />} />
      <Route path="/shopping" element={<Shopping />} />
    </Routes>
  );
};

export default AppRoutes;
