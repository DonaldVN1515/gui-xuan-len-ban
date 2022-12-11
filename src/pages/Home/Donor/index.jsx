import PropTypes from 'prop-types';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import DonorList from './DonorList';

function Donor({ title, data }) {
  const MyTypography = styled(Typography)(({ theme }) => ({
    display: 'inline-block',
    position: 'relative',
    fontWeight: 'bold',
    padding: '10px 0',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '100px',
      borderRadius: '1.2rem',
      height: '6px',
      background:
        'linear-gradient(-135deg, rgba(27, 14, 151, 0.6235294118), #3a93d1)',
      right: '-7rem',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '100px',
      borderRadius: '1.2rem',
      height: '6px',
      background:
        'linear-gradient(-135deg, rgba(27, 14, 151, 0.6235294118), #3a93d1)',
      left: '-7rem',
    },
  }));

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: '0 100px',
        width: '50%',
      }}
      disableGutters={true}
    >
      {/* title */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 5,
        }}
      >
        <MyTypography variant="h5" component="h4">
          {title}
        </MyTypography>

        {/* Donor's Logo */}
        <DonorList data={data} />
      </Box>
    </Container>
  );
}

Donor.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default Donor;
