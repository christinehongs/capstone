import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  CurrencyConverter,
  itemDetails,
  Shopping,
} from './pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shopping/>} />
      <Route path="/currency-converter" element={<CurrencyConverter />} />
      <Route path="/item-details" element={<itemDetails />} />

    </Routes>
  );
};

export default AppRoutes;
