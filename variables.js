
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
"Lunatic"
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
    "Renegade"
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