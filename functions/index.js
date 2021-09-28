export default async function aggregated(appInstance, dbInstance) {
    for (const func of ["karyawan", "menu"]) {
        for (const action of ["create", "read", "update", "delete"]) {
            (await import(`./${func}/${action}.js`)).default(appInstance, dbInstance);
        }
    }
}
