import { Outlet } from "react-router";

import { PageHeader } from "./PageHeader";

export function GenericNonIndexPage({ title }: { title: string }) {
    return (
        <>
            <PageHeader />
            <main className="flex flex-col items-center p-12">
                <h1 className="text-4xl text-center mb-4">{title}</h1>
                <p className="text-xs mb-8">Klik item berwarna hijau untuk dapat mengedit item tersebut.</p>
                <Outlet />
            </main>
        </>
    );
}
