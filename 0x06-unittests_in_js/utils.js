// Create a new file named utils.js
// Create a new module named Utils
// Create a property named calculateNumber and paste your previous code in the function
// Export the Utils module

const Utils = {
    calculateNumber(type, a, b) {
        if (type === 'SUM') {
            return Math.round(a) + Math.round(b);
        }
        if (type === 'SUBTRACT') {
            return Math.round(a) - Math.round(b);
        }
        if (type === 'DIVIDE') {
            if (Math.round(b) === 0) {
                return 'Error';
            }
            return Math.round(a) / Math.round(b);
        }
    }
};

module.exports = Utils;
