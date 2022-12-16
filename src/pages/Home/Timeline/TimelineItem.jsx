import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Paper, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import styles from '../Home.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function TimelineItem({ title, desc, icon, time, classname }) {
  const MyBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    display:'none',

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

  return (
    <MyBox className={classname}>
    
      {/* Left */}
      <Box
        sx={{
          pb: 3,
          borderBottom: '3px dotted #000',
        }}
      >
        <Typography variant="h4" component="h5">
          {title}
        </Typography>
        <Typography
          variant="p"
          sx={{
            textAlign: 'justify',
            pt: 2,
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FontAwesomeIcon icon={icon} className={cx('timeline__icon')} />
      </Box>

      {/* Line middle */}
      <Paper
        sx={{
          p: 2,
          backgroundColor: 'white',
          position: 'absolute',
          top: '50%',
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
