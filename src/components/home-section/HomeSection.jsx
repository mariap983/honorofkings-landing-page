import Section, { SectionContent } from "../section/Section"

/* The selected code is a function that returns JSX. The function takes 
in an object called props and uses it to render the returned JSX. */

const HomeSection = props => {
    return (
        <Section
            className={props.className}
        >
            <SectionContent
                className={props.contentClassName}
                bgImage={props.bgImage}
            >
                {props.children}
            </SectionContent>
        </Section>
    )
}

export default HomeSection 