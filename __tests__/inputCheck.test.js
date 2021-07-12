const inputCheck = require('../utils/inputCheck'); //had to change path from '../u-develop-it/utils/inputCheck' to make it work

test('inputCheck() returns null when all properties exist', () => {
  const obj = {name: 'alice'};

  expect(inputCheck(obj, 'name')).toBe(null);
});

test('inputCheck() returns an object when a property is missing', () => {
  const obj = {name: 'alice', occupation: ''};

  expect(inputCheck(obj, 'name', 'occupation')).toEqual(
    expect.objectContaining({
      error: expect.stringContaining('No occupation specified')
    })
  );
});