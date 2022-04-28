const Manager  = require("../lib/Manager")

test("Can create new Manager", () => {
    const manager = new Manager()
    expect(typeof(manager)).toBe("object")
})