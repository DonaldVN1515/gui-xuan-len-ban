import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import {
  faChartSimple,
  faFlagCheckered,
  faHandHoldingHeart,
  faHandshakeAngle,
  faListCheck,
  faTruckFast
} from '@fortawesome/free-solid-svg-icons';
import { Box, Container, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../Home.module.scss';
import TimelineItem from './TimelineItem';
const cx = classNames.bind(styles);

function Timeline({ id }) {
  const { t } = useTranslation();

  const timelineData = [
    {
      title: t('content.timeline_item.title1'),
      desc: t('content.timeline_item.desc1'),
      icon: faFlagCheckered,
      time: '2/12',
    },
    {
      title: t('content.timeline_item.title2'),
      desc: t('content.timeline_item.desc2'),
      icon: faHandHoldingHeart,
      time: '15/12',
    },
    {
      title: t('content.timeline_item.title3'),
      desc: t('content.timeline_item.desc3'),
      icon: faHandshakeAngle,
      time: '20/12',
    },
    {
      title: t('content.timeline_item.title4'),
      desc: t('content.timeline_item.desc4'),
      icon: faListCheck,
      time: '26/12',
    },
    {
      title: t('content.timeline_item.title5'),
      desc: t('content.timeline_item.desc5'),
      icon: faChartSimple,
      time: '03/01',
    },
    {
      title: t('content.timeline_item.title6'),
      desc: t('content.timeline_item.desc6'),
      icon: faCalendarCheck,
      time: '05/01',
    },
    {
      title: t('content.timeline_item.title7'),
      desc: t('content.timeline_item.desc7'),
      icon: faTruckFast,
      time: '07 - 08/01',
    },
  ];
  // const Line = styled(Box)(({ theme }) => ({
  //   flexGrow: 1,
  // }));
  // const Curvy = styled(Box)(({ theme }) => ({
  //   height: 300,
  //   flexGrow: 1,
  // }));

  return (
    <Container
      id={id}
      maxWidth="xl"
      // disableGutters={true}
      sx={{
        padding: '150px 0',
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
      {/* <Box>
        <Box sx={{ display: 'flex', maxWidth: '80%' }}>
          <Line
            sx={{
              borderTop: '10px solid aqua',
              borderTopRightRadius: 4,
            }}
          >
            Ngang
          </Line>
          <Curvy
            sx={{
              borderBottom: '10px solid aqua',
              borderTop: '10px solid aqua',
              // borderRight: '10px solid aqua',
              borderRadius: '0% 100% 100% 0% / 10% 50% 50% 10%',
            }}
          >
            Cong phai
          </Curvy>
        </Box>
        <Box
          sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
        >
          <Box sx={{ display: 'flex', width: '80%', marginTop: '-14px' }}>
            <Curvy
              sx={{
                borderBottom: '10px solid aqua',
                borderTop: '10px solid aqua',
                // borderRight: '10px solid aqua',
                borderRadius: '100% 0% 0% 100% / 49% 10% 10% 50%',
              }}
            >
              Cong trai
            </Curvy>
            <Line
              sx={{
                borderBottomLeftRadius: 4,

                borderBottom: '10px solid aqua',
              }}
            >
              Ngang
            </Line>
          </Box>
        </Box>
      </Box> */}
      {/* TIMELINEITEM */}
      {timelineData.map((data, index) => (
        <Box key={index}>
          {index % 2 === 0 ? (
            <TimelineItem
              title={data.title}
              desc={data.desc}
              icon={data.icon}
              time={data.time}
              left="fade-right"
              right="fade-left"
            />
          ) : (
            <TimelineItem
              separateRight
              title={data.title}
              desc={data.desc}
              icon={data.icon}
              time={data.time}
              classname={cx('timeline')}
              left="fade-left"
              right="fade-right"
            />
          )}
        </Box>
      ))}
    </Container>
  );
}

Timeline.propTypes = {};

export default Timeline;
