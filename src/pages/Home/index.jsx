import { Box } from '@mui/material';
import React from 'react';
import images from '../../assets/images';
import About from './About';
import Banner from './Banner';
import Donor from './Donor';
import Donate from './Donate';
// import PropTypes from 'prop-types';
import Timeline from './Timeline';
import { convertUrl } from '../../hooks/convertUrl';

import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
// import Wish from './Wish';
const cx = classNames.bind(styles);
// DONOR, Organization, contributor data
// const donorData = [
//   {
//     title: 'title',
//     imageUrl: images.noImage,
//   },
//   {
//     title: 'title',
//     imageUrl: images.noImage,
//   },
//   {
//     title: 'title',
//     imageUrl: images.noImage,
//   },
// ];
const organizationData = [
  {
    title: '',
    imageUrl: images.btecLogo,
  },
  {
    title: '',
    imageUrl: images.chuaLogo,
  },
];
const contributorData = [
  {
    title: '',
    imageUrl: images.bitcLogo,
  },
  {
    title: '',
    imageUrl: images.bclubLogo,
  },
  {
    title: '',
    imageUrl: images.dragonLogo,
  },
  {
    title: '',
    imageUrl: images.katkunstLogo,
  },
];

function Home(props) {
  const { t } = useTranslation();

  let hrefAbout = `${convertUrl(t('content.about_us'))}`;
  let hrefTimeline = `${convertUrl(t('content.timeline'))}`;
  let hrefDonation = `${convertUrl(t('content.donation'))}`;
  let hrefSponsors = `${convertUrl(t('content.sponsors'))}`;
  // let hrefWishes = `${convertUrl(t('content.wishes'))}`;
  return (
    <Box className={cx('wrapper')}>
      {/* Banner */}
      <Banner />
      {/* About */}
      <About id={hrefAbout} />

      {/* Timeline */}
      <Timeline id={hrefTimeline} />

      {/* Donate */}
      <Donate id={hrefDonation} />

      <Box id={hrefSponsors} sx={{ pt: '100px' }}>
        {/* Nha Tai Tro - Donor */}
        {/* <Donor title="Nhà tài trợ" data={donorData} className={cx('donor')}/> */}
        {/* Don Vi To Chuc - Organization */}
        <Donor title="Đơn vị tổ chức" data={organizationData} />
        {/*Phối hợp thực thiện - contributor */}
        <Donor title="Phối hợp thực thiện" data={contributorData} />
      </Box>

      {/* WISH */}
      {/* <Wish id={hrefWishes} /> */}
    </Box>
  );
}

Home.propTypes = {};

export default Home;
