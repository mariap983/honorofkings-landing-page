import './section.scss'

/* A function that returns a div element. The div has the class section and 
it also has another class which comes from the props of this component. 
This other class can be anything, for example: section--blue. */

const Section = props => {
    return (
        <div className={`section ${props.className}`}>
            {props.children}
        </div>
    )
}

/* The code below is a function that returns JSX. The function takes in an object 
called props and uses the properties of this object to return some JSX. */

export const SectionContent = props => {

    const bgImage = props.bgImage ? {
        backgroundImage: `url(${props.bgImage})`
    } : {}

    return (
        <div 
            className={`section__content ${props.className}`}
            style={bgImage}
        >
            {props.children}
        </div>
    )
}

export default Section