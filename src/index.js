module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix.reduce((acc, row, i) => {
        return !(i % 2) ? [...acc, ...row] : [...acc, ...row.reverse()];
    }, []);
}
