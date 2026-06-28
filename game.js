
// hi! thanks for checking out my horrible code



// because using getElementById every line is a bad practice

function cacheDOMElements(){
    leftColumn = document.getElementById("leftColumn");
    centerColumn = document.getElementById("centerColumn");
    rightColumn = document.getElementById("rightColumn");
    actionLog = document.getElementById("log");
    reputationElement = document.getElementById("reputation");
    cashElement = document.getElementById("cash");
    energyElement = document.getElementById("energy");
    strengthElement = document.getElementById("strength");
    overlayElement = document.getElementById("overlay")
    pickpocketDiv = document.getElementById("pickpocketDiv")
    giveawayDiv = document.getElementById("giveawayDiv")
    scavDiv = document.getElementById("scavDiv")
    nameSpan = document.getElementById("name")
    mugDiv = document.getElementById("mugDiv")
};

var leftColumn
var centerColumn
var rightColumn
var actionLog;
var reputationElement;
var cashElement;
var energyElement;
var strengthElement;
var overlayElement;
var pickpocketDiv;
var giveawayDiv;
var scavDiv;
var nameSpan;
var mugDiv;

cacheDOMElements();

// i got the blinkers fluid

function blink(element){

    { 
        var handle = setInterval(function () { toggleVisibility(element)}, 30);    
    }
    
    function toggleVisibility(element){
    blinkCounter = blinkCounter+1;    
    
    if (blinkCounter >= 6){
        clearInterval(handle);
        blinkCounter = 0;
        element.style.visibility = "visible";
    } else {
        if (element.style.visibility != "hidden"){
        element.style.visibility = "hidden";
        } else {
        element.style.visibility = "visible";    
        }
      }   
    }
        
    }

// log

function log(text){actionLog.innerText=text}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function rng_Rounded(min,max){
    let num = Math.random();
    let out = (((num - 0) * (max - min)) / (1 - 0)) + min;
    return Math.round(out);
};

function formatV(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function hideBd(){
leftColumn.classList.add("hidden");
centerColumn.classList.add("hidden");
rightColumn.classList.add("hidden");
}

function showBd(){
leftColumn.classList.remove("hidden");
centerColumn.classList.remove("hidden");
rightColumn.classList.remove("hidden");
}

function setLocation(stage){
    let loc=locations[stage];
    let flav=flavortext[stage];
    let locC=locationColors[stage];
    let locCS=locationColorsShadow[stage];

    let elements= document.querySelectorAll('.location')
    elements.forEach(element => {
        element.innerText = loc
        element.style.color = locC
        element.style.textShadow = "1px 1px 0" + locCS
    });
    document.getElementById("flavortext").innerText = flav;
    blink(document.getElementById("bigSign"));
    document.getElementById("loctit").innerText=loc

}

// name gen the SECOND!!!

function genName(){
    let sec1 = nameFirst[rng_Rounded(0,nameFirst.length-1)];
    let sec2 = nameLast[rng_Rounded(0,nameLast.length-1)];
    console.log(sec1+" "+sec2);
    return sec1+" "+sec2;
}


// UPDATES

function updateStats(){
    cashElement.innerText = formatV(money)
    energyElement.innerText = formatV(energy)
    strengthElement.innerText = formatV(strength)
    reputationElement.innerText = formatV(rep)
}

// SHOWS YOU STUFF YOU CAN DO

function actionsReveal(){
    if (stage>0){
        giveawayDiv.style.display="block";
    };
    if (rep>0){
        pickpocketDiv.style.display="block";
        scavDiv.style.display="none";
    };
    if (hasGun==true && stage>0){
        mugDiv.style.display="block";
    };
}

// upgrades

function manageUpgrades(){
    
    for(var i = 0; i < upgrades.length; i++){
        if (upgrades[i].trigger() && (upgrades[i].uses > 0)){
            console.log("displaying")
            displayUpgrades(upgrades[i]);
            upgrades[i].uses = upgrades[i].uses - 1;
            activeUpgrades.push(upgrades[i]);
        }
    }
        
        
    for(var i = 0; i < activeUpgrades.length; i++){
        if (activeUpgrades[i].cost()){
            activeUpgrades[i].element.disabled = false;
        } else {
            activeUpgrades[i].element.disabled = true;
        }   
    }
}

function displayUpgrades(UPG){
    
    UPG.element = document.createElement("button");
    UPG.element.setAttribute("id", UPG.id);
    
    UPG.element.onclick = function(){UPG.effect()};
    
    UPG.element.setAttribute("class", "button2");
    upgList.appendChild(UPG.element, upgList.firstChild);
    
    var span = document.createElement("span");
    span.style.fontWeight = "bold";
    UPG.element.appendChild(span);
    
    var title = document.createTextNode(UPG.title);
    span.appendChild(title);    
    
    var cost = document.createTextNode(UPG.priceTag);
    UPG.element.appendChild(cost);
    
    var div = document.createElement("div");
    UPG.element.appendChild(div);
    
    var description = document.createTextNode(UPG.description);
    UPG.element.appendChild(description);
    
    blink(UPG.element);
    
}

// ############## Actions ##############

async function naptime(){
    if (busy == false){
    busy = true
    hideBd()
    for (i=restTime; i>0; i--){
        log("Nap time. ("+i+"s)")
        await sleep(1000)
    };
    showBd()
    energy = energyMax
    log("You've woken up from a terrible sleep, as usual.");
    busy = false    
    }
}

async function scav(){
    if (busy == false){
    busy = true
    energyLoss = rng_Rounded(7,15);
    if (energyLoss > energy+1 && energy > 10){
    log("You are too tired to take a jog.");
    energy = rng_Rounded(1,9)
    busy = false
    return
    }
    if (energy>10 && energyLoss < energy){
    for (i=1; i>0; i--){
        log("Walking around. ("+500+"ms)")
        await sleep(500)
    };
    money = money + rng_Rounded(0,scavmax);
    energy = energy - energyLoss
    log("You looked around the streets for a few coins.");
    busy = false
    return
    } else {
    log("You are too tired to take a jog.");
    busy = false
    return
    }
    }
};

async function pickpocket(){
    if (busy == false){
    busy = true
    energyLoss = rng_Rounded(16,36);
    if (energyLoss > energy+1 && energy > 10){
    log("You are too sleepy to make a move.");
    energy = rng_Rounded(1,9)
    busy = false
    return
    }
    if (energy>10 && energyLoss < energy){
        for (i=1; i>0; i--){
            log("Making small talks. ("+1+"s)")
            await sleep(1000)
        };
        if (rng_Rounded(0,2)==2){
            money = money + rng_Rounded(4,20);
            energy = energy - energyLoss
            log("You successfully pickpocketed someone.");
            busy = false
            return
        } else {
            energy = energy - energyLoss
            log("You failed to pickpocket anyone.");
            busy = false
            return
        };
    } else {
    log("You are too sleepy to make a move.");
    busy = false
    return
    }
    }
};

async function mug(){
    if (busy == false){
    busy = true
    energyLoss = rng_Rounded(16,36);
    if (energyLoss > energy+1 && energy > 10){
    log("You don't think using weapons while exhausted is a good idea.");
    energy = rng_Rounded(1,9)
    busy = false
    return
    }
    if (energy>10 && energyLoss < energy){
        for (i=2; i>0; i--){
            log("Ambushing the backstreets. ("+i+"s)")
            await sleep(1000)
        };
        if (rng_Rounded(0,3)!=3){
            money = money + rng_Rounded(9,30);
            energy = energy - energyLoss
            log("You successfully mugged someone.");
            busy = false
            return
        } else {
            let moneyloss = rng_Rounded(9,30)
            if (money>moneyloss){
            money = money - moneyloss
            }
            energy = energy - energyLoss
            log("Your attempt failed, but you managed to get away.");
            busy = false
            return
        };
    } else {
    log("You don't think using weapons while exhausted is a good idea.");
    busy = false
    return
    }
    }
};

async function giveaway(){
    if (busy == false){
    busy = true
    loss = rng_Rounded(5,30);
    for (i=2; i>0; i--){
        log("Searching for 'friends'. ("+i+"s)")
        await sleep(1000)
    };
    if (energy>0 && loss < money){
    log("Your gifts were appreciated by some people.");
    rep = rep + rng_Rounded(1,2)
    money = money - loss
    busy = false
    return
    } else {
    log("You didn't have enough money to impress anyone.");
    busy = false
    return
    }
    }
};

async function die(){
    log("You failed to kill yourself.")
    blink(actionLog)
}

//check saves

if (localStorage.getItem("saveGame") != null) {
    load();
} else {
    playername = genName()
    nameSpan.innerText=playername
}

window.setInterval(function(){
    actionsReveal();
    updateStats();
    manageUpgrades();
}, 10);


// Slow Loop

var saveTimer = 0;

window.setInterval(function(){
    saveTimer++;
    if (saveTimer >= 250) {
        save();
        saveTimer = 0;
    }
}, 100);





function save() {
    
    var upgradesUses = [];
    var upgradesFlags = [];
    var upgradesActive = [];
    var stratsActive = [];
    
for(var i=0; i < upgrades.length; i++){
    
    upgradesUses[i] = upgrades[i].uses;
    upgradesFlags[i] = upgrades[i].flag;
    
}
    
for(var i=0; i < activeUpgrades.length; i++){
    
    upgradesActive[i] = activeUpgrades[i].id;
    
}
    
    var saveGame = {
        
    playername:playername,
    money:money,
    energy:energy,
    rep:rep,
    strength:strength,
    stage:stage,
    ssEDone:ssEDone,
    hasGun:hasGun
    
        }
    
    localStorage.setItem("saveGame",JSON.stringify(saveGame));
    localStorage.setItem("saveUpgradesUses",JSON.stringify(upgradesUses));
    localStorage.setItem("saveUpgradesFlags",JSON.stringify(upgradesFlags));
    localStorage.setItem("saveUpgradesActive",JSON.stringify(upgradesActive));
    
}

function load() {
    
    var loadGame = JSON.parse(localStorage.getItem("saveGame"));
    var loadUpgradesUses = JSON.parse(localStorage.getItem("saveUpgradesUses"));
    var loadUpgradesFlags = JSON.parse(localStorage.getItem("saveUpgradesFlags"));
    var loadUpgradesActive = JSON.parse(localStorage.getItem("saveUpgradesActive"));

        
    playername = loadGame.playername;
    money = loadGame.money;
    energy = loadGame.energy;
    rep = loadGame.rep;
    strength = loadGame.strength;
    stage = loadGame.stage;
    ssEDone = loadGame.ssEDone;
    hasGun = loadGame.hasGun;
    
    for(var i=0; i < upgrades.length; i++){
    
    upgrades[i].uses = loadUpgradesUses[i];
    upgrades[i].flag = loadUpgradesFlags[i]; 
        
    }
    
    for(var i=0; i < upgrades.length; i++){
    
    if (loadUpgradesActive.indexOf(upgrades[i].id)>=0){
        displayUpgrades(upgrades[i]);
        activeUpgrades.push(upgrades[i]);
    }
        
    }
    
    
    refresh();
    
    if (resetFlag!=2){
        reset();
    }
    
}

function refresh(){

// debug
    money = Math.pow(10,9)
    setLocation(stage)
    nameSpan.innerText=playername

}

function reset() {
    localStorage.removeItem("saveGame");
    localStorage.removeItem("saveUpgradesUses");
    localStorage.removeItem("saveUpgradesFlags");
    localStorage.removeItem("saveUpgradesActive");
    location.reload()
}

// easter egg

document.addEventListener('keydown', (event) => {
    if (ssEDone == false){
    if (event.key = code_Spades[ssECounter]){
        if (ssECounter == code_Spades.length-1){
            playername = "Spades Slick"
            console.log("YOUR NAME IS SPADES SLICK")
            nameSpan.innerText = playername
            blink(nameSpan)
            ssEDone = true;
        } else {
        ssECounter = ssECounter+1;
        };
    } else {
        spCounter = 0;
    };
    };
});