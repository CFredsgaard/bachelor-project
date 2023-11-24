import Link from "next/link";
import Searchbar from "./Searchbar";
import CompanyDecorator from "@/app/models/CompanyDecorator";

interface CompanySearchBarProps {
  companies: CompanyDecorator[];
  updateCompanies: (selectedCompanies: CompanyDecorator[]) => void;
}

const Header: React.FC<CompanySearchBarProps> = ({ companies, updateCompanies }) => {
  return (
    <div className="navbar bg-base-100 grid grid-cols-5">
      <div className="col-span-2">
        <Link href="/" className="text-xl ">
          Work Life Balance
        </Link>
      </div>
      <div className="self-center col-span-1">
        <Searchbar updateCompanies={updateCompanies} companies={companies}/>
      </div>
    </div>
  );
};

export default Header;
