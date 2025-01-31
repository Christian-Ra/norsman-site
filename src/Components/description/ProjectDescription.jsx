import "./ProjectDescription.scss";

export default function ProjectDescription({
  title,
  subHeading,
  description,
  credits,
}) {
  return (
    <section className="description">
      <div className="container">
        <div className="body-container">
          <h2 className="title">{title}</h2>
          <h2 className="description_subheading">{subHeading}</h2>
          {credits &&
            credits.map((c, index) => (
              <p key={index} className="credit-text">
                {c}
              </p>
            ))}
          <br></br>
          <div>
            <br></br>
          </div>
          {description.map((d, index) => (
            <p key={index} className="body-text">
              {d}
            </p>
          ))}
          {/* <p className="body-text">{description}</p> */}
        </div>
      </div>
    </section>
  );
}
