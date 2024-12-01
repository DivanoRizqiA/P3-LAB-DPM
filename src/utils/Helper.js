export const fetchData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' },
            ]);
        }, 2000);
    });
};
