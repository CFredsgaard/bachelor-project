"use client";

import { useState } from "react";

import companiesJSON from "../data/companies.json";
import CompanyDecorator from "../models/CompanyDecorator";
import CompanyData from "../types/CompanyData";
import CompanyList from "./displayCompanies/CompanyList";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const allCompanies = companiesJSON.map((company) => new CompanyDecorator(company as CompanyData));

const CompaniesOverview = () => {
    const [displayedCompanies, setDisplayedCompanies] = useState<CompanyDecorator[]>(allCompanies);
    const [shouldSort, setShouldSort] = useState<boolean>(true);

    const updateDisplayedCompanies = (selectedCompanies: CompanyDecorator[]) => setDisplayedCompanies(selectedCompanies);
    const updateShouldSort = (shouldSort: boolean) => {
        setShouldSort(shouldSort);
    };

    return (
        <>
            <Header updateCompanies={updateDisplayedCompanies} allCompanies={allCompanies} updateShouldSort={updateShouldSort} />
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                {/* Sidebar */}
                <div className="drawer-side">
                    <Sidebar
                        companies={displayedCompanies}
                        updateCompanies={updateDisplayedCompanies}
                        updateShouldSort={updateShouldSort}
                        shouldSort={shouldSort}
                    />
                </div>

                {/** Main content of page */}
                <div className="drawer-content flex flex-col items-center justify-center">
                    <main className="p-4">
                        <CompanyList companies={displayedCompanies} />
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CompaniesOverview;
