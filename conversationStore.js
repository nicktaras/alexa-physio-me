// Stores conversation

const conversationStore = {
  'INIT': { 
    type: 'text',
    config: {
      responseType: ':ask',
      text: 'Hi, I will be your physio trainer for this session. Which type of work out would you like to do, light or medium.'
    }
  }
}

module.exports = conversationStore;
