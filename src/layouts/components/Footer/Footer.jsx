import { Box, Typography, Grid, Button, styled } from '@mui/material';
import React from 'react';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import PropTypes from 'prop-types';

// USING FOR SCSS MODULE
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  const MyGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  }));
  const MyTypography = styled(Typography)(({ theme }) => ({
    color: 'white',
    marginBottom: '10px',
    opacity: '0.7',
    display: 'block',
    textDecoration: 'none',
    fontSize: '13px',
  }));

  const MyContainer = styled(Grid)(({ theme }) => ({
    maxWidth: { xs: '100%' },
    background: 'rgb(33, 32, 43)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '100px 0 40px 0',
    position: 'relative',
  }));

  const MyBox = styled(Box)(({ theme }) => ({
    background: 'rgb(254, 103, 17)',
    width: '70%',
    padding: '30px 0',
    borderRadius: '5px',
    position: 'absolute',
    bottom: '100%',
    transform: 'translateY(50%)',
    display: 'none',
  }));
  return (
    <MyContainer>
      <MyBox>
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
                color: 'white',
                marginBottom: '15px',
              }}
            >
              The Good Childhood Report
            </Typography>
            <Typography
              variant="span"
              component="p"
              sx={{
                color: 'white',
                opacity: '0.8',
                fontWeight: 10,
              }}
            >
              Our Good Childhood Report 2021 shows that modern life continues to
              erode the happiness
            </Typography>
          </Box>
        </MyGrid>
        <Grid
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'unset',
              borderRadius: '20px',
              fontSize: '10px',
              padding: '10px 30px',
            }}
          >
            VOLUNTEER
          </Button>
        </Grid>
      </MyBox>
      <Box
        sx={{
          width: '70%',
          marginTop: {
            xs: '80px',
            sm: '30px',
            md: '0px',
          },
        }}
      >
        <Box>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Grid
              sx={{
                display: { xs: 'flex', md: 'block' },
                justifyContent: { xs: 'center' },
                alignItems: { xs: 'center' },
                flexWrap: { xs: 'wrap' },
                marginRight: '100px',
              }}
            >
              <Box
                sx={{
                  width: {
                    md: '80%',
                    xs: '40%',
                  },
                  marginBottom: '10px',
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
                  textAlign: { xs: 'center', md: 'unset' },
                  width: { xs: '100%' },
                  color: 'white',
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
                  textAlign: { xs: 'center', md: 'unset' },
                  width: { xs: '100%' },
                  color: 'white',
                  opacity: '0.7',
                  fontSize: '13px',
                }}
              >
                64 Dhaka center keokradong bandarban CA 71601
              </Typography>
            </Grid>

            <Grid
              sx={{
                paddingTop: '20px',
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Typography
                variant="span"
                component="p"
                sx={{
                  color: 'white',
                  opacity: '0.9',
                  marginBottom: '15px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                Main Menu
              </Typography>
              <MyTypography href="" variant="span" component="a">
                Home Page
              </MyTypography>
              <MyTypography href="" variant="span" component="a">
                Blog & News
              </MyTypography>
              <MyTypography href="" variant="span" component="a">
                Abouts Us
              </MyTypography>
              <MyTypography href="" variant="span" component="a">
                Contact Us
              </MyTypography>
              <MyTypography href="" variant="span" component="a">
                Causes
              </MyTypography>
            </Grid>

            <Grid
              sx={{
                paddingTop: '20px',
                textAlign: { xs: 'center', md: 'unset' },
                maxWidth: '20% !important',
              }}
            >
              <MyTypography
                variant="span"
                component="p"
                sx={{
                  color: 'white',
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

            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <FacebookRoundedIcon
                sx={{
                  color: 'white',
                  ':hover': {
                    cursor: 'pointer',
                    color: '#8D9EFF',
                  },
                }}
              ></FacebookRoundedIcon>
              <InstagramIcon
                sx={{
                  color: 'white',
                  ':hover': {
                    cursor: 'pointer',
                    color: 'pink',
                  },
                }}
              ></InstagramIcon>
              <TwitterIcon
                sx={{
                  color: 'white',
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
          sx={{
            height: '1px',
            background: 'white',
            margin: '40px 0',
            opacity: '0.1',
          }}
        ></Box>

        <Box>
          <Typography
            variant="p"
            component="p"
            sx={{
              color: 'white',
              textAlign: 'center',
              fontSize: '12px',
              opacity: '0.6',
            }}
          >
            Copyright C2021 by name. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </MyContainer>
  );
}

Footer.propTypes = {};

export default Footer;
