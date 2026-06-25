const relaxationTips = [
  'Take 3 deep breaths, inhaling slowly through your nose and exhaling through your mouth.',
  'Take a short walk outside and notice the colors and sounds around you.',
  'Write down one small thing you are grateful for today.',
  'Listen to a calm song for 5 minutes and focus on your breathing.',
  'Try a 2-minute body scan: relax your feet, legs, torso, and face in sequence.'
];

const supportiveReplies = {
  negative: [
    'I’m sorry you’re going through this. You’re not alone, and it’s okay to feel how you feel.',
    'That sounds really hard. I’m here to listen, and taking this step to talk is strong.',
    'It’s understandable to feel overwhelmed. Let’s take it one moment at a time together.'
  ],
  neutral: [
    'Thanks for sharing that with me. I’m here to support you however you need.',
    'You’re doing a good job checking in with yourself. That awareness is important.',
    'I’m listening. If you want, we can turn this into a quick relaxation check-in.'
  ],
  positive: [
    'That’s wonderful to hear. Keep holding on to those positive moments.',
    'I’m glad you’re feeling good. Let’s build on that calm and keep you grounded.',
    'You’re doing great. Celebrating small wins is a really healthy habit.'
  ]
};

const motivationalMessages = {
  negative: [
    'Remember that even small steps toward self-care matter. You are capable of handling this.',
    'You deserve compassion and kindness, especially from yourself.',
    'Every difficult day is still a day you showed up. That is meaningful.'
  ],
  neutral: [
    'It’s okay to move at your own pace. Gentle progress is still progress.',
    'Taking a moment for yourself is a strong and meaningful choice.',
    'You are allowed to rest and recharge when you need it.'
  ],
  positive: [
    'Keep using the energy you have for healthy habits and self-kindness.',
    'Your self-awareness is a powerful tool. Keep listening to yourself.',
    'This feeling matters. Keep building routines that support it.'
  ]
};

function chooseRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function buildBotResponse(message, moodData) {
  const mood = moodData.mood;
  const supportive = chooseRandom(supportiveReplies[mood]);
  const motivational = chooseRandom(motivationalMessages[mood]);
  const tip = chooseRandom(relaxationTips);

  const responseText = `${supportive} ${motivational} Here is a relaxation tip you can try: ${tip}`;

  return {
    responseText,
    mood,
    tip,
    motivationalMessage: motivational
  };
}

module.exports = { buildBotResponse, relaxationTips };
