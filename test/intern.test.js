const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "UCR";
  const e = new Intern("test", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("test", 1, "test@test.com", "UCR");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCR";
  const e = new Intern("test", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
