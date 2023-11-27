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
import { ApplicationState, initializeApplicationState } from "@/src/types/ApplicationState";
import SortOptions from "@/src/util/sortOptions";

const _allCompanies = companiesJSON.map((company) => new CompanyDecorator(company as CompanyData));

const CompaniesOverview = () => {
    const [applicationState, setApplicationState] = useState<ApplicationState>(initializeApplicationState(_allCompanies));

    const updateDisplayedCompanies = () => {
        let data = applicationState._companies;

        data = sortCompanies(data, applicationState.sortByOption);

        console.log("Update data: ", data);
        setApplicationState({ ...applicationState, displayedCompanies: data });
    };

    useEffect(() => {
        console.log("Use Effect");
        updateDisplayedCompanies();
    }, [applicationState.sortByOption]);

    const handleSort = (sortBy: SortOptions) => {
        console.log("Handle sort: ", sortBy);
        setApplicationState({ ...applicationState, sortByOption: sortBy });
    };

    return (
        <div className="flex flex-col">
            <div className="fixed top-0 w-full z-20">
                <Header updateCompanies={updateDisplayedCompanies} allCompanies={_allCompanies} />
            </div>

            <div className="grid grid-cols-6 mt-20 mb-20 pt-4">
                <div className="fixed top-0 pt-20 h-full col-span-1">
                    <Sidebar updateSortState={handleSort} />
                </div>

                <main className="col-start-2 col-span-5">
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
