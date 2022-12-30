import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types';
import * as React from 'react';

import Image from '../../../components/Image';
import classNames from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = classNames.bind(styles);

DonorList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default function DonorList({ data }) {
  return (
    <ImageList
      gap={40}
      sx={{
        gap: 10,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {data.map((item, index) => (
        <ImageListItem
          key={index}
          sx={
            {
              // display: 'flex',
              // flexWrap: 'wrap',
              // flexDirection: 'column',
              // justifyContent: 'center',
              // alignItems: 'center',
            }
          }
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            className={cx('image')}
            data-aos="fade-up"
            data-delay="500"
          />
          <Typography
            variant="h6"
            component="h6"
            sx={{ textAlign: 'center', py: 1 }}
          >
            {item.title}
          </Typography>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
