import "./CollageCard.scss";

const CollageCard = ({ image }) => {
  return (
    <div
      className="collage-card"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default CollageCard;
