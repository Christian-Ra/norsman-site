import "./CollageCard.scss";

const CollageCard = ({ image }) => {
  return (
    <div
      className="collage-card"
      // style={{ backgroundImage: `url(${image})` }}
    >
      <img alt="Norsman Architects" src={image} className="collection-image" loading="lazy">
      </img>
    </div>
  );
};

export default CollageCard;
