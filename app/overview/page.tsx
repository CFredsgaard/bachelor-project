"use client";

import { useState } from "react";

import companiesJSON from "../data/companies.json";
import CompanyDecorator from "../models/CompanyDecorator";
import CompanyData from "../types/CompanyData";
import CompanyList from "./displayCompanies/CompanyList";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

let _companies = companiesJSON.map((company) => new CompanyDecorator(company as CompanyData));

const CompaniesOverview = () => {
    const [displayedCompanies, setDisplayedCompanies] = useState<CompanyDecorator[]>(_companies);
    const updateDisplayedCompanies = (selectedCompanies: CompanyDecorator[]) => setDisplayedCompanies(selectedCompanies);

    return (
        <div className="">
            <div className="fixed top-0 w-full z-20">
                <Header />
            </div>

            <div className="grid grid-cols-6 mt-20 mb-20 pt-4">
                <div className="fixed top-0 pt-20 h-full z-10 col-span-1">
                    <Sidebar companies={displayedCompanies} updateCompanies={updateDisplayedCompanies} />
                </div>

                <main className="col-start-2 col-span-5">
                    <CompanyList companies={displayedCompanies} />
                </main>
            </div>

            <div className="bottom-0">
                <Footer />
            </div>
        </div>
    );
};

export default CompaniesOverview;
