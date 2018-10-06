const conversationStore = require('../conversationStore');

test('ensure the init state is correct in conversationStore', () => {
  const expectedOutput = {
    type: 'text',
    config: {
      responseType: ':ask',
      text: 'Hi, I will be your physio trainer for this session. Which type of work out would you like to do, light or medium.'
    }
  }
  expect(conversationStore['INIT']).toEqual(expectedOutput);
});