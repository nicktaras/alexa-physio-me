// Stores all exercise types

const exerciseStore = {
  'INTRO_LIGHT': {
    type: 'text',
    config: {
      responseType: ':ask',
      text: 'Great. There are 3 activities in this session, heal lifts with both feet, heal lifts with one foot and lastly bottom lifts. Tell me when you are ready to start.'
    }
  },
  'DOUBLE_HEAL_LIFTS_INIT': {
    type: 'text',
    config: {
      responseType: ':ask', 
      text: 'Lets do this. Ok first, find something you can gently place your hands on whilst standing. For example a kitchen side or work top. Tell me when you are ready.'
    }
  },
  'DOUBLE_HEAL_LIFTS': {
    type: 'syncMethod',
    config: {
      method: 'repeatedMiddleStep',
      params: {
        repetitions: 2,
        responseType: ':ask',
        initialInstruction: 'With your legs inline with your hips in a standing position, slowly raise both your heals. ',
        instruction: 'Hold for one, two, three, seconds. Now raise both heals again. Hold for one, two, three, seconds. Then lower them slowly so they are close to touching the ground. ',
        finalInstruction: 'Hold for one, two, three, seconds. Now raise both heals again. Hold for one, two, three, seconds. Then lower them to the ground. And rest. ',
        congratulate: 'Well done! To continue to the next exercise, please tell me when you are ready. Or to re do this exercise say repeat and the number of times you would like to do the exercise. '
      }
    }
  },
  'SINGLE_HEAL_LIFTS_INIT': {
    type: 'text',
    config: {
      responseType: ':ask',
      text: 'Choose either your left or right heal for this exercise. Using something you can gently place your hands on whilst standing. For example a kitchen side or work top. Tell me when you are ready.'
    }
  },
  'SINGLE_HEAL_LIFTS': {
    type: 'syncMethod',
    config: {
      method: 'repeatedMiddleStep',
      params: {
        repetitions: 2,
        responseType: ':ask',
        initialInstruction: 'With your legs inline with your hips in a standing position. Lift your foot off the floor, we won\'t be using this. Now, ',
        instruction: 'Using your foot on the floor, slowly raise your heal. Hold for one, two, three, seconds. Then bring it down close to the floor over one, two, three seconds. Now raise the heal again, and Hold for one, two, three, seconds. ',
        finalInstruction: 'Lastly start to lower your heal to the ground over one, two, three seconds. And rest. ',
        congratulate: 'Well done! To continue to the next exercise, please tell me when you are ready. Or to re do this exercise say repeat and the number of times you would like to do the exercise. '
      }
    }
  },
  'BOTTOM_LIFTS_INIT': {
    type: 'text',
    config: {
      responseType: ':ask',
      text: 'For this exercise, find some space to lay down on the floor with your back and head to the ground. Before we begin, raise your knees half way towards you. Then lower them back downwards slightly. When you are in position, just say ready.'
    }
  },
  'BOTTOM_LIFTS': {
    type: 'syncMethod',
    config: {
      method: 'repeatedMiddleStep',
      params: {
        repetitions: 2,
        responseType: ':ask',
        initialInstruction: 'Great, lets get going. If you can now ',
        instruction: 'Slowly raise your bottom off the ground, towards the level of your knees. Holding. For three, two, one seconds. Ok, now lower your bottom to the ground over the span of three seconds, three, two and one. ',
        finalInstruction: 'Lastly start to lower your heal to the ground over one, two, three seconds. And rest. ',
        congratulate: 'Well done! To continue to the next exercise, please tell me when you are ready. Or to re do this exercise say repeat and the number of times you would like to do the exercise. '
      }
    }
  },
  'END': {
    type: 'text',
    config: {
      responseType: ':ask', 
      text: 'Great work, you\'ve completed this routine. Would you like to repeat this or try something else?'
    }
  }
}

module.exports = exerciseStore;
