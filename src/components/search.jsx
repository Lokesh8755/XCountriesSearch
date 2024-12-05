import PropTypes from "prop-types";
import "../styles/Search.css";

const Search = ({ setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // updates the query in parent
  };

  return (
    <input
      placeholder="Search for Countries..."
      className="search-input"
      onChange={handleInputChange}
    />
  );
};

Search.propTypes = {
    setSearchQuery: PropTypes.func.isRequired,
}

export default Search;
