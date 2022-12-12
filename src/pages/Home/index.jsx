import { Box } from '@mui/material';
import React from 'react';
import images from '../../assets/images';
import About from './About';
import Banner from './Banner';
import Donor from './Donor';
// import PropTypes from 'prop-types';
import Timeline from './Timeline';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
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
    title: 'BTEC FPT',
    imageUrl: images.btecLogo,
  },
];
const contributorData = [
  {
    title: 'BTEC Information Technology Club',
    imageUrl: images.bitcLogo,
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
      <Timeline />
      <Box>
        {/* Nha Tai Tro - Donor */}
        <Donor title="Nhà tài trợ" data={donorData} />
        {/* Don Vi To Chuc - Organization */}
        <Donor title="Đơn vị tổ chức" data={organizationData} />
        {/*Phối hợp thực thiện - contributor */}
        <Donor title="Phối hợp thực thiện" data={contributorData} />
      </Box>
    </Box>
  );
}

Home.propTypes = {};

export default Home;
