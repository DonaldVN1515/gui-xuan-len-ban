import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import { useState } from 'react';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import styles from './Banner.module.scss';
import { useTranslation } from 'react-i18next';
import i18n from '../../../components/translation/i18n';

// function Banner() {
//   const [index, setIndex] = useState(0);
//   const cx = classNames.bind(styles);
//   const { t } = useTranslation()

//   const data = [
//     {
//       imageUrl: images.slide2,
//       title: t('content.slide_title'),
//       desc: 'We do it for people in need',
//     },
//     {
//       imageUrl: images.slide1,
//       title: 'Lorem ipsum dolor',
//       desc: 'Lorem abc xyz',
//     },
//     {
//       imageUrl: images.slide3,
//       title: 'Lorem ipsum dolor ',
//       desc: 'Lorem abc xyz',
//     },
//   ];

//   const handleArrow = (direction) => {
//     if (direction === 'left') {
//       setIndex(index !== 0 ? index - 1 : data.length - 1);
//     }
//     if (direction === 'right') {
//       setIndex(index !== data.length - 1 ? index + 1 : 0);
//     }
//   };
//   const handleMoveDot = (dotIndex) => {
//     setIndex(dotIndex);
//   };

//   return (
//     <Box className={cx('wrapper')}>
//       {/* ARROW LEFT */}
//       <Box
//         className={cx('arrow', 'arrow-left')}
//         onClick={() => handleArrow('left')}
//       >
//         <IconButton>
//           <FontAwesomeIcon icon={faChevronLeft} className={cx('arrow-icon')} />
//         </IconButton>
//       </Box>
//       {/* Banner */}
//       <Box
//         className={cx('banner')}
//         sx={{
//           transform: `translateX(${-100 * index}vw)`,
//           width: `${100 * data.length}vw`,
//         }}
//       >
//         {data.map((slide, index) => (
//           <Box
//             key={index}
//             sx={{
//               position: 'relative',
//             }}
//           >
//             <Image
//               src={slide.imageUrl}
//               alt={slide.title}
//               className={cx('image')}
//             />
//             <Container
//               sx={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '250px',
//                 transform: 'translateY(-50%)',
//                 color: 'white',
//               }}
//             >
//               <Typography variant="h6">{slide.desc}</Typography>
//               <Typography
function Banner() {
  return (
    <Box className={cx('wrapper')}>
      <Typography variant="h1" component="h1" className={cx('banner-title')}>
        Gùi Xuân lên bản
      </Typography>
      <img src={images.flower} alt="" className={cx('flower-1')} />
      <img src={images.flower} alt="" className={cx('flower-2')} />
    </Box>
  );
}

export default Banner;
