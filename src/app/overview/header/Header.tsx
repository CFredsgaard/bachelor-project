import Link from "next/link";
import Searchbar from "./Searchbar";
import Logo from "./Logo";

const Header = (props: { updateSearchState: (name: string, location: string) => void }) => {
    return (
        <div className="navbar bg-base-100 grid grid-cols-5">
            <div className="col-span-2">
                <Logo />
            </div>

            <div className="self-center col-span-3">
                <Searchbar updateSearchState={props.updateSearchState} />
            </div>
        </div>
    );
};

export default Header;
