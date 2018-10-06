// Used to handle conversation
conversationHandler = (state, conversationStore) => {
  let responseData = conversationStore[state];
  if (responseData.type === 'text'){
    /*
      returns:
      { 
        responseType: (string),
        text: (string) 
      }
    */
    return responseData.config;
  }
}

module.exports = conversationHandler;