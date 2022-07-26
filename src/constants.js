module.exports = exports = {
  RANKS: {
    'ANY MIN': 0,

    'IRON 1': 11,
    'IRON 2': 12,
    'IRON 3': 13,

    'BRONZE 1': 21,
    'BRONZE 2': 22,
    'BRONZE 3': 23,

    'SILVER 1': 31,
    'SILVER 2': 32,
    'SILVER 3': 33,

    'GOLD 1': 41,
    'GOLD 2': 42,
    'GOLD 3': 43,

    'PLATINUM 1': 51,
    'PLATINUM 2': 52,
    'PLATINUM 3': 53,

    'DIAMOND 1': 61,
    'DIAMOND 2': 62,
    'DIAMOND 3': 63,

    'ASCENDANT 1': 71,
    'ASCENDANT 2': 72,
    'ASCENDANT 3': 73,

    'IMMORTAL 1': 81, 
    'IMMORTAL 2': 82,
    'IMMORTAL 3': 83,

    'RADIANT': 91, // eslint-disable-line quote-props

    'ANY MAX': 99
  },
  RANKS_REVERSED: {
    0: 'ANY MIN',
    11: 'IRON 1',
    12: 'IRON 2',
    13: 'IRON 3',
    21: 'BRONZE 1',
    22: 'BRONZE 2',
    23: 'BRONZE 3',
    31: 'SILVER 1',
    32: 'SILVER 2',
    33: 'SILVER 3',
    41: 'GOLD 1',
    42: 'GOLD 2',
    43: 'GOLD 3',
    51: 'PLATINUM 1',
    52: 'PLATINUM 2',
    53: 'PLATINUM 3',
    61: 'DIAMOND 1',
    62: 'DIAMOND 2',
    63: 'DIAMOND 3',
    71: 'ASCENDANT 1',
    72: 'ASCENDANT 2',
    73: 'ASCENDANT 3',
    81: 'IMMORTAL 1',
    81: 'IMMORTAL 2',
    81: 'IMMORTAL 3',
    91: 'RADIANT',
    99: 'ANY MAX'
  },

  MAPS: ['split', 'bind', 'haven', 'ascent', 'icebox', 'breeze', 'fracture', 'pearl'],
  MAPS_THUMBNAILS: {
    split: 'https://cdn1.dotesports.com/wp-content/uploads/2020/04/14123350/Screenshot-9-768x709.png',
    bind: 'https://cdn1.dotesports.com/wp-content/uploads/2020/04/14123321/Screenshot-8-768x720.png',
    haven: 'https://cdn1.dotesports.com/wp-content/uploads/2020/04/14123333/Screenshot-10.png',
    ascent: 'https://cdn1.dotesports.com/wp-content/uploads/2020/06/03123207/ascent.png',
    icebox: 'https://cdn1.dotesports.com/wp-content/uploads/2020/11/12090242/db73bd9e504575ee2e703c1142b68a14.png',
    breeze: 'https://cdn1.dotesports.com/wp-content/uploads/2021/06/24053007/Screenshot-89.png',
    fracture: 'https://cdn1.dotesports.com/wp-content/uploads/2021/10/29024110/a8228994c96368bd9222feea51191eb8.png',
    pearl: 'https://cdn1.dotesports.com/wp-content/uploads/2022/06/22030022/ezgif-1-e76708ddec-768x617.jpg'
  },

  GAME_MODES: ['standard', 'spike rush', 'deathmatch'],

  AFFIRMATIVE_WORDS: ['yes', 'yeah', 'yea', 'ye', 'yah', 'sure', 'true', '1', 'one', 'on', 'si', 'ok', 'okay', 'k', 'mhm', 'why not', 'alright', 'aight', 'affirmative', 'yeet'],

  MAX_TEAM_COUNT: 5, // maximum amount of players allowed on one team

  userRegistrationSteps: [
    ['1. Valorant Username', 'What is your FULL Valorant username? (including tag, e.g. `Username#NA1`)'],
    ['2. Valorant Rank', 'What rank are you in Valorant? If you don\'t have a rank, go with "Iron 1".'],
    ['3. Notifications', 'Do you want to be notified when matches are created? Respond "yes" if you would like to opt-in.']
  ],

  get matchCreationSteps () {
    return [
      ['1. Date & Time', 'When will the match be? If no date is specified the current day is assumed. You can also specify a time zone such as `CST` or `EDT`, defaults to Pacific time. Ex: "Today at 10 AM", "12:30 PM on Saturday", "03/14/2021 at 6:28 PM EST"'],
      ['2. Rank Minimum', 'What is the **MINIMUM** rank you are allowing into your tournament? If any, type "any".'],
      ['3. Rank Maximum', 'What is the **MAXIMUM** rank you are allowing into your tournament? If any, type "any".'],
      ['4. Player Count', `How many players should be on each team? Max ${this.MAX_TEAM_COUNT}.`],
      ['5. Spectators', 'Are spectators allowed?'],
      ['6. Map', `Which map would you like to play on? Options are "${this.MAPS.map(m => this.capitalizeFirstLetter(m)).join('", "')}". If any, type "any".`],
      ['7. Game Mode', `What game mode would you like? Options are "${this.GAME_MODES.map(m => this.capitalizeFirstLetter(m)).join('", "')}".`]
    ]
  },

  capitalizeFirstLetter: string => {
    string = string.toLowerCase()
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}
