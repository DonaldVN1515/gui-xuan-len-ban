import { Phone } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import * as React from 'react';
import images from '../../assets/images';
import Image from '../../components/Image';

const pages = ['Home', 'About us', 'Causes', "Donation", 'Blog'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const Header = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#ffff",
    color: '#000',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }))
  return (
    <Header position="fixed"> 
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 2,
              color: 'inherit',
              minWidth: '80px',
              maxWidth: '100px'
            }}
          >
            <Image src={images.btecLogo} alt="BTEC FPT" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>


          {/* RESPONSIVE */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              flexGrow: 1,
              mr: 2,
              color: '#000',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <Image src={images.btecLogo} alt="BTEC FPT" style={{
              width: '100px'
            }} />
          </Typography>

          {/* MENU ON DESKTOP */}
          <Box sx={{
            flexGrow: 1, display: {
              xs: 'none', md: 'flex',
            },
            color: 'inherit',
          }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, px: 3, py: 1.5, color: 'inherit', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* RIGHT */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>

            <Phone sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontSize: 18,
                fontWeight: 600,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              +161 94 32 141
            </Typography>
            <Button variant="outlined" color="error">Donation</Button>
          </Box>
        </Toolbar>
      </Container>
    </Header>
  );
}
export default Header;
