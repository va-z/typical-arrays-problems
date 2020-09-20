exports.min = function min(array) {
    if (!array) return 0;
    else
        return array.reduce((acc, i) => {
            if (i < acc) acc = i;
            return acc;
        }, 0);
};

exports.max = function max(array) {
    if (!array) return 0;
    else
        return array.reduce((acc, i) => {
            if (i > acc) acc = i;
            return acc;
        }, 0);
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) return 0;
    else return array.reduce((acc, i) => acc + i, 0) / array.length;
};
