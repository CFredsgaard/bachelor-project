import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center">
            <img src="/icons/logo.svg" alt="Logo" className="w-1/6 ml-2" />

            <img src="/icons/name_dark.svg" alt="Name" className=" w-1/2" color="#EEEEEE" />
        </Link>
    );
};

export default Logo;
