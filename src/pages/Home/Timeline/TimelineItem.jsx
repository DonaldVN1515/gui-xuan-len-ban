import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Paper, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../Home.module.scss';
const cx = classNames.bind(styles);
function TimelineItem({ title, desc, icon, time, classname, separateRight, left, right}) {
  const MyBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: '0px 0 50px 0',
    '&::after': {
      content: '""',
      width: '5px',
      height: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRight: '3px dashed #000',
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
    <MyBox className={classes} >
      {/* Left */}
      <Box
        sx={{
          pt: 3,
          pb: 5,
          borderBottom: '3px dotted #000',
        }}
        data-aos={left}
      >
        <Title variant="h5" component="h6" className={cx('right')}>
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
      <Box
        sx={{
          pt: 3,
          pb: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        data-aos={right}
      >
        <FontAwesomeIcon icon={icon} className={cx('timeline__icon')} />
      </Box>

      {/* Line middle */}
      <Paper
        sx={{
          p: 2,
          backgroundColor: 'white',
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      >
        {time}
      </Paper>
    </MyBox>
  );
}

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default TimelineItem;
