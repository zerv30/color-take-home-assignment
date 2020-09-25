const getVersionId = (major, minor, patch, optionalLabel) => {
    if (typeof (major) === 'undefined' || typeof (minor) === 'undefined' || typeof (patch) === 'undefined') {
        throw "Parameter(s) was(were) not passed"
    }
    if (isNaN(major) || isNaN(minor) || isNaN(patch)) {
        throw "Parameter(s) is(are) not a number"
    }
    console.log(isNaN(major, minor, patch))
    // Fill in here
    return `v${major}.${minor}.${patch}${optionalLabel ? `-${optionalLabel}` : ''}`
};

console.log(getVersionId(1, 2, 3, 'alpha'))
console.log(getVersionId(3, 5, 4))

try {
    console.log(getVersionId('apple', 5, 4))

} catch (e) {
    console.error(e)
}
try {
    console.log(getVersionId(3, 'apple', 4))
} catch (e) {
    console.error(e)
}
