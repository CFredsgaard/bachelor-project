import Link from "next/link";
import Searchbar from "./Searchbar";

const Header = (props: { updateSearchState: (name: string, location: string) => void }) => {
    return (
        <div className="navbar bg-base-100 grid grid-cols-5">
            <div className="h-full col-span-2">
                <Link href="/" className="h-full">
                    <img src="/icons/logohorizontal.svg" alt="Logo" className="h-full" />
                </Link>
            </div>
            <div className="self-center col-span-3">
                <Searchbar updateSearchState={props.updateSearchState} />
            </div>
        </div>
    );
};

export default Header;
