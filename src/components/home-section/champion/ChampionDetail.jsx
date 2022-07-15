import './champion-detail.scss'

import { closeIcon } from '../../../assets/images'
import { useEffect, useRef } from 'react'

const ChampionDetail = props => {

    /* The first line of the code imports an image from another file, 
    and then it imports two functions from react: useRef and useEffect. */

    const item = props.item
    const iframeRef = useRef(null)

    /* This is a function that sets the height of an iframe to be proportional to its width. 
    The ratio between the width and height of this iframe is 9:16, which means that for every 16 pixels 
    in height there are 9 pixels in width. This ratio is used by youtube videos so they can fit on any 
    screen size without losing quality or being distorted. */

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
        iframeRef.current.setAttribute('height', height)
    }, [])

    const onClose = () => {

        /* A function that removes the class active from an element with id 
        champ-detail-${props.id}. It also sets the attribute src of an iframe to empty string. */

        document.querySelector(`#champ-detail-${props.id}`).classList.remove('active')
        iframeRef.current.setAttribute('src', '')

        /* The selected code is a function that removes an image from the DOM. 
        It does this by first setting its opacity to 0 and then removing it after 500ms. */

        const img = document.querySelector(`#champ-img-${props.id}`)
        img.style.opacity = 0
        setTimeout(() => {
            img.remove()
        }, 500);
    }

    return (
        <div
            id={`champ-detail-${props.id}`}
            className={`champion-detail bg-image overlay ${props.active ? 'active' : ''}`}
            style={{backgroundImage: `url(${item.bgLarge})`}}
        >
            <div className="champion-detail__content">
                <span>{item.nickName}</span>
                <h2 className="name main-color">{item.name}</h2>
                <span>Role: <span className="third-color">{item.role}</span></span>
                <br />
                <span>Difficulty: <span className="third-color">{item.difficulty}</span></span>
                <div className="story">
                    {item.description}
                </div>
                <span>Dive into the story...</span>
                <div className="video">
                    <iframe
                        title="dive into the story"
                        ref={iframeRef}
                        width="100%"
                    ></iframe>
                </div>
            </div>
            <div className="champion-detail__close" onClick={onClose}>
                <img src={closeIcon} alt="" />
            </div>
        </div>
    )
}

export default ChampionDetail