import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './slider.css'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'

type Props = {}

const Slider = (props: Props) => {
    return (
        <div>
            {' '}
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                className="Arrow"
                navigation={true}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <div className="image">
                        <img src="images/slidertotale.jpg" alt="" />
                        <div className="title-content"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image">
                        <img src="images/slider2.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image">
                        <img src="images/slider3.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Slider
