import PropTypes from "prop-types";
const Card = ({ flag, name }) => {
  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <img src={flag} alt={`Flag of ${name}`} style={{ hieght: "100px", width:"100px" }} />
      <h4>{name}</h4>
    </div>
  );
};

Card.propTypes = {
    flag: PropTypes.string.isRequired, // URL of the flag
    name: PropTypes.string.isRequired, // Name of the country
}

export default Card;
