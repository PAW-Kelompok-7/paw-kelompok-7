export function EditableCellItem<ItemDataType>({ children: existingData, dataTitle, accompanyingData, updateUrl, onUpdatedCallback }: {
    children: string;
    dataTitle: string;
    accompanyingData: ItemDataType;
    updateUrl: RequestInfo;
    onUpdatedCallback: () => void;
}) {
    async function updateData(newData: string/* we're basically assuming the type here */) {
        await fetch(updateUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...accompanyingData,
                [dataTitle]: newData
            })
        });
        onUpdatedCallback();
    }

    function onClickHandling() {
        const newInputtedData = prompt(`Masukkan '${dataTitle}' yang baru:`, existingData);
        if (!newInputtedData) {
            // onClickHandling();
            return;
        }
        updateData(newInputtedData);
    }

    return (
        <td className="underline text-green-600 cursor-pointer hover:text-green-500" onClick={onClickHandling}>
            {existingData}
        </td>
    );
}
