import { Box, Paper, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../Home.module.scss';
const cx = classNames.bind(styles);
function TimelineItem({
  title,
  desc,
  icon,
  time,
  classname,
  separateRight,
  left,
  right,
}) {
  const MyBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'grid',

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      padding: '0px 0 100px 0',

      '&::after': {
        content: '""',
        width: '5px',
        height: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRight: '3px solid var(--primary)',
      },
    },

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      padding: '0px 0 0 80px',

      '&::after': {
        content: '""',
        width: '5px',
        height: '100%',
        position: 'absolute',
        top: '50%',
        left: '25px',
        transform: 'translateY(-50%)',
        borderRight: '3px solid var(--primary)',
      },
    },
  }));
  const Timer = styled(Paper)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      padding: 20,
      backgroundColor: 'white',
      position: 'absolute',
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
    },
    [theme.breakpoints.down('md')]: {
      padding: 12,
      backgroundColor: 'white',
      position: 'absolute',
      top: '30%',
      left: 0,
      transform: 'translateY(-50%)',
      zIndex: 1,
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    position: 'relative',
  }));
  const classes = cx({
    [classname]: classname,
    separateRight,
  });

  return (
    <MyBox className={classes}>
      {/* Left */}
      <Box
        sx={{
          background: 'var(--primary)',
          color: 'white',
          p: 3,
          width: '80%',
          // borderBottom: '3px dotted #000',
        }}
        data-aos={left}
      >
        <Title variant="h6" component="h6" className={cx('right')}>
          {title}
        </Title>
        <Typography
          variant="p"
          sx={{
            textAlign: 'justify',
            pt: 3,
            display: 'block',
            maxWidth: '80%',
          }}
        >
          {desc}
        </Typography>
      </Box>
      {/* Right */}
      <Box></Box>

      {/* Line middle */}
      <Timer>{time}</Timer>
    </MyBox>
  );
}

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default TimelineItem;
