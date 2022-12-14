import { Box } from '@mui/material';
import React from 'react';
import images from '../../assets/images';
import About from './About';
import Banner from './Banner';
import Donor from './Donor';
import Donate from './Donate';
// import PropTypes from 'prop-types';
import Timeline from './Timeline';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Wish from './Wish';
const cx = classNames.bind(styles);

// DONOR, Organization, contributor data
const donorData = [
  {
    title: 'title',
    imageUrl: images.noImage,
  },
  {
    title: 'title',
    imageUrl: images.noImage,
  },
  {
    title: 'title',
    imageUrl: images.noImage,
  },
];
const organizationData = [
  {
    title: '',
    imageUrl: images.btecLogo,
  },
  {
    title: '',
    imageUrl: images.btecLogo,
  },
];
const contributorData = [
  {
    title: '',
    imageUrl: images.bitcLogo,
  },
  {
    title: '',
    imageUrl: images.bitcLogo,
  },
  {
    title: '',
    imageUrl: images.bitcLogo,
  },
];

function Home(props) {
  return (
    <Box
      className={cx('wrapper')}
    >
      {/* Banner */}
      <Banner />
      {/* About */}
      <About />

      {/* Timeline */}
<<<<<<< HEAD
      <Timeline 
        
      />
=======
      <Timeline />

      {/* Donate */}
      <Donate />


>>>>>>> origin/main
      <Box>
        {/* Nha Tai Tro - Donor */}
        {/* <Donor title="Nhà tài trợ" data={donorData} className={cx('donor')}/> */}
        {/* Don Vi To Chuc - Organization */}
        <Donor title="Đơn vị tổ chức" data={organizationData} />
        {/*Phối hợp thực thiện - contributor */}
        <Donor title="Phối hợp thực thiện" data={contributorData} />
      </Box>


      {/* WISH - Loi Chuc*/}
      <Wish />
    </Box>
  );
}

Home.propTypes = {};

export default Home;
