import {
    Swiper,
    SwiperSlide
} from 'swiper/react'

import SwiperCore, {
    EffectFade,
    Mousewheel,
    Pagination
} from 'swiper'

import {
    Champion,
    Welcome,
    ChampionDetail,
    Trailer,
    Credit
} from '../components/home-section'

import { championsData } from '../assets/dummy'

/* A function that takes an array as argument. 
The array contains three objects: Mousewheel, Pagination and EffectFade. 
This function adds the functionality of these objects to SwiperCore, 
which is imported from swiper/core. */

SwiperCore.use([Mousewheel, Pagination, EffectFade])

/* The code below is an object that contains properties and values. The properties are the names of the options for a swiper, 
and their values are what we want to set them as. For example: direction has a value of vertical, which means that our slides 
will move vertically instead of horizontally (which is default) */

const swiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: true,
    effect: 'fade',
    speed: 1000
}

/* The code below is a function that returns JSX. The returned JSX contains the following:

        - A Swiper component with swiperOptions as props, 
        and 4 SwiperSlide components inside it. Each of 
        these slides contain a Welcome, Champion, Trailer 
        or Credit component respectively. These are all 
        imported from other files in this project 
        (see line 2 to 5).

        - An array of ChampionDetail components which are 
        mapped over using championsData as data source 
        (see line 6). This array is created by mapping 
        over each item in championsData and creating an 
        instance of the ChampionDetail component for each 
        item. The id prop passed into each instance is set 
        to index so that we can use it later on when 
        navigating between different instances of this 
        component.
        
        - A div element with className "scroll" containing 
        a span element with text "Scroll to see effect". 
        This will be used later on for styling purposes only.
*/
const Home = () => {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    {({ isActive }) => <Welcome isActive={isActive}/>}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Champion isActive={isActive}/>}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Trailer isActive={isActive}/>}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Credit isActive={isActive}/>}
                </SwiperSlide>
            </Swiper>
            {
                championsData.map((item, index) => <ChampionDetail
                    key={index}
                    item={item}
                    id={index}
                    
                />)
            }
            <div className="scroll">
                <span>Scroll to learn more</span>
            </div>
        </>
    )
}

export default Home