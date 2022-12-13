import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';

OrganizationTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

function OrganizationTitle({ title }) {
  const MyTypography = styled(Typography)(({ theme }) => ({
    display: 'inline-block',
    position: 'relative',
    fontWeight: 'bold',
    padding: '30px 0',
    // '&::after': {
    //   content: '""',
    //   position: 'absolute',
    //   top: '50%',
    //   transform: 'translateY(-50%)',
    //   width: '100px',
    //   borderRadius: '1.2rem',
    //   height: '6px',
    //   background:
    //     'linear-gradient(-135deg, rgba(27, 14, 151, 0.6235294118), #3a93d1)',
    //   right: '-7rem',
  
    // },
  }));

  return (
    <MyTypography variant="h5" component="h4">
      {title}
    </MyTypography>
  );
}

export default OrganizationTitle;
