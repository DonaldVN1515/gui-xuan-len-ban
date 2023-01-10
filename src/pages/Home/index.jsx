import { Box } from '@mui/material';
import React from 'react';
import images from '../../assets/images';
import About from './About';
import Banner from './Banner';
import Donate from './Donate';
import Donor from './Donor';
// import PropTypes from 'prop-types';
import { convertUrl } from '../../hooks/convertUrl';
import Timeline from './Timeline';

import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
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
    pageLink: 'https://www.facebook.com/btecfptdn',
  },
  {
    title: '',
    imageUrl: images.chuaLogo,
    pageLink: 'https://www.facebook.com/ThichChucDat',
  },
];
const contributorData = [
  {
    title: 'bitc',
    imageUrl: images.bitcLogo,
    pageLink: 'https://www.facebook.com/bitc.club',
  },

  {
    title: '',
    imageUrl: images.bclubLogo,
    pageLink: 'https://www.facebook.com/clbbcub',
  },
  {
    title: '',
    imageUrl: images.dragonLogo1,
    pageLink: 'https://www.facebook.com/profile.php?id=100063955156890',
  },
  {
    title: '',
    imageUrl: images.katkunstLogo1,
    pageLink: 'https://www.facebook.com/KatKunstbtec',
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
