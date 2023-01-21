import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './slider.css'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import { Button, CardActions } from '@mui/material'

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
                        <div className="title-content">Make better coffee</div>
                        <div className="content">why learn how to blog?</div>
                        <CardActions className="wrap">
                            <Button
                                variant="text"
                                size="large"
                                className="button"
                            >
                                Learn
                            </Button>
                        </CardActions>

                        <img src="images/slidertotale.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image">
                        <div className="title-content">Do you like blog?</div>
                        <div className="content">
                            learn how to blog with us!
                        </div>
                        <CardActions className="wrap">
                            <Button
                                variant="text"
                                size="large"
                                className="button"
                            >
                                Learn
                            </Button>
                        </CardActions>
                        <img src="images/slider2.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image">
                        <div className="title-content">Don't worry</div>
                        <div className="content">Drink coffee!</div>
                        <CardActions className="wrap">
                            <Button
                                variant="text"
                                size="large"
                                className="button"
                            >
                                Read more
                            </Button>
                        </CardActions>
                        <img src="images/slider3.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Slider
