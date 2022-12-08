import React from 'react';
import classNames from 'classnames/bind';
import Donor from './Donor';
import Organization from './Organization';
// import PropTypes from 'prop-types';

import styles from './Home.module.scss';
import { Box } from '@mui/material';

const cx = classNames.bind(styles);

function Home(props) {
  return (
    <Box
    
      sx={{
        display:'none', 
      }}
    >
      Home
      {/* Nha Tai Tro - Donor */}
      <Donor />
      {/* Don Vi To Chuc - Organization */}
      {/* <Organization /> */}
    </Box>
  );
}

Home.propTypes = {};

export default Home;
