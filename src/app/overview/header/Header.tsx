import Link from "next/link";
import Searchbar from "./Searchbar";
import CompanyDecorator from "@/src/models/CompanyDecorator";

const Header = (props: { allCompanies: CompanyDecorator[]; updateCompanies: (selectedCompanies: CompanyDecorator[]) => void }) => {
    return (
        <div className="navbar bg-base-100 grid grid-cols-5">
            <div className="h-full">
                <Link href="/" className="h-full">
                    <p className="text-3xl font-bold h-full flex flex-wrap p-4 place-content-evenly">Work Life Balance</p>
                </Link>
            </div>
            <div className="self-center col-span-1">
                <Searchbar updateCompanies={props.updateCompanies} allCompanies={props.allCompanies} />
            </div>
        </div>
    );
};

export default Header;