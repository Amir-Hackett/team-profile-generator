const Employee = require('../lib/Employee')

test("Can create new employee", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
})