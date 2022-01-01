import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  CurrencyConverter,
  GeoLocation,
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
      <Route path="/location" element={<GeoLocation />} />
      <Route path="/shopping" element={<Shopping />} />
    </Routes>
  );
};

export default AppRoutes;
