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
  'DOUBLE_HEAL_LIFTS_START': {
    type: 'syncMethod',
    config: {
      method: doubleHealLifts,
      params: {
        repetitions: 2,
        initialInstruction: 'With your legs inline with your hips in a standing position, slowly raise both your heals. ',
        instruction: 'Hold for one, two, three, seconds. Now raise both heals again. Hold for one, two, three, seconds. Then lower them slowly so they are close to touching the ground. ',
        finalInstruction: 'Hold for one, two, three, seconds. Now raise both heals again. Hold for one, two, three, seconds. Then lower them to the ground. And rest. ',
        congratulate: 'Well done! To continue to the next exercise, please tell me when you are ready. Or to re do this exercise say repeat and the number of times you would like to do the exercise. '
      }
    }
  },
  'SINGLE_HEAL_LIFTS': {
    type: 'text',
    config: {
      responseType: ':ask', 
      text: 'tbc'
    }
  },
  'DOUBLE_BOTTOM_LIFTS': {
    type: 'text',
    config: {
      responseType: ':ask', 
      text: 'tbc'
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

export default exerciseStore;
