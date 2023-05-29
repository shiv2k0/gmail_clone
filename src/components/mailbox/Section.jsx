import "./section.css"

const Section = ({Icon,title,selected}) =>{
    return <div className={`section ${selected && "section--selected"}`}
     >
        {Icon} 
        <p>{title}</p>
    </div>
}

export default Section 