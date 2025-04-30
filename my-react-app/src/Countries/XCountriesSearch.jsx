import React, { useEffect, useState } from 'react';
import './XCountriesSearch.css';

const API_ENDPOINT = 'https://countries-search-data-prod-812920491762.asia-south1.run.app/countries';

const Card = ({ name, flag }) => {
  return (
    <div className="countryCard">
      <img src={flag} alt={`Flag of ${name}`} />
      <h2>{name}</h2>
    </div>
  );
};

const XCountriesSearch = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const res = await fetch(API_ENDPOINT);
      const data = await res.json();
      setCountries(data);
      setFilteredCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(value)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="XCountriesSearch">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchText}
        onChange={handleSearch}
      />
      <div className="countriesContainer">
        {filteredCountries.map((country) => (
          <Card key={country.abbr} name={country.name} flag={country.flag} />
        ))}
      </div>
    </div>
  );
};

export default XCountriesSearch;

