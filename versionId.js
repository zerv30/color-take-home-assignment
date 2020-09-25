const getVersionId = (major, minor, patch, optionalLabel) => {
    // Throws an error if the major, minor and patch numbers are undefined
    if (typeof (major) === 'undefined' || typeof (minor) === 'undefined' || typeof (patch) === 'undefined') {
        throw "Parameter(s) was(were) not passed"
    }

    // Thorws an error if the major, minor, patch variables are not numbers
    if (!Number.isInteger(major) || !Number.isInteger(minor) || !Number.isInteger(patch)) {
        throw "major, minor, and patch need to be numbers"
    }

    // Throws an error if the optional label exists 
    if (optionalLabel !== undefined) {
        // Throws error if the optional label is not a string
        if (typeof optionalLabel !== 'string') throw "The optional label is not a string"
        
        // Throws an error if the optional label if it is a string but it contains numbers or special characters
        if (!optionalLabel.match(/^[A-Za-z]+$/)) throw "The optional label is not an alphabetical string"
    }

    let versionId = `v${major}.${minor}.${patch}${optionalLabel ? `-${optionalLabel}` : ''}`
    return versionId
};

// console.log(getVersionId(1, 2, 3, 'beta'))

module.exports = getVersionId