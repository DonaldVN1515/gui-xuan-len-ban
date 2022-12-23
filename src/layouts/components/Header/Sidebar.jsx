import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import React from 'react';

export default function SideBar({ open, onClose, pages }) {
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
          {pages.map((page, index) => (
            <ListItem key={index}>
              <ListItemText primary={page} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
