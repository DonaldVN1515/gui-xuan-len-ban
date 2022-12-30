import { Box, Container, Paper, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import Image from '../../../components/Image';
import styles from '../Home.module.scss';
import Countup from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const cx = classNames.bind(styles);

function Donate({ id }) {
  const donateData = [
    {
      quantity: 15,
      subtitle: 'INREDIBLE VOLUNTEERS',
    },
    {
      quantity: 15,
      subtitle: 'INREDIBLE VOLUNTEERS',
    },
    {
      quantity: 15,
      subtitle: 'INREDIBLE VOLUNTEERS',
    },
  ];

  const Wrapper = styled(Box)(({ theme }) => ({
    color: 'white',
    background: 'linear-gradient(#E58C8A,#EEC0C6)',
    padding: '50px 0 100px 0',
    display:'none',

    [theme.breakpoints.up('md')]: {
      padding: '50px 0 100px 0',
    },
    [theme.breakpoints.down('md')]: {
      padding: '50px 0 0 0',
    },
  }));
  const ImageTop = styled(Box)(({ theme }) => ({
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      top: '-160px',
      right: '140px',
    },
    [theme.breakpoints.down('md')]: {
      top: '-260px',
      right: '0',
    },
  }));

  const DonateMoney = styled(Paper)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      right: '120px',
      bottom: '-60px',
    },
    [theme.breakpoints.down('md')]: {
      right: '20px',
      bottom: '-120px',
    },
    color: 'inherit',
    position: 'absolute',
    padding: '20px 0px 30px 40px',
    maxWidth: '300px',
    backgroundColor: 'orange  ',
    borderRadius: 'unset',
    '&::before': {
      content: '""',
      left: 0,
      top: '-14px',
      position: 'absolute',
      borderBottom: '15px solid orange',
      borderLeft: '300px solid transparent',
    },
    '&::after': {
      content: '""',
      right: '-25px',
      bottom: '-1px',
      position: 'absolute',
      borderBottom: '175px solid orange',
      borderRight: '25px solid transparent',
    },
  }));

  const Bottom = styled(Box)(({ theme }) => ({
    width: '100%',
    gap: 5,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,

    [theme.breakpoints.up('md')]: {
      bottom: '-170px',
    },
    [theme.breakpoints.down('md')]: {
      bottom: '-30px',
    },
  }));

  const [counterOn, setCounterOn] = useState(false);

  return (
    <Wrapper>
      <Container
        id={id}
        maxWidth="xl"
        sx={{
          paddingTop: '150px',
          display:'none'
        }}
      >
        <Box
          sx={{
            padding: { xs: '250px 0 70px 0', md: '150px 0 70px 0' },
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
            position: 'relative',
            gap: { xs: 20, md: 0 },
          }}
        >
          {/* LEFT */}
          <Box
            sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}
          >
            <Image
              src=""
              alt=""
              className={cx('donate__image')}
              data-aos="zoom-in"
            />
            <ImageTop data-aos="zoom-in">
              <Image src="" alt="" className={cx('image__item')} />
            </ImageTop>
            {/* DonateMoney */}
            <DonateMoney data-aos="fade-up">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                // onExit={() => setCounterOn(false)}
              >
                <Typography
                  variant="h5"
                  component="h6"
                  sx={{ fontSize: 40, mb: 1 }}
                >
                  {(counterOn && (
                    <Countup start={0} end={70} duration={2}></Countup>
                  )) ||
                    70}
                  tr
                </Typography>
              </ScrollTrigger>
              <Typography variant="p">
                Volunteers helping carry out our global mission
              </Typography>
            </DonateMoney>
          </Box>
          {/* RIGHT */}
          <Box data-aos="fade-up">
            <Typography variant="h4">How we're making a difference</Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur distinctio quaerat neque maxime eos libero repellendus
              voluptate commodi temporibus quis, eius culpa illum sequi,
              repellat dolor quod cupiditate accusamus. Ratione.
            </Typography>
            <Typography variant="p" sx={{ display: 'block' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur distinctio quaerat neque maxime eos libero repellendus
              voluptate commodi temporibus quis, eius culpa illum sequi,
              repellat dolor quod cupiditate accusamus. Ratione.
            </Typography>
            <Box>
              <button className={cx('learn-more')}>
                <span className={cx('circle')} aria-hidden="true">
                  <span className={cx('icon')}>
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </span>
                <span className={cx('button-text')}>Learn More</span>
              </button>
            </Box>
          </Box>
          {/* BOTTOM */}
          <Bottom data-aos="fade-up" data-delay="300">
            {donateData.map((data, index) => (
              <Paper
                key={index}
                sx={{
                  p: { xs: 2, md: 4 },
                  width: 'fit-content',
                }}
              >
                <Box>
                  <Typography variant="h4" component="span">
                    {/* <Countup start={0} end={data.quantity} duration={2} delay={2} />*/}
                    {(counterOn && (
                      <Countup start={0} end={data.quantity} duration={2} />
                    )) ||
                      data.quantity}
                    k
                  </Typography>
                  <Typography variant="subtitle1" component="span">
                    +
                  </Typography>
                </Box>
                <Typography
                  variant="p"
                  sx={{
                    textTransform: 'uppercase',
                    mt: 1,
                    display: { xs: 'none', md: 'block' },
                  }}
                >
                  {data.subtitle}
                </Typography>
              </Paper>
            ))}
          </Bottom>
        </Box>
      </Container>
    </Wrapper>
  );
}

Donate.propTypes = {};

export default Donate;