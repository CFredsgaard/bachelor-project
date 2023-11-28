"use client";

import { useEffect, useState } from "react";

import companiesJSON from "../../data/companies.json";
import CompanyDecorator from "../../models/CompanyDecorator";
import CompanyData from "../../types/CompanyData";
import CompanyList from "./displayCompanies/CompanyList";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

import sortCompanies from "../../util/sort";
import searchCompanies from "@/src/util/search";
import { ApplicationState, initializeApplicationState } from "@/src/types/ApplicationState";
import SortOptions from "@/src/util/sortOptions";

const _allCompanies = companiesJSON.map((company) => new CompanyDecorator(company as CompanyData));

const CompaniesOverview = () => {
    const [applicationState, setApplicationState] = useState<ApplicationState>(initializeApplicationState(_allCompanies));

    const updateDisplayedCompanies = () => {
        let data = applicationState._companies;

        data = sortCompanies(data, applicationState.sortByOption);
        data = searchCompanies(data, applicationState.searchCompanyName, applicationState.searchCompanyLocation);

        setApplicationState({ ...applicationState, displayedCompanies: data });
    };

    useEffect(() => {
        updateDisplayedCompanies();
    }, [applicationState.sortByOption, applicationState.searchCompanyName, applicationState.searchCompanyLocation]);

    const handleSort = (sortBy: SortOptions) => {
        setApplicationState({ ...applicationState, sortByOption: sortBy });
    };

    const handleSearch = (name: string, location: string) => {
        setApplicationState({ ...applicationState, searchCompanyName: name, searchCompanyLocation: location });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="fixed top-0 w-full z-20">
                <Header updateSearchState={handleSearch} />
            </div>

            <div className="grid grid-cols-6 mt-20 mb-20 pt-4">
                <div className="fixed top-0 pt-20 h-full col-span-1">
                    <Sidebar allCompanies={applicationState._companies} updateSortState={handleSort} />
                </div>

                <main className="col-start-2 col-span-5 min-h-screen">
                    <CompanyList companies={applicationState.displayedCompanies} />
                </main>
            </div>

            <div className="bottom-0 w-full z-50">
                <Footer />
            </div>
        </div>
    );
};

export default CompaniesOverview;
