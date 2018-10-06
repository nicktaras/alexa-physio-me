const exerciseStore = require('../exerciseStore');

test('ensure the state is correct in exerciseStore', () => {
  const expectedOutput = {
    type: 'text',
    config: {
      responseType: ':ask',
      text: 'Great. There are 3 activities in this session, heal lifts with both feet, heal lifts with one foot and lastly bottom lifts. Tell me when you are ready to start.'
    }
  }
  expect(exerciseStore['INTRO_LIGHT']).toEqual(expectedOutput);
});
