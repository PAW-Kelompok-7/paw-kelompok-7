import { createContext, Dispatch, SetStateAction, useContext, useEffect } from "react";

export const pageTitleContext = createContext<{
    pageTitle: string;
    setPageTitle: Dispatch<SetStateAction<string>>
}>({
    pageTitle: '',
    setPageTitle: () => {}
});

// export { pageTitleContext.Provider as PageTitleCOntextProvider, ...? }

// export pageTitleContext.Provider;

export const PageTitleContextProvider = pageTitleContext.Provider;

export function useSetPageTitle(newTitle: string) {
    const { setPageTitle } = useContext(pageTitleContext);

    useEffect(() => {
        setPageTitle(newTitle);
    }, []);
}
