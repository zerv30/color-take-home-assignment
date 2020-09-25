const  getVersionId = require("./versionId");

test('properly combines major,minor and patch numbers', ()=>{
    expect(getVersionId(1,3,5)).toBe('v1.3.5')
})

test('properly combines major,minor and patch numbers with the optional', ()=>{
    expect(getVersionId(2,2,1,'alpha')).toBe('v2.2.1-alpha')
})


test('Throws an error if at least of the first three arguments are missing', ()=>{

    expect(() => getVersionId()).toThrow("Parameter(s) was(were) not passed");
    expect(() => getVersionId(2)).toThrow("Parameter(s) was(were) not passed");
    expect(() => getVersionId(1,2)).toThrow("Parameter(s) was(were) not passed");
})




test('Throws an error if the major, minor, and/or patch variables aren\'t numbers  ', ()=>{

    expect(() => getVersionId('1','two','twelve')).toThrow("major, minor, and patch need to be numbers");

})

test('Throws an error if the optional label is not a string  ', ()=>{

    expect(() => getVersionId(1,2,3,false)).toThrow("The optional label is not a string");
    expect(() => getVersionId(1,2,3,12)).toThrow("The optional label is not a string");

})


test('Throws an error if the optional label is not a string  ', ()=>{

    expect(() => getVersionId(1,2,3,'13')).toThrow("The optional label is not an alphabetical string");
    
})