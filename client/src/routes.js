import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  CurrencyConverter,
  ItemDetails,
  Shopping,
} from './pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shopping/>} />
      <Route path="/currency-converter" element={<CurrencyConverter />} />
      <Route path="/item-details" element={<ItemDetails />} />

    </Routes>
  );
};

export default AppRoutes;
