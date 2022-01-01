import React from 'react';
import Header from '../Navbar/Navbar';

function BaseLayout({ children }) {
  return (
    <>
      <Header />

      <br />

      {children}
    </>
  );
}

export default BaseLayout;
