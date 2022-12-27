import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import images from '../../../assets/images';
import Image from '../../../components/Image';
// import PropTypes from 'prop-types';

// USING FOR SCSS MODULE
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { convertUrl } from '../../../hooks';

const cx = classNames.bind(styles);

function Footer({ pages }) {
  // const MyGrid = styled(Grid)(({ theme }) => ({
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   flexWrap: 'wrap',
  // }));
  const MyTypography = styled(Typography)(({ theme }) => ({
    marginBottom: '10px',
    opacity: '0.7',
    display: 'block',
    textDecoration: 'none',
    fontSize: '13px',
  }));

  const Wrapper = styled(Box)(({ theme }) => ({
    background: 'rgb(33, 32, 43)',
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',

    justifyContent: 'center',
    padding: '100px 0 40px 0',
    position: 'relative',
  }));
  // const MyBox = styled(Box)(({ theme }) => ({
  //   background: 'rgb(254, 103, 17)',
  //   width: '70%',
  //   padding: '30px 0',
  //   borderRadius: '5px',
  //   position: 'absolute',
  //   bottom: '100%',
  //   transform: 'translateY(50%)',
  //   display: 'none',
  // }));

  return (
    <Wrapper>
      <Container maxWidth="xl">
        {/* <MyBox>
          <MyGrid container>
            <Box
              sx={{
                width: '80%',
              }}
            >
              <Typography
                variant="span"
                component="h2"
                sx={{
                  marginBottom: '15px',
                }}
              >
                The Good Childhood Report
              </Typography>
              <Typography
                variant="span"
                component="p"
                sx={{
                  opacity: '0.8',
                  fontWeight: 10,
                }}
              >
                Our Good Childhood Report 2021 shows that modern life continues
                to erode the happiness
              </Typography>
            </Box>
          </MyGrid>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: 'unset',
                borderRadius: '20px',
                fontSize: '10px',
                padding: '10px 30px',
              }}
            >
              VOLUNTEER
            </Button>
          </Grid>
        </MyBox> */}
        <Box>
          <Box>
            <Grid
              data-aos="fade-up"
              sx={{
                display: { sm: 'grid', md: 'flex' },
                justifyContent: 'space-between',
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(4, 1fr)',
                },
                textAlign: { xs: 'center', md: 'justify' },
                gap: 8,
              }}
            >
              {/* LOGO */}
              <Grid
                data-aos="fade-up"
                data-delay="500"
                sx={{
                  display: { xs: 'block', md: 'block' },
                }}
              >
                <Box
                  sx={{
                    width: {
                      md: '80%',
                    },
                    marginBottom: '10px',
                    display: { xs: 'flex', sm: 'block' },
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={images.btecLogo}
                    alt="logo"
                    className={cx('footer__image')}
                  ></Image>
                </Box>
                <Typography
                  variant="span"
                  component="p"
                  sx={{
                    width: { xs: '100%' },
                    marginBottom: '15px',
                    opacity: '0.7',
                    fontSize: '13px',
                  }}
                >
                  We're givemo, passionate and committed to helping nonprofits
                  learn and grow
                </Typography>
                <Typography
                  variant="span"
                  component="p"
                  sx={{
                    width: { xs: '100%' },
                    opacity: '0.7',
                    fontSize: '13px',
                  }}
                >
                  64 Dhaka center keokradong bandarban CA 71601
                </Typography>
              </Grid>
              {/* PAGES */}
              <Grid
                data-aos="fade-up"
                data-delay="500"
                sx={{
                  paddingTop: '20px',
                }}
              >
                <Typography
                  variant="span"
                  component="p"
                  sx={{
                    color: 'inherit',
                    opacity: '0.9',
                    marginBottom: '15px',
                    fontWeight: 'bold',
                    fontSize: '14px',
                  }}
                >
                  Main Menu
                </Typography>

                {pages.map((page, index) => {
                  let hrefPage = `#${convertUrl(page)}`;

                  return (
                    <MyTypography
                      href={hrefPage}
                      key={index}
                      variant="span"
                      component="a"
                    >
                      {page}
                    </MyTypography>
                  );
                })}
              </Grid>
              {/* Nonprofits */}
              <Grid
                data-aos="fade-up"
                data-delay="500"
                sx={{
                  paddingTop: '20px',
                }}
              >
                <MyTypography
                  variant="span"
                  component="p"
                  sx={{
                    marginBottom: '15px',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    opacity: '0.9',
                  }}
                >
                  NONPROFITS
                </MyTypography>
                <MyTypography variant="span" component="p">
                  Nonprofit Resources
                </MyTypography>
                <MyTypography variant="span" component="p">
                  Donation Online
                </MyTypography>
                <MyTypography variant="span" component="p">
                  Donation's Details
                </MyTypography>
                <MyTypography variant="span" component="p">
                  Volunteering
                </MyTypography>
              </Grid>
              {/* SOCIALS */}
              <Grid
                data-aos="fade-up"
                data-delay="500"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: { md: 'row', xs: 'column' },
                  gap: {
                    xs: 3,
                    md: 3,
                    lg: 5,
                  },
                }}
              >
                <FacebookRoundedIcon
                  sx={{
                    ':hover': {
                      cursor: 'pointer',
                      color: '#8D9EFF',
                    },
                  }}
                ></FacebookRoundedIcon>
                <InstagramIcon
                  sx={{
                    ':hover': {
                      cursor: 'pointer',
                      color: 'pink',
                    },
                  }}
                ></InstagramIcon>
                <TwitterIcon
                  sx={{
                    ':hover': {
                      cursor: 'pointer',
                      color: '#2146C7',
                    },
                  }}
                ></TwitterIcon>
              </Grid>
            </Grid>
          </Box>
          <Box
            data-aos="fade-up"
            data-delay="500"
            sx={{
              height: '1px',
              margin: '40px 0',
              opacity: '0.1',
            }}
          ></Box>
          <Box>
            <Typography
              variant="p"
              component="p"
              sx={{
                fontSize: '12px',
                opacity: '0.6',
                textAlign: 'center',
              }}
            >
              Copyright C2022 by BITC. All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
}

Footer.propTypes = {};

export default Footer;
