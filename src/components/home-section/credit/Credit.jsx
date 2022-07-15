import './credit.scss'

import { useRef, useEffect } from 'react'

import { bgVideo } from '../../../assets/videos'
import Button from '../../button/Button'

const Credit = props => {
    //The code creates a variable called videoRef and assigns it the value of useRef(null).
    const videoRef = useRef(null)

    /* The code below is a function that plays and pauses the video when it's not visible. 
    The useEffect hook runs this function every time the component renders, so if you change 
    tabs or minimize your browser window, the video will pause. When you come back to the tab 
    with our website open, the video will play again. */
    
    useEffect(() => {
        videoRef.current.play() 
        const pauseVideo = () => {
            if (!document.hidden) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }
        }
        
        /* Then the code creates an event listener that will be triggered when the browser's visibility changes, 
        which is done with the document.webkitvisibilitychange event. */

        /* This event handler calls pauseVideo() when it is triggered, 
        which pauses the video if it is playing or resumes it otherwise. */
        
        document.addEventListener('webkitvisibilitychange', pauseVideo)
        return () => {
            document.removeEventListener('webkitvisibilitychange', pauseVideo)
        }
    }, []);

    return (
        <div className={`credit overlay ${props.isActive ? 'active' : ''}`}>
            <video
                ref={videoRef}
                width="100%"
                height="auto"
                loop={true}
                className="overlay"
            >
                <source src={bgVideo} type="video/mp4"/>
            </video>
            <div className="credit__content">
                <div className="title">
                    <span>Start Your</span>
                    <h2 className="main-color">JOURNEY</h2>
                </div>
                <div className="btns m-t-4">
                    <Button className="btn-main">PLAY NOW</Button>
                    <Button className="btn-second">GET STARTED</Button>
                </div>
            </div>
        </div>
    )
}

export default Credit