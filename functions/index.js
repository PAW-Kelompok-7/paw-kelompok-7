import { Router } from "express";

export const router = Router();

// export const db?

export { db } from "../utils/db-setup.js";

// Temporary workaround to make sure that the functions are run first before the main entry point
for (const func of ["karyawan", "menu"]) {
    for (const action of ["create", "read", "update", "delete"]) {
        /*await*/ import(`./${func}/${action}.js`);
    }
}
