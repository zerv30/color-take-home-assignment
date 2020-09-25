const  getversionId = require("./versionId");

test('properly combines major,minor and patch numbers', ()=>{
    expect(getversionId(1,3,5)).toBe('v1.3.5')
})

test('properly combines major,minor and patch numbers with the optional', ()=>{
    expect(getversionId(2,2,1,'alpha')).toBe('v2.2.1-alpha')
})


test('Throws an eroor fi there called with no arguments', ()=>{

    expect(() => getversionId()).toThrow("Parameter(s) was(were) not passed");

})


test('Throws an eroor fi there called with no arguments', ()=>{

    expect(() => getversionId()).toThrow("Parameter(s) was(were) not passed");

})

test('Throws an eroor if the major, minor, and/or patch variables aren\'t numbers  ', ()=>{

    expect(() => getversionId('1','two','twelve')).toThrow("major, minor, and patch need to be numbers");

})

test('bewbs  ', ()=>{

    expect(() => getversionId(1,2,3,12)).toThrow("The optional label was not a string");

})