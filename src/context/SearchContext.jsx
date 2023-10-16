import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import members from "@dummyData/member.js";

const SearchContext = createContext();
const useSearchContext = () => useContext(SearchContext);

const SearchContextProvider = ({ children }) => {
  const [searched, setSearched] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    const filteredResults = members.filter((i) => {
      return (
        i.name.includes(searched) ||
        i.location.includes(searched) ||
        i.hobby.includes(searched) ||
        i.description.includes(searched)
      );
    });
    setSearchResults(filteredResults);
    navigate("/search");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <SearchContext.Provider
      value={{ setSearched, searchResults, handleSearch, handleKeyDown }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { useSearchContext, SearchContextProvider };
