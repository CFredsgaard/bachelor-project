"use client";

import { useState } from "react";

import companiesJSON from "../data/companies.json";
import CompanyDecorator from "../models/CompanyDecorator";
import CompanyData from "../types/CompanyData";
import CompanyList from "./displayCompanies/CompanyList";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const allCompanies = companiesJSON.map(
  (company) => new CompanyDecorator(company as CompanyData)
);

const CompaniesOverview = () => {
  const [displayedCompanies, setDisplayedCompanies] =
    useState<CompanyDecorator[]>(allCompanies);
  const [shouldSort, setShouldSort] = useState<boolean>(true);

  const updateDisplayedCompanies = (selectedCompanies: CompanyDecorator[]) =>
    setDisplayedCompanies(selectedCompanies);
  const updateShouldSort = (shouldSort: boolean) => {
    setShouldSort(shouldSort);
  };

  return (
    <div className="flex flex-col">
      <div className="fixed top-0 w-full z-20">
        <Header
          updateCompanies={updateDisplayedCompanies}
          allCompanies={allCompanies}
          updateShouldSort={updateShouldSort}
        />
      </div>

      <div className="grid grid-cols-6 mt-20 mb-20 pt-4">
        <div className="fixed top-0 pt-20 h-full col-span-1">
          <Sidebar
            companies={displayedCompanies}
            updateCompanies={updateDisplayedCompanies}
            updateShouldSort={updateShouldSort}
            shouldSort={shouldSort}
          />
        </div>

        <main className="col-start-2 col-span-5">
          <CompanyList companies={displayedCompanies} />
        </main>
      </div>

      <div className="bottom-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
};

export default CompaniesOverview;
