import { useRef, useEffect } from 'react'

import { bg3, trailerImg } from '../../../assets/images'
import HomeSection from '../HomeSection'

import './trailer.scss'

const Trailer = props => {
    
    //The selected code creates a variable called iframeRef and assigns it the value of useRef(null). 

    const iframeRef = useRef(null)

   /* The code below is a React hook that sets the height of an iframe to be 16:9 ratio. 
   This means that it will always have the correct aspect ratio, no matter what 
   screen size or device you're using. */

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
        iframeRef.current.setAttribute('height', height)
    }, [])

    return (
        <HomeSection
            className={`trailer ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay trailer__content"
            bgImage={bg3}
        >
            <div className="trailer__content__img">
                <img src={trailerImg} alt="" />
            </div>
            <div className="trailer__content__info">
                <div className="title">
                    <span>Compete With</span>
                    <h2 className="main-color">Friends</h2>
                </div>
                <div className="video">
                    <iframe
                        ref={iframeRef}
                        width="100%"
                        title="trailer"
                        src="https://www.youtube.com/embed/bQMpRMoM-gA"
                    ></iframe>

                </div>
            </div>
        </HomeSection>    
    )
}

export default Trailer