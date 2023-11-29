import Link from "next/link";
import Searchbar from "./Searchbar";
import CompanyDecorator from "@/src/models/CompanyDecorator";

const Header = (props: {
  allCompanies: CompanyDecorator[];
  updateCompanies: (selectedCompanies: CompanyDecorator[]) => void;
  updateShouldSort: (shouldSort: boolean) => void;
}) => {
  return (
    <div className="navbar bg-base-100 grid grid-cols-5">
      <div className="h-full">
        <Link href="/" className="h-full">
          <img
            src="/icons/logo overview.svg"
            alt="Logo"
            className="w-40 h-14"
          />
        </Link>
      </div>
      <div className="self-center col-span-1">
        <Searchbar
          updateCompanies={props.updateCompanies}
          allCompanies={props.allCompanies}
          updateShouldSort={props.updateShouldSort}
        />
      </div>
    </div>
  );
};

export default Header;
