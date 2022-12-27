import { Box, Button, Drawer, List } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Header.module.scss';
import { convertUrl } from '../../../hooks';

const cx = classNames.bind(styles);

export default function SideBar({ open, onClose, pages, hash }) {
  return (
    <Drawer open={open} anchor="left" onClose={onClose}>
      <Box
        sx={{
          width: 250,
          height: '100%',
        }}
        component="div"
      >
        <List>
          {pages.map((page, index) => {
            let hrefPage = `#${convertUrl(page)}`;
            return (
              <Button sx={{
                display: 'block',
                fontWeight: 'bold'
              }}
                href={hrefPage}
                // component={NavLink}
                className={cx(hash === hrefPage ? 'active' : '')}
                key={index}
                onClick={onClose}
              >
                {page}
              </Button>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}
