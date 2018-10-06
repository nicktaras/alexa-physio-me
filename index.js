'use strict';

const Alexa = require('alexa-sdk');
const APP_ID = undefined;

// App model data:
// Conversation to drive application
const conversationStore = require('./conversationStore');
// Exercise steps
const exerciseStore = require('./exerciseStore');
// Collections of exercises that make up a routine
const routinesStore = require('./routineStore');

// such as LIGHT, MEDIUM
let exerciseType = undefined; 

// current routine step index
let exerciseStep = 0; 

// Used to handle conversation
function conversationHandler(state = '') {
  let responseData = conversationStore(state);
  if (responseData.config.type === 'text'){
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

// Returns the current exercise State e.g. 'HEAL_LIFT_INIT'
function getExerciseState() {
  return routinesStore[exerciseType][exerciseStep];
}

function exerciseHandler() {
  let currExerciseState = getExerciseState(); 
  let responseData = exerciseStore[currExerciseState];
  if (responseData.config.type === 'text'){
    /*
      returns:
      { 
        responseType: (string),
        text: (string) 
      }
    */
    return responseData.config;
  }
  if (response.type === 'syncMethod'){
    return responseData.config['method'](responseData.config.params);
  }
}

const handlers = {
  'LaunchRequest': function () {
    let initialResponse = conversationHandler('INIT');
    this.emit(initialResponse.responseType, initialResponse.text);
  },
  'lightIntent': function () {
    EXERCISE_TYPE = 'LIGHT'; 
    this.emit(':ask', exerciseHandler());
    incrementExerciseStep();
  },
  'mediumIntent': function () {
    EXERCISE_TYPE = 'MEDIUM';
    this.emit(':ask', 'I am not able to train medium yet, please say light if you wish to do this exercise instead.');
  },
  'readyIntent': function () {
    this.emit(':ask', exerciseHandler());
    incrementExerciseStep();
  },
  'repeatIntent': function () {
    let incrementExerciseBy = this.event.request.intent.slots.number.value;
  }
};

exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
    
function doubleHealLifts(params) {

  const { repetitions, 
          initialInstruction,  
          instruction,
          finalInstruction,
          congratulate
  } = params;

  let output = initialInstruction;

  for (var i = 1; i < repetitions; i++) {
    if (i < repetitions - 1) {
      output += instruction;
    } else {
      output += finalInstruction;
      output += congratulate;
    }
  }
  
  return output;
    
}
    
function reset () {
  exerciseStep = 0;
}

function incrementExerciseStep () {
  if (exerciseStep) exerciseStep ++;
  else exerciseStep = 0;
}