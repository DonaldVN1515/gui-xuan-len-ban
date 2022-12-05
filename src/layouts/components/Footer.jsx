import { Container, Box, Typography, Grid, Button } from '@mui/material';
import React from 'react';
import images from '../../assets/images'
import Image from '../../components/Image';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import PropTypes from 'prop-types';

function Footer() {
  return (
    <Container sx={{
      maxWidth: { xs: '100%' },
      background: 'rgb(33, 32, 43)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '100px 0 40px 0',
      position: 'relative',
    }}>
      <Box sx={{
        background: 'rgb(254, 103, 17)',
        width: '70%',
        padding: '30px 0',
        borderRadius: '5px',
        position: 'absolute',
        bottom: '100%',
        transform: 'translateY(50%)'
      }}>
        <Grid container sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap'
        }}>
          <Grid md={8} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}>
            <Box sx={{
              width: '80%'
            }}>
              <Typography variant='span' component="h2" sx={{
                color: 'white',
                marginBottom: '15px',
              }}>The Good Childhood Report</Typography>
              <Typography variant='span' component="p" sx={{
                color: 'white',
                opacity: '0.8',
                fontWeight: 10
              }}>Our Good Childhood Report 2021 shows that modern life continues to erode the happiness</Typography>
            </Box>

          </Grid>
          <Grid md={4} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Button variant="outlined" sx={{
              color: 'white',
              borderColor: 'unset',
              borderRadius: '20px',
              fontSize: '10px',
              padding: '10px 30px'
            }}>
              VOLUNTEER
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{
        width: '70%',
        marginTop: {
          xs: '80px',
          sm: '30px',
          md: '0px'
        }
      }}>
        <Box>
          <Grid container sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <Grid md={3} xs={12} sx={{
              display: { xs: 'flex', md: 'block', },
              justifyContent: { xs: 'center' },
              alignItems: { xs: 'center' },
              flexWrap: { xs: 'wrap' }
            }} >
              <Box sx={{
                width: {
                  md: '80%',
                  xs: '40%'
                },
                marginBottom: '10px'
              }}>
                <Image src={images.btecLogo}></Image>
              </Box>
              <Typography variant='span' component='p' sx={{
                textAlign: { xs: 'center', md: 'unset' },
                width: { xs: '100%' },
                color: 'white',
                marginBottom: '15px',
                opacity: '0.7'
              }}>We're givemo, passionate and committed to helping nonprofits learn and grow</Typography>
              <Typography variant='span' component='p' sx={{
                textAlign: { xs: 'center', md: 'unset' },
                width: { xs: '100%' },
                color: 'white',
                opacity: '0.7'
              }}>64 Dhaka center keokradong bandarban CA 71601</Typography>
            </Grid>

            <Grid md={2} xs={12} sm={6} sx={{
              paddingTop: '20px',
              textAlign: { xs: 'center', md: 'unset' }
            }}>
              <Typography variant='span' component='p' sx={{
                color: 'white',
                marginBottom: '15px',
                fontWeight: 'bold',
              }}>Main Menu</Typography>
              <Typography href='' variant='span' component='a' sx={{
                color: 'white',
                marginBottom: '10px',
                opacity: '0.7',
                display: 'block',
                textDecoration: 'none'
              }}>Home Page</Typography>
              <Typography href='' variant='span' component='a' sx={{
                color: 'white',
                marginBottom: '10px',
                opacity: '0.7',
                display: 'block',
                textDecoration: 'none'
              }}>Blog & News</Typography>
              <Typography href='' variant='span' component='a' sx={{
                color: 'white',
                marginBottom: '10px',
                opacity: '0.7',
                display: 'block',
                textDecoration: 'none'
              }}>Abouts Us</Typography>
              <Typography href='' variant='span' component='a' sx={{
                color: 'white',
                marginBottom: '10px',
                opacity: '0.7',
                display: 'block',
                textDecoration: 'none'
              }}>Contact Us</Typography>
              <Typography href='' variant='span' component='a' sx={{
                color: 'white',
                marginBottom: '10px',
                opacity: '0.7',
                display: 'block',
                textDecoration: 'none'
              }}>Causes</Typography>
            </Grid>

            <Grid md={3} xs={12} sm={6} sx={{
              paddingTop: '20px',
              textAlign: { xs: 'center', md: 'unset' }
            }}>
              <Typography variant='span' component='p' sx={{
                color: 'white',
                marginBottom: '15px',
                fontWeight: 'bold'
              }}>NONPROFITS</Typography>
              <Typography variant='span' component='p' sx={{
                color: 'white',
                marginBottom: '10px',
                opacity: '0.7'
              }}>Nonprofit Resources</Typography>
              <Typography variant='span' component='p' sx={{
                color: 'white',
                marginBottom: '10px',
                opacity: '0.7'
              }}>Donation Online</Typography>
              <Typography variant='span' component='p' sx={{
                color: 'white',
                marginBottom: '10px',
                opacity: '0.7'
              }}>Donation's Details</Typography>
              <Typography variant='span' component='p' sx={{
                color: 'white',
                marginBottom: '10px',
                opacity: '0.7'
              }}>Volunteering</Typography>
            </Grid>

            <Grid md={2} xs={12} sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}>
              <FacebookRoundedIcon sx={{ color: 'white' }}></FacebookRoundedIcon>
              <InstagramIcon sx={{ color: 'white' }}></InstagramIcon>
              <TwitterIcon sx={{ color: 'white' }}></TwitterIcon>
            </Grid>
          </Grid>


        </Box>

        <Box sx={{
          height: '1px',
          background: 'white',
          margin: '40px 0',
          opacity: '0.1'
        }}>
        </Box>

        <Box>
          <Typography variant='p' component='p' sx={{
            color: 'white',
            textAlign: 'center',
            fontSize: '12px',
            opacity: '0.6'
          }}>Copyright C2021 by name. All Rights Reserved.

          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

Footer.propTypes = {};

export default Footer;
