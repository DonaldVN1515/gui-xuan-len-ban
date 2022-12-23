import { Box, Container, Paper, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import Image from '../../../components/Image';
import styles from '../Home.module.scss';
import Countup from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

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
  }));
  const ImageTop = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '-160px',
    right: '140px',
    border: '8px solid white',
  }));

  const DonateMoney = styled(Paper)(({ theme }) => ({
    color: 'inherit',
    position: 'absolute',
    bottom: '-60px',
    right: '120px',
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
    padding: '0 24px',
    position: 'absolute',
    bottom: '-170px',
    left: 0,
  }));

  const [counterOn, setCounterOn] = useState(false)

  return (
    <Wrapper>
      <Container
        id={id}
        maxWidth="xl"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
          padding: '150px 100px 70px 100px',
          position: 'relative',
          gap: { xs: 15, md: 0 },
        }}
      >
        {/* LEFT */}
        <Box
          sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}

        >
          <Image src="" alt="" className={cx('donate__image')} data-aos="zoom-in" />

          <ImageTop data-aos="zoom-in">
            <Image src="" alt="" className={cx('image__item')} />
          </ImageTop>

          {/* DonateMoney */}
          <DonateMoney data-aos="fade-up">
            <Typography
              variant="h5"
              component="h6"
              sx={{ fontSize: 40, mb: 1 }}
            >
              {counterOn && <Countup start={0} end={70} duration={2}></Countup>}
              tr
            </Typography>
            <Typography variant="p">
              Volunteers helping carry out our global mission
            </Typography>
          </DonateMoney>
        </Box>

        {/* RIGHT */}
        <Box data-aos="fade-left">
          <Typography variant="h4">How we're making a difference</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur distinctio quaerat neque maxime eos libero repellendus
            voluptate commodi temporibus quis, eius culpa illum sequi, repellat
            dolor quod cupiditate accusamus. Ratione.
          </Typography>
          <Typography variant="p" sx={{ display: 'block' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur distinctio quaerat neque maxime eos libero repellendus
            voluptate commodi temporibus quis, eius culpa illum sequi, repellat
            dolor quod cupiditate accusamus. Ratione.
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
        <Bottom data-aos="fade-up">
          {donateData.map((data, index) => (
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
              <Paper
                key={index}
                sx={{
                  p: { xs: 1, md: 4 },
                  width: 'fit-content',
                }}
              >
                <Box>
                  <Typography variant="h4" component="span">
                    {/* <Countup start={0} end={data.quantity} duration={2} delay={2}></Countup> */}
                    {counterOn && <Countup start={0} end={data.quantity} duration={2}></Countup>}
                    k
                  </Typography>
                  <Typography variant="subtitle1" component="span">
                    +
                  </Typography>
                </Box>
                <Typography
                  variant="p"
                  sx={{ textTransform: 'uppercase', mt: 1, display: 'block' }}
                >
                  {data.subtitle}
                </Typography>
              </Paper>
            </ScrollTrigger>

          ))}
        </Bottom>
      </Container>
    </Wrapper>
  );
}

Donate.propTypes = {};

export default Donate;
