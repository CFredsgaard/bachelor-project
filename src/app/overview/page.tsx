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
import locationFilterCompanies from "@/src/util/filterLocations";
import sliderFilterCompanies from "@/src/util/filterSlider";

// All the companies from the json file
const _allCompanies = companiesJSON.map((company) => new CompanyDecorator(company as CompanyData));

const CompaniesOverview = () => {
    // State to track all changes trickered by user interaction with the UI
    const [applicationState, setApplicationState] = useState<ApplicationState>(initializeApplicationState(_allCompanies));

    // Update displayed companies based on the applicationState
    const updateDisplayedCompanies = () => {
        let companies: CompanyDecorator[] = applicationState._companies;

        companies = sortCompanies(companies, applicationState.sortByOption);
        companies = searchCompanies(companies, applicationState.searchCompanyName, applicationState.searchCompanyLocation);
        companies = locationFilterCompanies(companies, applicationState.filterLocations);
        companies = sliderFilterCompanies(companies, applicationState.filterSliders);

        // Set the new state
        setApplicationState({ ...applicationState, displayedCompanies: companies });
    };

    useEffect(() => {
        updateDisplayedCompanies();
    }, [
        applicationState.sortByOption,
        applicationState.searchCompanyName,
        applicationState.searchCompanyLocation,
        applicationState.filterLocations,
        applicationState.filterSliders,
    ]);

    const handleSort = (sortBy: SortOptions) => {
        setApplicationState({ ...applicationState, sortByOption: sortBy });
    };

    const handleSearch = (name: string, location: string) => {
        setApplicationState({ ...applicationState, searchCompanyName: name, searchCompanyLocation: location });
    };

    const handleLocationFilter = (locations: string[]) => {
        setApplicationState({ ...applicationState, filterLocations: locations });
    };

    const handleSliderFilter = (sliders: ApplicationState["filterSliders"]) => {
        setApplicationState({ ...applicationState, filterSliders: sliders });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="fixed top-0 w-full z-20">
                <Header updateSearchState={handleSearch} />
            </div>

            <div className="grid grid-cols-6 mt-20 mb-20 pt-4">
                <div className="fixed top-0 pt-20 h-full col-span-1">
                    <Sidebar
                        allCompanies={applicationState._companies}
                        updateSortState={handleSort}
                        updateLocationFilterState={handleLocationFilter}
                        updateSlidersFilterState={handleSliderFilter}
                    />
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
