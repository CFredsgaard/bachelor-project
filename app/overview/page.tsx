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
        <>
            <Header />

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                {/** Main content of page */}
                <div className="drawer-content flex flex-col items-center justify-center">
                    <main className="p-4">
                        <CompanyList companies={displayedCompanies} />
                    </main>
                </div>

                {/* Sidebar */}
                <div className="drawer-side">
                    <Sidebar />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CompaniesOverview;
