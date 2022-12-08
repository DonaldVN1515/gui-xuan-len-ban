import React from 'react';
// import PropTypes from 'prop-types';
import {
  Container,
  Typography,
  Box,
  Button,
  styled,
  Paper,
} from '@mui/material';
import Image from '../../../components/Image';

import classNames from 'classnames/bind';

import styles from '../Home.module.scss';
const cx = classNames.bind(styles);
function About(props) {
  const MyBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }));

  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        padding: '50px 100px',
      }}
    >
      {/* LEFT */}
      <MyBox>
        <Typography
          variant="span"
          sx={{ textTransform: 'uppercase', color: 'orange' }}
        >
          Success story
        </Typography>
        <Typography variant="h3" component="h5" sx={{ py: 3 }}>
          We help fellow nonprofits access the funding, tools, training
        </Typography>
        <Typography variant="p" sx={{ textAlign: 'justify', lineHeight: 2 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          labore expedita cumque, dolor reprehenderit nostrum natus. Id tempora
          laboriosam magnam quas quisquam molestias, reprehenderit voluptates
          ipsum laudantium doloribus nemo assumenda?
        </Typography>

        <Button sx={{ maxWidth: '300px', mt: 3 }} href="/" variant="outlined">
          Our Story
        </Button>
      </MyBox>

      {/* RIGHT */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          position: 'relative',
        }}
      >
        <Image src="" alt="" className={cx('about__image')} />

        {/* QUOTES */}
        <Paper
          sx={{
            position: 'absolute',
            p: 3,
            maxWidth: '300px',
            left: '160px',
            bottom: '0px',
          }}
        >
          <Typography variant="h6">Mrs. Duyen</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

About.propTypes = {};

export default About;
