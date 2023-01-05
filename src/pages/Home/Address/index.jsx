import { Box, Container, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import classNames from 'classnames/bind';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../Home.module.scss';
const cx = classNames.bind(styles);

function Address(){
    return(
        <Container>
            {/* left */}
            <Box>
                <ImageList>
                     
                </ImageList>
            </Box>
            {/* right */}
            <Box>

            </Box>

        </Container>
    )
}
