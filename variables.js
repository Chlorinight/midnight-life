
//constants

const locations = [
    "Midnight City Outskirts",
    "Midnight City Slums",
    "Midnight City",
    "Midnight City Central",
    "Felt Town"
];

const flavortext = [
    "It's as boring as ever.",
    "Better than nothing.",
    "Dense and tightly watched, at least that's what they say.",
    "Going up in the world. Hopefully.",
    "They don't trust you. They shouldn't."
];

const locationColors = ["#cccccc","#c91be0","#e22200","#f5bb1d","#2ed73a" ]
const locationColorsShadow = ["#525252","#7d0e8b","#791200","#a85507","#2ea136" ]

const locationMult = [
    1,
    1,
    3,
    5,
    10
]

const nameFirst = [
"Witty",
"Sulky",
"Peaceful",
"Flowery",
"Energetic",
"Lazy",
"Delirious",
"Sassy",
"Nasty",
"Grateful",
"Lamentable",
"Fuzzy",
"Furry",
"Marvelous",
"Simplistic",
"Panicky",
"Callous",
"Righteous",
"Truculent",
"Defiant",
"Belligerent",
"Heartless",
"Diamonds",
"Noxious",
"Wandering",
"Wayward",
"Aimless",
"Peregrine",
"Foreign",
"Rules",
"Mysterious",
"Japish",
"Temeritous",
"Planless",
"Senseless",
"Careless",
"Bureaucratic",
"Pissy",
"Moonstruck",
"Lunatic",
"Churlish",
"Cockamamie",
"Jocular",
"Litigious",
"Whimsical"
];

const nameLast = [
    "Tyrannist",
    "Tradeswoman",
    "Racketeer",
    "Scumbag",
    "Kingpin",
    "Delinquent",
    "Miscreant",
    "Pilferer",
    "Trickster",
    "Jester",
    "Plunderer",
    "Kleptomaniac",
    "Treasonist",
    "Embezzler",
    "Highwayman",
    "Usurper",
    "Upstander",
    "Moth",
    "Honcho",
    "Charlatan",
    "Ringleader",
    "Housebreaker",
    "Entrepeneur",
    "Bankrobber",
    "Slicker",
    "Phil",
    "Droog",
    "Mechanist",
    "Renegade",
    "Scofflaw",
    "Thaumaturge",
    "Neophyte"
]

const logsLists = [
    [ // exhaustion 0
        "Way too tired to do anything.",
        "So tired I'd rather sleep on rocks.",
        "Just don't feel like it right now.",
        "Resting would be nice.",
        "I should take a breather.",
        "I'm feeling real exhausted."
    ],
    [ // scav 1
        "Found some coins under a rock.",
        "Found some coins between the cracks.",
        "Found some coins just on the ground."
    ],
    [ // scavprogress 2
        "Walking around... ",
        "Looking like an idiot... ",
        "Finding rocks... "
    ],
    [ // pickpocket progress 3
        "Making small talks... ",
        "Being sneaky... ",
        "Picking Pockets... "
    ],
    [ // pickpocket succeed 4
        "Successfully picked some pockets.",
        "Ppickpocketed someone."
    ],
    [ // pickpocket fail 5
        "Caught pickpocketing, what a shame.",
        "Couldn't find a window to pickpocket anyone."
    ],
    [ // mugging progress 6
        "Mugging...",
        "Ambushing the backstreets... ",
        "Finding unlucky victims... "
    ],
    [ // mugging succeed 7
        "Mugged someone.",
        "They deserved it anyways.",
        "Got some money.",
        "I hope I'm intimidating."
    ],
    [ // mugging fail 8
        "Hard to mug an armed person.",
        "Wasn't intimidating enough.",
        "Failed.",
        "Mugged me back."
    ],
    [ // donate progress 9
        "Looking for some 'Friends'... ",
        "Offering some cash... "
    ],
    [ // donate succeed 10
        "They happily accepted my offers.",
        "The money was appreciated.",
        "Helped someone, I guess."
    ],
    [ // donate fail 11
        "Wasn't enough money to impress anyone.",
        "Laughed at me.",
        "I need more money."
    ],
    [ // nap progress 12
        "Taking a nap... ",
        "Sheltering... ",
        "Enjoying my time... ",
        "Sleeping... ",
        "Laying on my ass... "
    ],
    [ // wakeup 13
        "Just woke up from a shitty nap, as usual.",
        "Feeling energized again.",
        "I don't feel like shit anymore.",
        "Got something better to do, actually.",
        "I can walk without collapsing again."
    ]
]

//misc

const code_Spades=["d","o","n","t","b","l","e","e","d","o","n","t","h","e","s","u","i","t","s"]
var ssECounter = 0;
var ssEDone = false;

//gamestats

var playername;
var money = 0;
var rep = 0;
var energy = 100;
var strength = 0;
var energyMax = 100;
var scavmax = 1;
var restTime = 5;
var busy = false;
var blinkCounter = 0;
var stage = 0;
var resetFlag = 2;
var hasGun = false;