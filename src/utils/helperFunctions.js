export const sortHandler = (arrayToSort, isSorted) => {
    const copyArrayToSort = [...arrayToSort];
    console.log(arrayToSort);
    console.log(isSorted);
    if (!isSorted) {
        const sorted = copyArrayToSort.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        return sorted;

    } else if (isSorted) {
        const sorted = copyArrayToSort.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
        });
        return sorted;
    }
}