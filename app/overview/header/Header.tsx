import Link from "next/link";

const Header = () => {
    return (
        <div className="navbar bg-base-100 grid grid-cols-5">
            <div className="col-span-2">
                <Link href="/" className="text-xl ">
                    Work Life Balance
                </Link>
            </div>
            <div className="self-center col-span-1">
                <input
                    type="text"
                    placeholder="Not yet implemented"
                    className="input input-bordered input-primary input-md w-full max-w-xs"
                />
                <button className="btn btn-outline btn-primary btn-md m-2">Search</button>
            </div>
        </div>
    );
};

export default Header;
