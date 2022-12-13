import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import TimelineItem from './TimelineItem';
import styles from '../Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const timelineData = [
  {
    title: 'Discover',
    desc: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur labore expedita cumque, dolor reprehenderit nostrum natus. Id tempora laboriosam magnam quas quisquam molestias, reprehenderit voluptates ipsum laudantium doloribus nemo assumenda?',
    icon: faMessage,
    time: '07/01/2022',
  },
  {
    title: 'Discover',
    desc: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur labore expedita cumque, dolor reprehenderit nostrum natus. Id tempora laboriosam magnam quas quisquam molestias, reprehenderit voluptates ipsum laudantium doloribus nemo assumenda?',
    icon: faMessage,
    time: '07/01/2022',
  },
  {
    title: 'Discover',
    desc: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur labore expedita cumque, dolor reprehenderit nostrum natus. Id tempora laboriosam magnam quas quisquam molestias, reprehenderit voluptates ipsum laudantium doloribus nemo assumenda?',
    icon: faMessage,
    time: '07/01/2022',
  },
  {
    title: 'Discover',
    desc: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur labore expedita cumque, dolor reprehenderit nostrum natus. Id tempora laboriosam magnam quas quisquam molestias, reprehenderit voluptates ipsum laudantium doloribus nemo assumenda?',
    icon: faMessage,
    time: '07/01/2022',
  },
  {
    title: 'Discover',
    desc: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur labore expedita cumque, dolor reprehenderit nostrum natus. Id tempora laboriosam magnam quas quisquam molestias, reprehenderit voluptates ipsum laudantium doloribus nemo assumenda?',
    icon: faMessage,
    time: '07/01/2022',
  },
];

function Timeline(props) {
  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      sx={{
        padding: '50px 100px',
      }}
    >
      <Typography
        variant="span"
        sx={{
          textTransform: 'uppercase',
          color: 'orange',
          mb: 3,
          display: 'block',
        }}
      >
        Timeline
      </Typography>

      {/* TIMELINEITEM */}
      {timelineData.map((data, index) => (
        <Box key={index}>
          {index % 2 === 0 ? (
            <TimelineItem
              title={data.title}
              desc={data.desc}
              icon={data.icon}
              time={data.time}
            />
          ) : (
            <TimelineItem
              title={data.title}
              desc={data.desc}
              icon={data.icon}
              time={data.time}
              classname={cx('timeline')}
            />
          )}
        </Box>
      ))}
    </Container>
  );
}

Timeline.propTypes = {};

export default Timeline;
