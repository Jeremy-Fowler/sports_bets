let money = 100

const players = [
  {
    name: 'Bad Lizard',
    teamNumber: 0,
    emoji: '👨‍🌾',
    power: 100
  },
  {
    name: 'Tree Hater',
    teamNumber: 0,
    emoji: '👷‍♂️',
    power: 7
  },
  {
    name: 'Boot Licker',
    teamNumber: 0,
    emoji: '🙋‍♀️',
    power: 50
  },
  {
    name: 'Wicked Stepdaughter',
    teamNumber: 0,
    emoji: '👩‍💼',
    power: 70
  },
]

const occupations = [
  'Astronaut', 'Plumber', 'Chef', 'Detective', 'Electrician',
  'Architect', 'Dentist', 'Mechanic', 'Scientist', 'Librarian',
  'Pilot', 'Firefighter', 'Artist', 'Engineer', 'Writer',
  'Doctor', 'Teacher', 'Athlete', 'Photographer', 'Lawyer',
  'Police Officer', 'Actor', 'Nurse', 'Farmer', 'Barista',
  'Journalist', 'Carpenter', 'Physicist', 'Biologist', 'Psychologist',
  'Programmer', 'Fashion Designer', 'Vet', 'Marine Biologist', 'Geologist',
  'Economist', 'Chef', 'Botanist', 'Meteorologist', 'Paramedic',
  'Zoologist', 'Archaeologist', 'Singer', 'Graphic Designer', 'Paleontologist',
  'Cartoonist', 'Animator', 'Linguist', 'Sculptor', 'Mathematician',
  'Historian', 'Philosopher', 'Surgeon', 'Dancer', 'Oceanographer',
  'Magician', 'Game Developer', 'Astrophysicist', 'Comedian', 'Pianist',
  'Conductor', 'Flight Attendant', 'Mime Artist', 'Dolphin Trainer', 'Ice Cream Maker',
  'Park Ranger', 'Furniture Maker', 'Mountain Climber', 'Beekeeper', 'Toy Maker',
  'Gardener', 'Sommelier', 'Puppeteer', 'Escape Artist', 'Ballet Dancer',
  'Safari Guide', 'Robotics Engineer', 'Crime Scene Investigator', 'Hot Air Balloon Pilot', 'Stand-up Comedian',
  'Ethical Hacker', 'Toy Tester', 'Wine Taster', 'Wind Turbine Technician', 'Feng Shui Consultant',
  'Aromatherapist', 'Pet Psychic', 'Professional Sleeper', 'Tea Taster', 'Food Stylist',
  'Bubbleologist', 'Snake Milker', 'Foley Artist', 'Professional Cuddler', 'Professional Organizer'
];

const adjectives = [
  'Silly', 'Crazy', 'Whimsical', 'Curious', 'Adventurous',
  'Playful', 'Witty', 'Zany', 'Quirky', 'Colorful',
  'Daring', 'Cheerful', 'Energetic', 'Enchanting', 'Gleaming',
  'Inquisitive', 'Jovial', 'Lively', 'Mysterious', 'Optimistic',
  'Radiant', 'Spirited', 'Vibrant', 'Wondrous', 'Eccentric',
  'Dynamic', 'Fanciful', 'Lighthearted', 'Sparkling', 'Unpredictable',
  'Capricious', 'Bubbly', 'Vivacious', 'Peculiar', 'Jubilant',
  'Mirthful', 'Ebullient', 'Zestful', 'Playful', 'Jaunty',
  'Exuberant', 'Bouncy', 'Quaint', 'Giddy', 'Ludicrous',
  'Comical', 'Ludicrous', 'Surreal', 'Offbeat', 'Kooky',
  'Idiosyncratic', 'Frolicsome', 'Amusing', 'Outlandish', 'Jocular',
  'Whacky', 'Absurd', 'Groovy', 'Bizarro', 'Far-out',
  'Funky', 'Absurd', 'Off-the-wall', 'Ridiculous', 'Surreal',
  'Whimsical', 'Wacky', 'Unconventional', 'Offbeat', 'Hilarious',
  'Laughable', 'Entertaining', 'Funny', 'Inane', 'Kooky',
  'Goofy', 'Humorous', 'Waggish', 'Mirthful', 'Absurd',
  'Jesting', 'Lighthearted', 'Facetious', 'Jocose', 'Droll',
  'Entertaining', 'Amusing', 'Ludicrous', 'Zany', 'Playful',
  'Witty', 'Whimsical', 'Eccentric', 'Kooky', 'Surreal',
  'Quirky', 'Unconventional', 'Offbeat', 'Off-the-wall', 'Bizarre'
];

const emojis = [
  '👨', '👩', '👶', '👧', '👦',
  '🧑', '🧒', '🧓', '👴', '👵',
  '👨‍⚕️', '👩‍⚕️', '👨‍🎓', '👩‍🎓', '👨‍🏫',
  '👩‍🏫', '👨‍⚖️', '👩‍⚖️', '👨‍🌾', '👩‍🌾',
  '👨‍🍳', '👩‍🍳', '👨‍🔧', '👩‍🔧', '👨‍🏭',
  '👩‍🏭', '👨‍💼', '👩‍💼', '👨‍🔬', '👩‍🔬',
  '👨‍💻', '👩‍💻', '👨‍🎤', '👩‍🎤', '👨‍🎨',
  '👩‍🎨', '👨‍✈️', '👩‍✈️', '👨‍🚀', '👩‍🚀',
  '👨‍⚖️', '👩‍⚖️', '👨‍🚒', '👩‍🚒', '👮‍♂️',
  '👮‍♀️', '💂‍♂️', '💂‍♀️', '🕵️‍♂️', '🕵️‍♀️',
  '👷‍♂️', '👷‍♀️', '🤴', '👸', '🧙‍♂️',
  '🧙‍♀️', '🧚‍♂️', '🧚‍♀️', '🧛‍♂️', '🧛‍♀️',
  '🧜‍♂️', '🧜‍♀️', '🧝‍♂️', '🧝‍♀️', '🧞‍♂️',
  '🧞‍♀️', '🧟‍♂️', '🧟‍♀️', '👽', '👾',
  '🤖', '🎅', '🤶', '🧑‍🚀', '👨‍🚒',
  '👮‍♂️', '💂‍♂️', '🕵️‍♂️', '👷‍♂️', '👨‍⚕️',
  '👨‍🌾', '👨‍🍳', '👨‍🔧', '👨‍🏭', '👨‍💼',
  '👨‍💻', '👨‍🎤', '👨‍🎨', '👨‍✈️', '👨‍🚀',
  '👨‍⚖️', '👨‍🚒', '👨‍🦯', '👨‍🦼', '👨‍🦽',
  '👩‍⚕️', '👩‍🌾', '👩‍🍳', '👩‍🔧', '👩‍🏭',
  '👩‍💼', '👩‍💻', '👩‍🎤', '👩‍🎨', '👩‍✈️',
  '👩‍🚀', '👩‍⚖️', '👩‍🚒', '👩‍🦯', '👩‍🦼',
  '👩‍🦽'
];

function addPlayers() {
  for (let i = 0; i < 100; i++) {
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)]
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]

    const player = {
      name: `${randomAdjective} ${randomOccupation}`,
      teamNumber: 0,
      power: Math.ceil(Math.random() * 10000),
      emoji: randomEmoji
    }
    players.push(player)
  }
}

function assignTeamNumbers() {
  players.forEach(player => player.teamNumber = Math.ceil(Math.random() * 2))
}

function filterTeamPlayers(teamNumber) {
  return players.filter(player => player.teamNumber == teamNumber)
}
function drawTeam(teamNumber) {
  const teamPlayers = filterTeamPlayers(teamNumber)

  const playerEmojis = teamPlayers.map(player => `<span title="${player.name} ${player.power}">${player.emoji}</span>`).join('')

  const teamElement = document.getElementById('team' + teamNumber.toString())

  teamElement.innerHTML = playerEmojis
}

function drawTeams() {
  drawTeam(1)
  drawTeam(2)
}

function calculateTeamPower(teamNumber) {
  let teamPower = 0

  const teamPlayers = filterTeamPlayers(teamNumber)

  teamPlayers.forEach(player => teamPower += player.power)

  return teamPower
}

function drawMoney() {
  const moneyElement = document.getElementById('money')
  moneyElement.innerText = '$' + money.toString()
}

function placeBetOnTeam(teamNumber, betAmount) {

  if (betAmount > money) {
    window.alert("NOT ENOUGH MONEY, BUDDY")
    return
  }

  const powerOfTeamBettingOn = calculateTeamPower(teamNumber)

  const powerOfOtherTeam = calculateTeamPower(teamNumber == 1 ? 2 : 1)

  if (powerOfOtherTeam == powerOfTeamBettingOn) {
    window.alert('DRAW GAME')
    return
  }

  const wonBet = powerOfTeamBettingOn > powerOfOtherTeam

  wonBet ? money += betAmount : money -= betAmount

  window.alert(`Your team had a power of ${powerOfTeamBettingOn}\nThe other team had a power of ${powerOfOtherTeam}\nYou ${wonBet ? 'win' : 'lose'} ${betAmount}`)

  if (money <= 0) {
    gameOver()
  }

  drawMoney()
  assignTeamNumbers()
  drawTeams()
}

function placeCustomBet(teamNumber) {
  const customBetAmount = parseInt(window.prompt("How much would you like to bet?"))

  if (!customBetAmount) {
    window.alert("Please input a number")
    return
  }

  placeBetOnTeam(teamNumber, customBetAmount)
}

function goAllIn(teamNumber) {
  placeBetOnTeam(teamNumber, money)
}

function gameOver() {
  const wantsToPlayAgain = window.confirm("Play Again?")

  if (!wantsToPlayAgain) {
    window.close()
  }

  money = 100
}

addPlayers()
drawMoney()
assignTeamNumbers()
drawTeams()