
// save data
function saveDataToKey(key: string, data: string) {
    try {
        localStorage.setItem(key, data);
    } catch (error) {
        console.log(error);
    }
}

// get data from key
async function getDataByKey(key: string) {
    return localStorage.getItem(key);
}

function clearDataOfKey(key: string) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
}

function clearDataOfListKey(listKey: string[]) {
    try {
        localStorage.multiRemove(listKey);
    } catch (err) {
        console.log(err);
    }
}

export default {
    saveDataToKey,
    getDataByKey,
    clearDataOfKey,
    clearDataOfListKey
};
