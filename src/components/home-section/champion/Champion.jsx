import './champion.scss'

import HomeSection from '../HomeSection'
import ChampionCard from './ChampionCard'

import { bg2 } from '../../../assets/images'
import { championsData } from '../../../assets/dummy'

import { Swiper, SwiperSlide} from 'swiper/react'

/* The code below is a React component that renders the champion section of our website. 
It's called Champion and it takes in props as an argument. The props are used to determine 
if this section should be active or not, which means whether we want to show it on the 
screen or not. If we do want to show it, then the className will have 'active' 
added to its value so that CSS can style accordingly. */

const Champion = props => {
    return (
        <HomeSection
            className={`champion ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay"
            bgImage={bg2}
        >
            <div className="container relative">
                <div className="champion-list">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        grabCursor={true}
                        nested={true}
                    >
                        {
                            championsData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <ChampionCard item={item} id={index}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </HomeSection>
    )
}

export default Champion