import { Box, Container, Paper, styled, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import styles from '../Home.module.scss';

const cx = classNames.bind(styles);

function Donate({ id }) {
  const Wrapper = styled(Box)(({ theme }) => ({
    // color: 'white',
    // background: '#d32f2fd6',
    padding: '50px 0 100px 0',
    // display:'none',

    [theme.breakpoints.up('md')]: {
      padding: '50px 0 100px 0',
    },
    [theme.breakpoints.down('md')]: {
      padding: '10px 0 0 0',
    },
  }));
  const ImageTop = styled(Box)(({ theme }) => ({
    position: 'absolute',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',

    [theme.breakpoints.up('md')]: {
      top: '-20px',
      right: '140px',
    },
    [theme.breakpoints.down('md')]: {
      top: '10px',
      right: '0',
      width: '250px',
    },
  }));

  const DonateMoney = styled(Paper)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      right: '120px',
      bottom: '-100px',
    },
    [theme.breakpoints.down('md')]: {
      right: '20px',
      bottom: '-150px',
    },
    color: 'white',
    position: 'absolute',
    padding: '20px 0px 30px 40px',
    maxWidth: '300px',
    backgroundColor: 'orange  ',
    borderRadius: 'unset',
    '&::before': {
      content: '""',
      left: 0,
      top: '-14px',
      position: 'absolute',
      borderBottom: '15px solid orange',
      borderLeft: '300px solid transparent',
    },
    '&::after': {
      content: '""',
      right: '-25px',
      bottom: '-1px',
      position: 'absolute',
      borderBottom: '175px solid orange',
      borderRight: '25px solid transparent',
    },
  }));

  // const donateData = [
  //   {
  //     quantity: 15,
  //     subtitle: 'INREDIBLE VOLUNTEERS',
  //   },
  //   {
  //     quantity: 15,
  //     subtitle: 'INREDIBLE VOLUNTEERS',
  //   },
  //   {
  //     quantity: 15,
  //     subtitle: 'INREDIBLE VOLUNTEERS',
  //   },
  // ];
  // const Bottom = styled(Box)(({ theme }) => ({
  //   width: '100%',
  //   gap: 5,
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-between',
  //   position: 'absolute',
  //   left: 0,

  //   [theme.breakpoints.up('md')]: {
  //     bottom: '-170px',
  //   },
  //   [theme.breakpoints.down('md')]: {
  //     bottom: '-30px',
  //   },
  // }));

  return (
    <Wrapper>
      <Container
        id={id}
        maxWidth="xl"
        sx={{
          paddingTop: '100px',
          // display:'none'
        }}
      >
        <Typography
          variant="span"
          sx={{
            display: 'content',
            fontFamily: 'Dancing Script',
            height: '209px',
            fontSize: { xs: '45px', md: '70px' },
            color: 'var(--primary)',
          }}
          data-aos="fade-up"
        >
          Đề xuất tài trợ
        </Typography>
        <Box
          sx={{
            padding: { xs: '30px 0 0px 0', md: '50px 0 0px 0' },
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
            position: 'relative',
            gap: { xs: 20, md: 0 },
          }}
          data-aos="fade-up"
        >
          {/* LEFT */}
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              pt: 20,
            }}
            data-aos="zoom-in"
          >
            <Image
              src={images.donate1}
              alt=""
              className={cx('donate__image')}
            />
            <ImageTop data-aos="zoom-in">
              <Image src={images.donate} alt="" className={cx('image__item')} />
            </ImageTop>
            {/* DonateMoney */}
            <DonateMoney data-aos="fade-up">
              {/* <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              > */}
              <Typography
                variant="h5"
                component="h6"
                sx={{ fontSize: 40, mb: 1 }}
              >
                {/* {(counterOn && (
                    <Countup start={0} end={70} duration={2}></Countup>
                  )) ||
                    70} */}
                70 tr
              </Typography>
              {/* </ScrollTrigger> */}
              <Typography variant="p">
                Volunteers helping carry out our global mission
              </Typography>
            </DonateMoney>
          </Box>
          {/* RIGHT */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="p" data-aos="fade-up" data-aos-delay="500">
              Ban tổ chức dự án thiện nguyện "Gùi Xuân Lên Bản" xin chân thành
              cảm ơn Quý công ty. Chương trình của chúng tôi sẽ không thể thành
              công nếu thiếu sự ủng hộ, hợp tác và đóng góp từ quý vị. Một lần
              nữa, BTC xin gửi lời cảm ơn, chúc Quý công ty, Quý mạnh thường
              quân luôn thành công và phát triển hưng thịnh!
            </Typography>
            <Box sx={{ my: 3, display: 'grid', gap: 2 }}>
              <Typography variant="p" data-aos="fade-up" data-aos-delay="500">
                Các doanh nghiệp, tổ chức có thể tài trợ cho chương trình bằng
                hiện kim, hiện vật, hoặc bằng việc hỗ trợ tổ chức chương trình.
                Nhà tài trợ có thể tài trợ cho chương trình bằng cách trao tặng
                sản phẩm của công ty mình kèm theo.
              </Typography>
              <Typography
                variant="p"
                sx={{ display: 'block' }}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                - Hiện kim: Nhà tài trợ thanh toán cho ban tổ chức bằng tiền mặt
                hoặc chuyển khoản cho đại diện của BTC. Địa điểm thanh toán do
                BTC và Nhà tài trợ thỏa thuận. Thời gian thanh toán không muộn
                hơn 3 ngày sau khi ký hợp đồng.
              </Typography>
              <Typography
                variant="p"
                sx={{ display: 'block' }}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                - Hiện vật: Nhà tài trợ giao hiện vật cho đại diện của BTC. Địa
                điểm giao nhận do BTC và Nhà tài trợ thỏa thuận. Hiện vật được
                giao không muộn hơn 3 ngày sau khi ký hợp đồng.
              </Typography>
            </Box>
            <Box>
              <button
                className={cx('learn-more')}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <span className={cx('circle')} aria-hidden="true">
                  <span className={cx('icon')}>
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </span>
                <span className={cx('button-text')}>Learn More</span>
              </button>
            </Box>
          </Box>
          {/* BOTTOM */}
          {/* <Bottom>
            {donateData.map((data, index) => (
              <Paper
                key={index}
                sx={{
                  p: { xs: 2, md: 4 },
                  width: 'fit-content',
                }}
              >
                <Box>
                  <Typography variant="h4" component="span">
                    {(counterOn && (
                      <Countup start={0} end={data.quantity} duration={2} />
                    )) ||
                      data.quantity}
                    k
                  </Typography>
                  <Typography variant="subtitle1" component="span">
                    +
                  </Typography>
                </Box>
                <Typography
                  variant="p"
                  sx={{
                    textTransform: 'uppercase',
                    mt: 1,
                    display: { xs: 'none', md: 'block' },
                  }}
                >
                  {data.subtitle}
                </Typography>
              </Paper>
            ))}
          </Bottom> */}
        </Box>
      </Container>
    </Wrapper>
  );
}

Donate.propTypes = {};

export default Donate;
