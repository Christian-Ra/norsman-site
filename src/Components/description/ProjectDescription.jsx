import "./ProjectDescription.scss";

export default function ProjectDescription({ title, subHeading, description }) {
  return (
    <section className="description">
      <div className="container">
        <div className="body-container">
          <h2 className="title">{title}</h2>
          <h2 className="description_subheading">{subHeading}</h2>
          {description.map((d) => (
            <p className="body-text">
              {d}
              <br></br>
            </p>
          ))}
          {/* <p className="body-text">{description}</p> */}
        </div>
      </div>
    </section>
  );
}
