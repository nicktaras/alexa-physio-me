const routineStore = require('../routineStore');

test('ensure the state is correct in routineStore for LIGHT', () => {
  const expectedOutput = [
    'INTRO_LIGHT',
    'DOUBLE_HEAL_LIFTS_INIT', 
    'DOUBLE_HEAL_LIFTS',
    'SINGLE_HEAL_LIFTS_INIT',
    'SINGLE_HEAL_LIFTS',
    'BOTTOM_LIFTS_INIT',
    'BOTTOM_LIFTS',
    'END'
  ]
  expect(routineStore['LIGHT']).toEqual(expectedOutput);
});
