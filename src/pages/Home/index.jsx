import React from 'react';
import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home(props) {
  return <div className={cx('wrapper')}>Home</div>;
}

Home.propTypes = {};

export default Home;


