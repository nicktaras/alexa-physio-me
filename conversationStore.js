// Stores conversation

const conversationStore = {
  'INIT': function () {
    return { 
      type: 'text',
      config: {
        responseType: ':ask',
        text: 'Hi, I will be your physio trainer for this session. Which type of work out would you like to do, light or medium.'
      }
    }
  }
}

export default conversationStore;
