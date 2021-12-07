import { Outlet } from "react-router";

import { PageHeader } from "./PageHeader";

export function GenericNonIndexPage({ title }: { title: string }) {
    return (
        <>
            <PageHeader />
            <main className="flex flex-col items-center p-12">
                <h1 className="text-4xl text-center mb-8">{title}</h1>
                <Outlet />
            </main>
        </>
    );
}
