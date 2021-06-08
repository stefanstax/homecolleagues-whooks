import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <input
      className="w-11/12 md:w-6/12 lg:w-4/12 xl:w-2/12 mx-auto my-7 p-5 rounded-md"
      style={{ backgroundColor: "#F5BD02", color: "rgb(0, 74, 173)" }}
      onChange={searchChange}
      type="search"
      placeholder="Search for a colleague..."
    />
  );
};

export default SearchBox;
