import CompanyDecorator from "@/src/models/CompanyDecorator";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface CompanySearchBarProps {
  allCompanies: CompanyDecorator[];
  updateCompanies: (selectedCompanies: CompanyDecorator[]) => void;
  updateShouldSort: (shouldSort: boolean) => void;
}

const Searchbar: React.FC<CompanySearchBarProps> = ({
  allCompanies,
  updateCompanies,
  updateShouldSort,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [locationTerm, setLocationTerm] = useState<string>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("searchTerm1") || searchParams.get("searchTerm2")) {
      setSearchTerm(searchParams.get("searchTerm1") ?? "");
      setLocationTerm(searchParams.get("searchTerm2") ?? "");

      handleSearch();
    }
  });

  const handleSearch = () => {
    //Retrieve all companies
    const companyList = [...allCompanies];

    //Filter based on search terms
    const filteredData = companyList.filter(
      (item) =>
        item.company.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        item.company.location.toLowerCase().includes(locationTerm.toLowerCase())
    );

    //Display companies matching search terms
    updateCompanies(filteredData);
    updateShouldSort(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="grid gap-4 grid-flow-col">
      {/* company Search Bar */}
      <input
        type="text"
        placeholder="Search for a company..."
        className="input input-bordered input-primary input-md"
        onChange={(evt) => setSearchTerm(evt.target.value)}
        onKeyDown={handleKeyPress} // Listen for Enter key press
      />
      {/* Location Search Bar */}
      <input
        type="text"
        placeholder="Search by location..."
        className="input input-bordered input-primary input-md"
        onChange={(evt) => setLocationTerm(evt.target.value)}
        onKeyDown={handleKeyPress} // Listen for Enter key press
      />
      <button
        className="btn btn-outline btn-primary btn-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
