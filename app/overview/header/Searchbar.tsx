import CompanyDecorator from "@/app/models/CompanyDecorator";
import React, { useState } from "react";
import CompanyList from "../displayCompanies/CompanyList";

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

  const handleSearch = () => {
    //Retrieve all companies
    const companyList = [...allCompanies];
    console.log(searchTerm);
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

  return (
    <div className="grid grid-flow-col">
      {/* company Search Bar */}
      <input
        type="text"
        placeholder="Search for a company..."
        className="input input-bordered input-primary input-md w-full max-w-xs"
        onChange={(evt) => setSearchTerm(evt.target.value)}
      />
      {/* Location Search Bar */}
      <input
        type="text"
        placeholder="Search by location..."
        className="input input-bordered input-primary input-md w-full max-w-xs"
        onChange={(evt) => setLocationTerm(evt.target.value)}
      />
      <button
        className="btn btn-outline btn-primary btn-md m-2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
