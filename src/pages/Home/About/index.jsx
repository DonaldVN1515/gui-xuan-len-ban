import React from 'react';
// import PropTypes from 'prop-types';
import {
  Container,
  Typography,
  Box,
  Button,
  styled,
  Paper,
} from '@mui/material';
import Image from '../../../components/Image';
import classNames from 'classnames/bind';
import styles from '../Home.module.scss';
import images from '../../../assets/images';
import { blue } from '@mui/material/colors';
const cx = classNames.bind(styles);

function About(props) {

  const MyBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }));

  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        padding: '50px 100px',
      }}
    >
      {/* LEFT */}
      <MyBox sx={{ paddingLeft: '120px' }}>
        <Typography
          variant="span"
          sx={{ textTransform: 'uppercase', color: 'orange' }}
        ></Typography>
        <Typography
          variant="h3"
          component="h5"
          sx={{
            py: 3,
            fontFamily: 'Dancing Script',
            fontSize: '70px',
            color: 'var(--primary)',
          }}
        >
          Đem mùa Xuân về trên bản nhỏ
        </Typography>
        <Typography variant="p" sx={{ textAlign: 'justify', lineHeight: 2 }}>
          “GÙI XUÂN LÊN BẢN” là một dự án đến từ Cao đẳng Anh quốc BTEC FPT Đà
          Nẵng. Với tâm nguyện hướng về cộng đồng, sẻ chia khó khăn với những
          bạn nhỏ bản vùng cao, chịu thương chịu khó, ngày ngày bám núi bám rừng
          vượt cả quãng đường xa để đến trường. Đồng cảm với hoàn cảnh khó khăn
          của các em nhỏ, muốn mang đến những điều may mắn trong cuộc sống đến
          với trẻ em, dùng sức trẻ của mình để chắp cánh những ước mơ; thắp lên
          niềm tin vào những điều tốt đẹp, nhen nhóm những nụ cười, giúp các em
          có thêm nghị lực vươn lên học tập đó là lý do mà dự án thiện nguyện
          này được thực hiện.
        </Typography>

        <button className={cx('learn-more')}>
          <span className={cx('circle')} aria-hidden="true">
            <span className={cx('icon')}>
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </span>
          <span className={cx('button-text')}>Learn More</span>
        </button>
      </MyBox>

      {/* RIGHT */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          position: 'relative',
        }}
      >
        <Image src={images.brush} alt="" className={cx('about__brush')} />
        <Image src={images.about} alt="" className={cx('about__image')} />

        {/* QUOTES */}
        <Paper
          sx={{
            position: 'absolute',
            p: 3,
            maxWidth: '300px',
            left: '139px',
            bottom: '165px',
          }}
        >
          <Typography variant="h6"></Typography>
          <Typography variant="p" className={cx('quotes')}>
            "Bắt đầu từ nơi bạn đứng. Sử dụng những gì bạn có. Làm những gì bạn
            có thể."
            <i className="fa-solid fa-quote-right"></i>
          </Typography>
        </Paper>
        {/* <img src={images.icon1} alt="" className={cx('story-svg')} sx={{}} /> */}
      </Box>
    </Container>
  );
}

About.propTypes = {};

export default About;
