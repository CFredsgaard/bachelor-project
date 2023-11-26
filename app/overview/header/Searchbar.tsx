import CompanyDecorator from "@/app/models/CompanyDecorator";
import React, { useState } from "react";

interface CompanySearchBarProps {
    allCompanies: CompanyDecorator[];
    updateCompanies: (selectedCompanies: CompanyDecorator[]) => void;
    updateShouldSort: (shouldSort: boolean) => void;
}

const Searchbar: React.FC<CompanySearchBarProps> = ({ allCompanies, updateCompanies, updateShouldSort }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleCompanySearch = () => {
        //Retrieve all companies
        const companyList = [...allCompanies];
        console.log(searchTerm);
        //Filter based on search terms
        const filteredData = companyList.filter((item) => item.company.name.toLowerCase().includes(searchTerm.toLowerCase()));
        //Display companies matching search terms
        updateCompanies(filteredData);
        updateShouldSort(true);
    };

    return (
        <div className="">
            <input
                type="text"
                placeholder="Search for a company..."
                className="input input-bordered input-primary input-md w-full max-w-xs"
                onChange={(evt) => setSearchTerm(evt.target.value)}
            />
            <button className="btn btn-outline btn-primary btn-md m-2" onClick={handleCompanySearch}>
                Search
            </button>
        </div>
    );
};

export default Searchbar;