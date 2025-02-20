import "./Bio.scss";
import { useCallbackRef } from "use-callback-ref";
import { IoIosArrowDown } from "react-icons/io";

export default function Bio({ content, isBioOpen, onClick }) {
  const bioHeight = useCallbackRef(null, (ref) => ref && ref.focus());
  //   const [isBioOpen, openBio] = useState(false);

  //   const [isBioOpen, openBio] = useState(false);

  return (
    <div style={{ marginBottom: "0px" }}>
      <div className="team-container">
        <img
          className="headshot"
          src={content.headshot}
          alt={`${content.name}`}
        ></img>
        <div className="team-heading">
          <div style={{ paddingBottom: "1.25rem" }}>
            <p className="name">{content.name}</p>
            <p className="name">{content.title}</p>
          </div>
          {content.education.map((e, index) => (
            <p style={{ paddingBottom: "1.25rem" }} key={index}>
              {e}
            </p>
          ))}
        </div>
      </div>
      <button
        className={`heading-container ${isBioOpen ? "active" : ""}`}
        // onClick={() => openBio(!isBioOpen)}
        onClick={onClick}
      >
        {/* <h1 className="heading-content">{heading}</h1> */}
        <IoIosArrowDown className={`arrow ${isBioOpen ? "active" : ""}`} />
      </button>
      <div
        ref={bioHeight}
        style={
          isBioOpen
            ? { height: bioHeight.current.scrollHeight }
            : { height: "0px" }
        }
        onClick={onClick}
        // onClick={() => openBio(!isBioOpen)}
        className="team-bio"
      >
        <p className="bio-text">{content.bio}</p>
        <div className="work-container">
          {content.affiliations && (
            <div className="affiliations">
              <h2>Affiliations</h2>
              {content.affiliations.map((a, index) => (
                <p key={index}>{a}</p>
              ))}
            </div>
          )}
          <div className="resume">
            <h2>Work</h2>
            {content.work.map((w, index) => (
              <p className="work" key={index}>
                {w}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
