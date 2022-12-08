import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header';

function DefaultLayout({ children }) {
  return (
    <Box>
      <Header />

      <Box sx={{mt:'100px'}}>{children}</Box>

      <Footer />
    </Box>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
