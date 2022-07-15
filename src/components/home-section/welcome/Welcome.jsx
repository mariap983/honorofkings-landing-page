import { useEffect } from 'react' 
import './welcome.scss'

import HomeSection from '../HomeSection'
import Button from '../../button/Button'

import hoverEffect from 'hover-effect'

import {
    bg1,
    champGeYa,
    champMiyamoto,
    champLan,
    distortion
} from '../../../assets/images'

const champImgs = [champGeYa, champMiyamoto, champLan]

const Welcome = props => {

    /* The code is used to create a slide show of images that are
    automatically displayed when the user hovers over them. */

    useEffect(() => {
        // The code starts by creating an array of animations.

        /* The code then loops through the images in the #welcome__img__slide 
        and creates an animation for each one. */   

        const welcomeImgs = document.querySelectorAll('#welcome__img__slide > img')

        // The first line creates an empty array called "animates".
        // This is where we will store our animations.

        let animates = [] 

        /* Here the code starts by creating a welcomeImgs object 
        that contains all the images in the slide show. */

        welcomeImgs.forEach((item, index) => {

            /* This loop iterates through every image on this slide and creates a new animation 
            for it based on what's next in the list (the last item). */

             /* For example, if there were three items in this list, it would create 
            three different animations: one with no displacementImage set to 0; 
            another with distortion set to 1; and another with distortion set to 2. */

            let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute
            ('src')
            
            //Each animation is created with a hoverEffect, which has two properties: parent and intensity.

            let animation = new hoverEffect({

                /* The parent property is set to document.querySelector('#welcome__img__slide'), 
                which means that this animation will be applied to every image on the slide show's 
                canvas element (the one with id="welcome__img__slide"). */

                parent: document.querySelector('#welcome__img__slide'),
                intensity: 0.5,
                image1: item.getAttribute('src'),
                image2: nextImg,
                displacementImage: distortion,
                hover: false
            })
            animates.push(animation)
        })

        // The code iterates through the list of images and removes each one.

        welcomeImgs.forEach(e => e.remove())

        let currItem = 0

        // The code then increments currItem by 1, which is the index of the current image in the list.

        /* If there are no more images to iterate through, it will call next on all animations 
        that have a value greater than or equal to prevItem. */

        const autoImageSlide = () => {
            let prevItem = currItem

            /* The next line increments currItem by 1 each time it's executed 
            until it reaches animates.length - 1 which would be when there are 
            no more items left in the array to iterate through. */

            currItem = (currItem + 1) % animates.length

            /* If this condition isn't met then we know that document.hidden 
            has been set to true so we can skip ahead and call next on all of 
            our animations for this slide before continuing on with our code 
            execution flow (which is why I said "if (!document.hidden)"). */

            if (!document.hidden) {

                /* This part of the code checks if document hidden was set to true or not 
                and skips calling next() on any animations if it was set to false instead 
                because otherwise they wouldn't get called at all since they're nested inside 
                an else statement which would cause them not being able to run at all because 
                their parent function won't execute its statements either due to being nested 
                inside another else statement as well! */

                animates[prevItem].next()
            }

            /* The last step in the code sets up an interval timer that will 
            animate each image on its own time frame of 3 seconds after 
            being called once per second (3000 milliseconds). */

            setTimeout(() => {
                let canvas = document.querySelectorAll('#welcome__img__slide > canvas')
                document.querySelector('#welcome__img__slide').appendChild(canvas[0])
                animates[prevItem].previous()
            }, 3000);
        }

        setInterval(autoImageSlide, 3000);
    }, [])

    return (
        <HomeSection
            className={`welcome ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay welcome__content"
            bgImage={bg1}
        >
            <div className="welcome__info relative">
                <div className="welcome__info__content">
                    <div className="title">
                        <span>Welcome To</span>
                        <h2 className="main-color">Honor of Kings</h2>
                    </div>
                    <div className="description m-t-4">
                    Team up with friends and test your skills in 5v5 MOBA combat. 
                    All the high-skill competition you crave, designed especially 
                    for mobile with revamped controls and streamlined matches.
                    Explore the living universe of Honor of Kings through anime 
                    series, music, comics, games, and more. Then dive into the 
                    community of gamers, cosplayers, musicians, and content 
                    creators who are waiting for you to join them.
                    </div>
                    <div className="btns m-t-4">
                        <Button className="btn-main">PLAY NOW</Button>
                        <Button className="btn-second">GET STARTED</Button>
                    </div>
                </div>
            </div>
            <div className="welcome__img relative">
                <div className="welcome__img__slide" id="welcome__img__slide">
                    {
                        champImgs.map((item, index) => (
                            <img src={item} key={index}/> 
                        ))
                    }
                </div>
            </div>
        </HomeSection>
    )
}

export default Welcome