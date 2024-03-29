/* eslint-disable */
function cleanSet(set, startString) {
    if (!startString || !startString.trim()) {
        return '';
    }
    let result = '';
    for (const item of set) {
        if (item && item.startsWith(startString)) {
            result += `${item.slice(startString.length)}-`;
        }
    }
    return result.slice(0, -1);
}

export default cleanSet;
