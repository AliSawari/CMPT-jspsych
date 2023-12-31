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
    console.log(jsPsych.data.allData);
    if (jsPsych.data.allData.trials && jsPsych.data.allData.trials.length) {
      sendData(jsPsych.data.allData.trials);
    } else console.error('trial data is missing!');
  }
})

function check_consent(elem) {
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
    'media/bank10.mp3', 'media/load11.mp3', 'media/rock12.mp3', 'media/pick13.mp3', 'media/stay14.mp3,',
    'media/band15.mp3', 'media/term16.mp3', 'media/tape17.mp3', 'media/port18.mp3', 'media/case19.mp3', 'media/clip20.mp3']
}

const welcome_trial_2a = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: ['<span class="text">Welcome to this experiment.</span>'],
  trial_duration: 3000
}

const welcome_trial_2b = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<span class="text">Your participation in this task is highly appreciated.</span><span class="text">Please make sure that you have a strong internet connection.</span>',
  trial_duration: 8000
}

var name_trial_3 = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: '<span class="textnorm">Please enter your full name.</span>',
      required: true
    },
    {
      prompt: '<span class="textnorm">Please enter your age.</span>',
      required: true
    }
  ],
  button_label: 'Next'
}

const pre_trial_5 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<span class="textnorm">Thank you. In this experiment you will hear 20 sentences each containing an ambiguous word. Then you will be asked to distinguish between the two meanings of that word which will be presented to you on the screen and tap the one that best suits the context of the sentence as fast as possible. You are supposed to undergo this task in a quiet setting with no distractions and hence full concentration.</span><span class= "textnorm">Please turn up the volume of your device for better perception of the auditory stimulus.</span><span class= "textnorm">Tap "Next" for a test trial.</span>',
  choices: ['<span class="textnorm">Next</span>']
}

const sound_trial_6 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/Test0.mp3',
  choices: ['<span class= "textnorm">an appointment to meet</span>', '<span class= "textnorm">time of an event</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, date means:</span>',
  response_allowed_while_playing: false
}

const test_trial_7 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<span class="textnorm">Well done. Please tap "Start" to begin the main experiment.</span>',
  choices: ['<span class="textnorm">Start</span>']
}

const sound_trial_9 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/yard1.mp3',
  choices: ['<span class= "textnorm">a measure of distance</span>', '<span class= "textnorm">an area of land</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, yard means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_10 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/toll2.mp3',
  choices: ['<span class= "textnorm">a tax or fee</span>', '<span class= "textnorm">a grievous price</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, toll means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_11 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/beam3.mp3',
  choices: ['<span class= "textnorm">a piece of metal to support the roof</span>', '<span class= "textnorm">a ray or shaft of light</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, beam means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_12 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/sing4.mp3',
  choices: ['<span class= "textnorm">make musical sounds with the voice</span>', '<span class= "textnorm">make a high-pitched whistling sound</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, sing means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_13 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/cell5.mp3',
  choices: ['<span class= "textnorm">the smallest functional unit of an organism</span>', '<span class= "textnorm">a small room to keep a prisoner</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, cell means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_14 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/lock6.mp3',
  choices: ['<span class= "textnorm">a fastening for a door</span>', '<span class= "textnorm">a curl of the hair</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, lock means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_15 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/cast7.mp3',
  choices: ['<span class= "textnorm">cause to appear on a surface</span>', '<span class= "textnorm">cause to move by throwing</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, cast means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_16 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/draw8.mp3',
  choices: ['<span class= "textnorm">to produce a representation of something</span>', '<span class= "textnorm">to cause to come out of a container or source</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, draw means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_17 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/cold9.mp3',
  choices: ['<span class= "textnorm">an uncomfortably low temperature</span>', '<span class= "textnorm">an infection caused by virus</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, cold means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_18 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/bank10.mp3',
  choices: ['<span class= "textnorm">the edge of a river</span>', '<span class= "textnorm">a financial institution</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, bank means:</span>',
  response_allowed_while_playing: false
}



const sound_trial_19 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/load11.mp3',
  choices: ['<span class= "textnorm">fill a container with large amount of something</span>', '<span class= "textnorm">charge a fiearm with ammunition</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, load means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_20 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/rock12.mp3',
  choices: ['<span class= "textnorm">a piece of stone</span>', '<span class= "textnorm">a music genre</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, rock means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_21 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/pick13.mp3',
  choices: ['<span class= "textnorm">removing obstructions from nostrils</span>', '<span class= "textnorm">to take some things and leave others</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, pick means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_22 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/stay14.mp3',
  choices: ['<span class= "textnorm">to live in a place for a short time as a visitor</span>', '<span class= "textnorm">to continue to be in a particular state</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, stay means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_23 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/band15.mp3',
  choices: ['<span class= "textnorm">a group of musicians who play together</span>', '<span class= "textnorm">a thin and flat piece of material to put around something</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, band means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_24 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/term16.mp3',
  choices: ['<span class= "textnorm">a period of time at school or college</span>', '<span class= "textnorm">a word or expression</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, term means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_25 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/tape17.mp3',
  choices: ['<span class= "textnorm">magnetic strip to record media on</span>', '<span class= "textnorm">a sticky strip of material</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, tape means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_26 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/port18.mp3',
  choices: ['<span class= "textnorm">a town by the sea that has a harbor</span>', '<span class= "textnorm">a strong, sweet wine made in Portugal</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, port means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_27 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/case19.mp3',
  choices: ['<span class= "textnorm">a series of events being dealt by the police</span>', '<span class= "textnorm">a container or box for storing something in</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, case means:</span>',
  response_allowed_while_playing: false
}

const sound_trial_28 = {
  type: jsPsychAudioButtonResponse,
  stimulus: 'media/clip20.mp3',
  choices: ['<span class= "textnorm">a short part of a film or television programme</span>', '<span class= "textnorm">a small object for holding things in position</span>'],
  prompt: '<span class= "textnorm"> </span><span class= "textnorm">In this sentence, clip means:</span>',
  response_allowed_while_playing: false
}

const end_trial = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<span class="text">Thank you very much for your time.</span>',
  choices: ['<span class="textnorm">Submit Responses</span>'],
  trial_duration: 6000
}

const allTrials = [
  consent_trial,
  welcome_trial_2a,
  welcome_trial_2b,
  name_trial_3,
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
  sound_trial_19,
  sound_trial_20,
  sound_trial_21,
  sound_trial_22,
  sound_trial_23,
  sound_trial_24,
  sound_trial_25,
  sound_trial_26,
  sound_trial_27,
  sound_trial_28,
  end_trial
]

jsPsych.run(allTrials);