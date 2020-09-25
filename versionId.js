const getVersionId = (major, minor, patch, optionalLabel) => {
    // THrows an error if the major, minor and patch numbers are undefined
    if (typeof (major) === 'undefined' || typeof (minor) === 'undefined' || typeof (patch) === 'undefined') {
        throw "Parameter(s) was(were) not passed"
    }
    
    // Thorws an error if the major, minor, patch variables are not varibles
    if (!Number.isInteger(major) || !Number.isInteger(minor) || !Number.isInteger(patch)) {
        throw "major, minor, and patch need to be numbers"
    }

    // Throws an error if the optional label exists but isn't a string
    if( optionalLabel){
        if(typeof optionalLabel !== 'string') throw "The optional label was not a string"
        if(!optionalLabel.match( /^[A-Za-z]+$/)) throw "Was not an alphabetival string"
    }

    let versionId = `v${major}.${minor}.${patch}${optionalLabel ? `-${optionalLabel}` : ''}`
    return versionId
};

console.log(getVersionId(1,2,3,'beta'))

module.exports = getVersionId