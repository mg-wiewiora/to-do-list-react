import "./style.css";

const Section = ({title, content, menu}) => (

    <section className="section">
          <div className="section__menuContainer">
            <h2 className="section__title">{title}</h2>
           {menu}
          </div>
          <div className="section__content">
            {content}
          </div>
        </section>

);

export default Section;