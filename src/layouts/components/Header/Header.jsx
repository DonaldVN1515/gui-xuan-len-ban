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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../../components/context/ThemeProvider';
// import language
import { useTranslation } from 'react-i18next';
import i18n from '../../../components/translation/i18n';

import LanguageMenu from './LanguageMenu';

import * as React from 'react';
import images from '../../../assets/images';
import Image from '../../../components/Image';

// USING FOR SCSS MODULE
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const Header = styled(AppBar)(({ theme }) => ({
    // backgroundColor: '#ffff',
    // color: '#000',
    backgroundColor: 'inherit',
    color: 'inherit',
    // todo: change height off header 80 -> 100
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // todo: change the alpha of box shadows when scrolling
    boxShadow: 'none',
    // display:"none",
  }));
  const MyContainer = styled(Container)(({ theme }) => ({
    // padding: '0 100px',
  }));

  const context = React.useContext(ThemeContext);
  // use language
  const { t } = useTranslation();

  function changeLang(e) {
    // let lang = i18n.language
    // return lang === 'vi' ? i18n.changeLanguage('en') : i18n.changeLanguage('vi')
    let value = e.target.value;

    console.log('value: ', e.target.value);

    switch (value) {
      case 'English':
        i18n.changeLanguage('en');
        break;
      default:
        i18n.changeLanguage('vi');
        break;
    }
  }
  // const pages = [
  //   'Home',
  //   'About us',
  //   'Timeline',
  //   'Donation',
  //   'Wishes',
  //   'Sponsors',
  // ];
  const pages = [
    t('content.home'),
    'About us',
    'Timeline',
    'Donation',
    'Wishes',
    'Sponsors',
  ];

  return (
    <Header position="fixed">
      <MyContainer maxWidth="xl" disableGutters={true}>
        <Toolbar>
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
              maxWidth: '100px',
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
            <Image
              src={images.btecLogo}
              alt="BTEC FPT"
              style={{
                width: '100px',
              }}
            />
          </Typography>

          {/* MENU ON DESKTOP */}
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex',
              },
              color: 'inherit',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 1,
                  px: 3,
                  py: 1.5,
                  margin: 1,
                  color: 'inherit',
                  fontSize: 13,
                  display: 'block',
                  fontWeight: 600,
                  letterSpacing: 1,
                  ':hover': {
                    background: 'var(--primary)',
                    color: '#fff',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* RIGHT */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            {/* <Button onClick={context.toggleTheme}>Dark Mode</Button> */}
            {/* <Button type='submit' onClick={changeLang}>Tiếng việt</Button> */}
            <Box sx={{}}>
              <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
            </Box>
            <Box sx={{margin:'0 20px 0 10px'}}>
              <LanguageMenu onClick={changeLang} />
            </Box>
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontSize: 14,
                fontWeight: 600,
                color: '#3c3b3b',
                textDecoration: 'none',
                marginRight: 2.5,
              }}
            >
              +161 94 32 141
            </Typography> */}
            <Button
              variant="outlined"
              color="error"
              sx={{
                border: 2,
                ':hover': {
                  border: 2,
                  background: 'var(--primary)',
                  color: '#fff',
                },
              }}
            >
              Donation
            </Button>
          </Box>
        </Toolbar>
      </MyContainer>
    </Header>
  );
}
export default Header;
