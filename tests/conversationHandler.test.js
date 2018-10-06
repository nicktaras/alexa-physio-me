const conversationHandler = require('../conversationHandler');
const conversationStore = require('../conversationStore');

test('ensure conversationHandler returns correct data from store', () => {
  const expectedOutput = {
    responseType: ':ask',
    text: 'Hi, I will be your physio trainer for this session. Which type of work out would you like to do, light or medium.'
  }
  expect(conversationHandler('INIT', conversationStore)).toEqual(expectedOutput);
});