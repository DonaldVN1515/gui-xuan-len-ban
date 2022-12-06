// import PropTypes from 'prop-types'
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import images from '../../../assets/images';
import DonorList from './DonorList';

// Title, ImageUrl Cua Nha Tai Tro
const DonorsData = [
  {
    title: 'title',
    imageUrl: images.noImage,
  },
  {
    title: 'title',
    imageUrl: images.noImage,
  },
  {
    title: 'title',
    imageUrl: images.noImage,
  },
  // {
  //   title: 'title',
  //   imageUrl: images.noImage,
  // },
  // {
  //   title: 'title',
  //   imageUrl: images.noImage,
  // },
];

function Donor(props) {
  const MyTypography = styled(Typography)(({ theme }) => ({
    display: 'inline-block',
    position: 'relative',
    fontWeight: 'bold',
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
      {/* Nhà tài trợ */}
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <MyTypography variant="h5" component="h4">
          Nhà tài trợ
        </MyTypography>

        {/* Donor's Logo */}
        <DonorList data={DonorsData} />
      </Box>
    </Container>
  );
}

Donor.propTypes = {};

export default Donor;
