import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import style from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { ThemeContext } from '../components/context/ThemeProvider';
const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  const context = React.useContext(ThemeContext);

  return (
    <Box className={cx(context.theme, 'wrapper')}>
      <Header />

      <Box sx={{ mt: '100px' }}>{children}</Box>

      <Footer />
    </Box>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
