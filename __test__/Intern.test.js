const Intern = require("../lib/Intern")

test("Can create new intern", () => {
    const intern = new Intern()
    expect(typeof(intern)).toBe("object")
})