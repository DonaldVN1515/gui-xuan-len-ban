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
                sx={{
                  bottom:'30%'
                }}
              >
                Gùi Xuân 
            </Typography>
            <Typography
                variant="h1"
                component="h1"
                className={cx('banner-title')}
                sx={{bottom:'7%',
                }}
              >
                lên bản 
            </Typography>
              <img src={images.flower} alt="" className={cx('flower-1')}/>
              <img src={images.flower} alt="" className={cx('flower-2')}/>
              <img src={images.flower} alt="" className={cx('flower-3')}/>
        </Box>
    )
}

export default Banner;