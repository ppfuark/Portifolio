import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import AppDock from '../components/AppDock';
import Banner from '../components/Banner';
import BgHome from '../media/kite_hxh.png';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <Swiper
      direction="vertical"
      spaceBetween={0}
      slidesPerView={1}
      mousewheel={true}
      keyboard={{ enabled: true }}
      modules={[Mousewheel, Keyboard]}
      className="h-screen"
    >
      {[...Array(3)].map((_, index) => (
        <SwiperSlide key={index}>
          <motion.div
            className="min-h-screen flex flex-col items-center justify-between bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${BgHome})` }}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Banner />
            <AppDock />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}