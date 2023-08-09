module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    const res = [];
    let isBack = false;

    for (let row of matrix) {
        if (isBack) {
            res.push(...row.reverse());
        } else {
            res.push(...row);
        }

        isBack = !isBack;
    }

    return res;
};
