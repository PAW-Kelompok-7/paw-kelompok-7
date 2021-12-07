import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GenericNonIndexPage } from "./components/GenericNonIndexPage";


import "./main.css";
import { HomePage } from "./pages/home";
import { KaryawanListingPage } from "./pages/karyawan-listing";
import { PageTitleContextProvider } from "./utils/page-title-context";


export function Main() {
    const [pageTitle, setPageTitle] = useState<string>('');

    return (
        <BrowserRouter>
            <PageTitleContextProvider value={{ pageTitle, setPageTitle }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/" element={<GenericNonIndexPage title={pageTitle} />}>
                        <Route path="karyawan" element={<KaryawanListingPage />} />
                        <Route path="menu" element={null} />
                        {/* <Route element={<p>Hello!!!</p>} /> */}
                    </Route>
                </Routes>
            </PageTitleContextProvider>
        </BrowserRouter>
    );
}
