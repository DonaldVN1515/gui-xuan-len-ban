import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Typography } from '@mui/material';
import Image from '../../../components/Image';
import classNames from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = classNames.bind(styles);
function OrganizationItem({ imageUrl, title, desc }) {
  return (
    <Box sx={{ display: { lg: 'flex' } }}>
      <Image src={imageUrl} alt={title} className={cx('organizationItem__image')} />
      <Box
        sx={{
          display: { lg: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          pl: 5,
        }}
      >
        <Typography variant="h5" component="h6">
          {title}
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{ textAlign: 'justify', py: 1 }}
        >
          {desc}
        </Typography>

        <Button href="/" variant="contained" sx={{ maxWidth: 200 }}>
          Truy cập
        </Button>
      </Box>
    </Box>
  );
}

OrganizationItem.propTypes = {};

export default OrganizationItem;
