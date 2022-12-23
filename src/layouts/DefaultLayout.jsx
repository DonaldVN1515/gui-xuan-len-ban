import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import style from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { ThemeContext } from '../components/context/ThemeProvider';
// import language
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  const { t } = useTranslation();

  const pages = [
    t('content.home'),
    t('content.about_us'),
    t('content.timeline'),
    t('content.donation'),
    t('content.sponsors'),
    t('content.wishes'),
  ];
  const context = React.useContext(ThemeContext);

  return (
    <Box className={cx(context.theme, 'wrapper')} id="Home">
      <Header pages={pages} />

      <Box sx={{ pt: '100px' }}>{children}</Box>

      <Footer pages={pages} />
    </Box>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
