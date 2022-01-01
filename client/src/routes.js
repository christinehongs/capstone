import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Converter, GeoLocation, Home, ItemSelect, Sample } from './components';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sample" element={<Sample />} />
      <Route path="/converter" element={<Converter />} />
      <Route path="/location" element={<GeoLocation />} />
      <Route path="/shopping" element={<ItemSelect />} />
    </Routes>
  );
};

export default AppRoutes;
