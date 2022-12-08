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
    <ImageList gap={40} sx={{ display: 'flex' }}>
      {data.map((item, index) => (
        <ImageListItem
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image src={item.imageUrl} alt={item.title} className={cx('image')} />
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
