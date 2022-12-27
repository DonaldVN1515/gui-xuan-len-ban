import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/material';

const languages = ['Tiếng Việt', 'English'];

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
      <Box
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{cursor:'pointer', color:'#3c3b3b'}}
      >
        <i className="fa-solid fa-earth-americas"></i>
      </Box>
      <Menu
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
            sx={{ display: 'flex', px: 2 }}
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
