import { render } from "react-dom";
import { StrictMode } from "react";

import { Main } from "./Main";

render(
    <StrictMode>
        <Main />
    </StrictMode>,
    document.getElementById('root')
);
