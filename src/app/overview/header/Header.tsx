import Link from "next/link";
import Searchbar from "./Searchbar";

const Header = (props: { updateSearchState: (name: string, location: string) => void }) => {
    return (
        <div className="navbar bg-base-100 grid grid-cols-5">
            <div className="h-full">
                <Link href="/" className="h-full">
                    <p className="text-3xl font-semibold text-slate-700 h-full flex flex-wrap p-4 place-content-evenly">
                        Work Life Balance
                    </p>
                </Link>
            </div>
            <div className="self-center col-start-3 col-span-1">
                <Searchbar updateSearchState={props.updateSearchState} />
            </div>
        </div>
    );
};

export default Header;
