import { Link, NavLink, LinkProps, NavLinkProps } from "react-router-dom";

import { ReactComponent as MainLogoIcon } from "../assets/main-logo.svg";

function NavItem({ className, ...props }: NavLinkProps) {
    return (
        <NavLink className={({ isActive }) => `block ml-6 hover:underline ${isActive ? "font-bold" : ''}`} {...props} />
    );
}

export function PageHeader() {
    return (
        <header className="flex justify-between bg-black rounded-b-xl items-center text-white px-8 py-4 shadow-lg">
            <Link to="/" className="flex items-center hover:underline">
                <MainLogoIcon className="block fill-current text-white h-8 w-auto mr-2" />
                <p className="block text-xl">TETI Resto</p>
            </Link>
            <div className="flex">
                <NavItem to="/karyawan">Karyawan</NavItem>
                <NavItem to="/menu">Menu</NavItem>
            </div>
        </header>
    )
}