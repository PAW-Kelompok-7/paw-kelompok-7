import { Link, LinkProps } from "react-router-dom";

import { ReactComponent as MainLogo } from "../assets/main-logo.svg";

function LinkButton({ className, ...props }: LinkProps) {
    return (
        <Link className="px-4 py-2 button shadow-lg bg-white mx-2" {...props} />
    );
}

export function HomePage() {
    return (
        <main className="flex flex-col items-center min-h-screen justify-center">
            <MainLogo className="block mb-8" />
            <h1 className="text-6xl font-bold mb-4">TETI Resto</h1>
            <p className="text-3xl mb-8">Dasbor</p>
            <div className="flex">
                <LinkButton to="/karyawan">Karyawan</LinkButton>
                <LinkButton to="/menu">Menu</LinkButton>
            </div>
        </main>
    );
}
