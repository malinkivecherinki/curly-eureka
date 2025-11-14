// Utility functions for data manipulation
function formatData2(data) {
    if (typeof data === 'string') {
        return data.toUpperCase();
    }
    if (Array.isArray(data)) {
        return data.map(item => formatData2(item));
    }
    return data;
}

function validateInput(input) {
    if (!input || input.trim() === '') {
        throw new Error('Input cannot be empty');
    }
    return input.trim();
}

module.exports = { formatData2, validateInput };


// Update 14
function newFunction14() {
    return 14;
}


// Update 16
function newFunction16() {
    return 16;
}


// Update 18
function newFunction18() {
    return 18;
}
