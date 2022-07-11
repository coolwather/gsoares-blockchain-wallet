const { version } = require('./constants/variables');

/**
 * Get Module version
 * @return [string] software version
 */
function getVersion() {
    return version;
}

module.exports = {
    getVersion
}
