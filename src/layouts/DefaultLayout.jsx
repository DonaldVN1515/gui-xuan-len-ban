import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

function DefaultLayout({ children }) {
  return (
    <Box>
      <Header />

      <Box>{children}</Box>

      <Footer />
    </Box>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
