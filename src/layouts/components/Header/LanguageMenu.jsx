import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import classNames from 'classnames/bind';
import * as React from 'react';
import styles from './Header.module.scss';
import { IconButton } from '@mui/material';

const languages = ['Tiếng Việt', 'English'];
const cx = classNames.bind(styles);
export default function Language({ onClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{cursor:'pointer', color:'#3c3b3b'}}
      >
        Language
      </Button>
      <Menu
        sx={{
          mt: 2,
        }}
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {languages.map((language, index) => (
          <Button
            sx={{ display: 'flex', px: 2, color: 'inherit' }}
            fullWidth
            value={language}
            type="submit"
            key={index}
            onClick={onClick}
            onClose={handleClose}
          >
            {language}
          </Button>
        ))}
      </Menu>
    </div>
  );
}
