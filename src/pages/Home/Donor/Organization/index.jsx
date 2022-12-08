import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Typography, Container } from '@mui/material';
import OrganizationTitle from './OrganizationTitle';
import OrganizationItem from './OrganizationItem';
import images from '../../../assets/images';

function Organization(props) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: '0 100px',
      }}
      disableGutters={true}
    >
      {/* Đơn vị tổ chức */}
      <Box>
        <OrganizationTitle title="Đơn vị tổ chức" />

        <OrganizationItem
          imageUrl={images.btecLogo}
          title="Trường Cao đẳng Quốc tế BTEC FPT"
          desc=" body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
    blanditiis tenetur unde suscipit, quam beatae rerum inventore
    consectetur, neque doloribus, cupiditate numquam dignissimos laborum
    fugiat deleniti? Eum quasi quidem quibusdam."
        />
      </Box>

      {/* Phối hợp thực hiện */}
      <Box>
        <OrganizationTitle title="Phối hợp thực hiện" />
        <Box
          sx={{
            display: 'grid',
            gap: 5,
          }}
        >
          <OrganizationItem
            imageUrl={images.bitcLogo}
            title="Trường Cao đẳng Quốc tế BTEC FPT"
            desc=" body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam."
          />
          <OrganizationItem
            imageUrl={images.btecLogo}
            title="Trường Cao đẳng Quốc tế BTEC FPT"
            desc=" body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam."
          />
        </Box>
      </Box>
    </Container>
  );
}

Organization.propTypes = {};

export default Organization;
