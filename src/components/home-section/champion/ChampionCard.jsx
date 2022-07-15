import { useRef } from 'react'
import './champion-card.scss'

const ChampionCard = props => {

    /* A React component that renders an image and some text. When the user clicks on it, 
    another screen appears with more information about the item. */

    const cardRef = useRef(null)

    const item = props.item

    const onClick = () => {

        /* A function that gets called when the user clicks on the champion card. 
        It first selects an image from inside of the card and then it finds out 
        where this image is located in relation to other elements on the page. */

        const img = cardRef.current.querySelector('img')
        const pos = img.getBoundingClientRect()

        /* The selected code creates a new element that is an exact copy of the image. The new element 
        will be placed on top of the original image and it will have some CSS properties applied to it. */

        const newNode = img.cloneNode(true)
        newNode.style.width = img.offsetWidth + 'px'
        newNode.style.height = img.offsetHeight + 'px'
        newNode.style.position = 'absolute'
        newNode.style.top = pos.top + 'px'
        newNode.style.left = pos.left + 'px'
        newNode.style.zIndex = '102'

        newNode.style.transition = 'all 0.7s ease'
        newNode.id = `champ-img-${props.id}`

        setTimeout(() => {

            /* The selected code is a function that changes the size of an image. It's called setTimeout. 
            The name means "wait for some time and then do something". In this case, it waits 0 seconds 
            (the second parameter) and then does 4 things:

                - Set the width to 'auto' (this makes the image as wide as possible)
                - Set the height to 100% (this makes the image take up all available vertical space)
                - Set top position to 0px (this moves it from its current position at the top of your screen down until you can't see any more of it)
                - Set left position to 0px (this moves it from its current position on your screen right until you can't see any more of it) */

            newNode.style.width = 'auto'
            newNode.style.height = '100%'
            newNode.style.top = 0
            newNode.style.left = 0
        },)

        // Adds a new element to the page. The new element is an image that was cloned from another image on the page.

        document.body.appendChild(newNode)

        /* The selected code is a function that gets the video url from an object and 
        sets it as the source of an iframe. It also adds a class to another element. */
        
        const videoUrl = `https://youtube.com/embed/${item.video}`
        document.querySelector(`#champ-detail-${props.id} iframe`).setAttribute('src', videoUrl)
        document.querySelector(`#champ-detail-${props.id}`).classList.add('active')
    }

    return (
        <div className="champion-card" onClick={onClick} ref={cardRef}>
            <div className="frame">
                <div className="bg-image overlay bg" style={{backgroundImage: `url(${item.bg})`}}></div>
            </div>
            <img src={item.img} alt="" />
            <div className="name">{item.name}</div>
        </div>
    )
}

export default ChampionCard