const Engineer = require('../lib/Engineer')

test("Can create new engineer", () => {
    const engineer = new Engineer()
    expect(typeof(engineer)).toBe("object")
})