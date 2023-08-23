async function sendData(data) {
  const result = await fetch(`/results`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (result.ok) {
    const json = await result.json();
    console.log(json);
  }
}



const jsPsych = initJsPsych({
  on_finish: function () {
    console.log(jsPsych.data.allData, jsPsych.data.interactionData);
    sendData({
      allData: jsPsych.data.allData,
      interactionData: jsPsych.data.interactionData
    });
  }
})

function check_consent (elem) {
  if (document.getElementById('consent_checkbox').checked) {
    return true;
  }
  else {
    alert("If you wish to participate, you must check the box next to the statement 'I agree to participate in this study.'");
    return false;
  }
};

const consent_trial = {
  type: jsPsychExternalHtml,
  url: "consent.html",
  cont_btn: "start",
  check_fn: check_consent
};


const preload_trial_1 = {
  type: jsPsychPreload,
  audio: ['media/Test0.mp3', 'media/yard1.mp3', 'media/toll2.mp3', 'media/beam3.mp3', 'media/sing4.mp3',
    'media/cell5.mp3', 'media/lock6.mp3', 'media/cast7.mp3', 'media/draw8.mp3', 'media/cold9.mp3',
    'media/bank10.mp3']
}

const welcome_trial_2a = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: ['<span class="text">Welcome to this experiment.</span>'],
  trial_duration: 3000
}

const welcome_trial_2b = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<span class="text">Your participation in this task is highly appreciated.</span>',
  trial_duration: 4000
}

var name_trial_3 = {
  type: jsPsychSurveyText,
  questions: [
    { prompt: '<span class="text">Please enter your full name.</span>',
      required: true }
  ]
}

var age_trial_4 = {
  type: jsPsychSurveyText,
  questions: [
    { prompt: '<span class="text">Please enter your age.</span>',
      required: true }
  ]
}

const pre_trial_5 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<span class="text25">Thank you. In this experiment you will hear 20 sentences each containing an ambiguous word. Then you will be asked to distinguish between the two meanings of that word which will be presented to you on the screen and tap the one that best suits the context of the sentence as fast as possible. You are supposed to undergo this task in a quiet setting with no distractions and hence full concentration.</span><span class= "text25_and_enter">Please turn up the volume of your device for better perception of the auditory stimulus.</span><span class= "text25_and_enter">Tap "Next" for a test trial.</span>',
  choices: ['<span class="text25">Next</span>']
}

const sound_trial_6 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/Test0.mp3',
  choices: ['<span class= "text30">an appointment to meet</span>', '<span class= "text30">time of an event</span>'],
  prompt: '<span class= "text31"> </span><span class= "text30">In this sentence, date means:</span>',
  response_allowed_while_playing: false
}

const test_trial_7 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<span class="text25">Well done. Please tap "Start" to begin the main experiment.</span>',
  choices: ['<span class="text25">Start</span>']
}

const sound_trial_9 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/yard1.mp3',
  choices: ['a measure of distance', 'an area of land'],
  prompt: 'In this sentence, yard means:',
  response_allowed_while_playing: false
}

const sound_trial_10 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/toll2.mp3',
  choices: ['a tax or fee', 'a grievous price'],
  prompt: 'In this sentence, toll means:',
  response_allowed_while_playing: false
}

const sound_trial_11 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/beam3.mp3',
  choices: ['a piece of metal to support the roof', 'a ray or shaft of light'],
  prompt: 'In this sentence, beam means:',
  response_allowed_while_playing: false
}

const sound_trial_12 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/sing4.mp3',
  choices: ['make musical sounds with the voice', 'make a high-pitched whistling sound'],
  prompt: 'In this sentence, sing means:',
  response_allowed_while_playing: false
}

const sound_trial_13 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/cell5.mp3',
  choices: ['the smallest functional unit of an organism', 'a small room to keep a prisoner'],
  prompt: 'In this sentence, cell means:',
  response_allowed_while_playing: false
}

const sound_trial_14 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/lock6.mp3',
  choices: ['a fastening for a door', 'a curl of the hair'],
  prompt: 'In this sentence, lock means:',
  response_allowed_while_playing: false
}

const sound_trial_15 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/cast7.mp3',
  choices: ['cause to appear on a surface', 'cause to move by throwing'],
  prompt: 'In this sentence, cast means:',
  response_allowed_while_playing: false
}

const sound_trial_16 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/draw8.mp3',
  choices: ['to produce a representation of something', 'to cause to come out of a container or source'],
  prompt: 'In this sentence, draw means:',
  response_allowed_while_playing: false
}

const sound_trial_17 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/cold9.mp3',
  choices: ['an uncomfortably low temperature', 'an infection caused by virus'],
  prompt: 'In this sentence, cold means:',
  response_allowed_while_playing: false
}

const sound_trial_18 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/bank10.mp3',
  choices: ['the edge of a river', 'a financial institution'],
  prompt: 'In this sentence, bank means:',
  response_allowed_while_playing: false
}



const end_trial = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: ['<span class="text">Thank you very much for your time.</span>'],
  trial_duration: 6000
}

const allTrials = [
  consent_trial,
  welcome_trial_2a,
  welcome_trial_2b,
  name_trial_3,
  age_trial_4,
  pre_trial_5,
  sound_trial_6,
  test_trial_7,
  sound_trial_9,
  sound_trial_10,
  sound_trial_11,
  sound_trial_12,
  sound_trial_13,
  sound_trial_14,
  sound_trial_15,
  sound_trial_16,
  sound_trial_17,
  sound_trial_18,
  end_trial
]

jsPsych.run(allTrials);