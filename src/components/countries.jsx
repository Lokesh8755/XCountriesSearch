import { useState, useEffect } from "react";
import Card from "./card";
import Search from "./search";

const Countries = () => {
  const API_ENDPOINT = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]); // to hold filtered data
  const [searchQuery, setSearchQuery] = useState(""); // to hold the search term
  const [debouncedQuery, setDebouncedQuery] = useState(""); // for debouncing

  // Fetching countries data
  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data); // Initialized filtered countries data
      })
      .catch((error) => console.error("error fetching Data", error));
  }, []);

  useEffect(() => {
    // Debouncing Logic: Update `debouncedQuery` after 300ms of no typing
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler); // // Cleanup on new keystrokes
    };
  }, [searchQuery]);

  useEffect(() => {
    // Filter countries based on debouncedQuery
    if (debouncedQuery === "") {
      setFilteredCountries(countries); // Show all countries when query is empty
    } else {
      const filtered = countries.filter(({ name }) =>
        name.common.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [debouncedQuery, countries]);

  return (
    <>
      <div
        style={{
          margin: "10px",
          width: "100vw",
          height: "60px",
        }}
      >
        <Search setSearchQuery={setSearchQuery} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {filteredCountries.map(({ name, flags, cca3 }) => (
          <Card key={cca3} flag={flags.png} name={name.common} />
        ))}
      </div>
    </>
  );
};

export default Countries;
