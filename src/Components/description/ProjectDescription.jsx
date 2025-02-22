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
          {description.map((d, index) => (
            <p key={index} className="body-text">
              {d}
              <br></br>
              {/* <br></br> */}
            </p>
          ))}
          {credits &&
            credits.map((c, index) => (
              <p key={index} className="credit-text">
                {c}
                <br></br>
                <br></br>
              </p>
            ))}
          {/* <div></div> */}
          {/* <p className="body-text">{description}</p> */}
        </div>
      </div>
    </section>
  );
}
