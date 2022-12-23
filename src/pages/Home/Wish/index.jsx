import React from 'react';
import PropTypes from 'prop-types';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import Image from '../../../components/Image';
import styles from '../Home.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images';

const cx = classNames.bind(styles);

function Wish({ id }) {
  const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Container
      id={id}
      maxWidth="xl"
      // disableGutters={true}
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        padding: '100px 0',
        gap: 5,
      }}
    >
      {/* LEFT */}
      <Box data-aos="fade-left">
        <Typography variant="p">CALL TO ACTION</Typography>
        <Typography variant="h3" component="h4" sx={{ py: 4 }}>
          Lets Create Something Great Together!
        </Typography>

        {/* FORM */}
        <Box component="form">
          <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
            <TextField
              fullWidth
              id="outlined-name"
              label="Full Name"
              value={name}
              onChange={handleChange}
            />
            <TextField id="outlined-name" label="Full Name" fullWidth />
          </Box>

          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            fullWidth
            rows={4}
          />
        </Box>

        {/* BUTTON */}
        <Button type="submit" variant="outlined" sx={{ mt: 4 }}>
          Send
        </Button>
      </Box>
      {/* RIGHT */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          position: 'relative',
        }}
        data-aos="fade-right"
      >
        <Image
          src={images.about}
          alt=""
          className={cx('wish__image')}
          style={{
            height: '100%',
          }}
        />
        <Image
          src=""
          alt=""
          className={cx('wish__image--top')}
          style={{
            height: '100%',
          }}
        />
      </Box>
    </Container>
  );
}

Wish.propTypes = {};

export default Wish;
