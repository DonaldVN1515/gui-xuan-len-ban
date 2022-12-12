import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import { useState } from 'react';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner(){
    return (
        <Box className={cx('wrapper')}>
            <Typography
                variant="h1"
                component="h1"
                className={cx('banner-title')}
              >
                Gùi Xuân lên bản 
              </Typography>
              <img src={images.flower} alt="" className={cx('flower-1')}/>
              <img src={images.flower} alt="" className={cx('flower-2')}/>
        </Box>
    )
}

export default Banner;