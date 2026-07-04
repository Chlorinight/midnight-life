
// hi! thanks for checking out my horrible code



// because using getElementById every line is a bad practice

function cacheDOMElements(){
    leftColumn = document.getElementById("leftColumn");
    centerColumn = document.getElementById("centerColumn");
    rightColumn = document.getElementById("rightColumn");
    actionLog = document.getElementById("log1div");
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
    errorMessage = document.getElementById("errorMessage")
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
var errorMessage;

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

function log(text){
    document.getElementById("log4div").innerText=document.getElementById("log3div").innerText;
    document.getElementById("log3div").innerText=document.getElementById("log2div").innerText;
    document.getElementById("log2div").innerText=document.getElementById("log1div").innerText;
    actionLog.innerText=text;
};

function returnRandomInLogArray(index){
    return logsLists[index][rng_Rounded(0,logsLists[index].length-1)];
}

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
        log(returnRandomInLogArray(12) +"("+i+"s)")
        await sleep(1000)
    };
    showBd()
    energy = energyMax
    log(returnRandomInLogArray(13));
    busy = false    
    }
}

async function scav(){
    if (busy == false){
    busy = true
    energyLoss = rng_Rounded(7,15);
    if (energyLoss > energy+1 && energy > 10){
    log(returnRandomInLogArray(0));
    energy = rng_Rounded(1,9)
    busy = false
    return
    }
    if (energy>10 && energyLoss < energy){
    for (i=1; i>0; i--){
        log(returnRandomInLogArray(2) + "("+500+"ms)")
        await sleep(500)
    };
    var moneygain = rng_Rounded(0,scavmax)
    if (moneygain > 0){
    money = money + moneygain;;
    energy = energy - energyLoss;
    log(returnRandomInLogArray(1));
    } else {
    energy = energy - energyLoss
    log(returnRandomInLogArray(14));
    }
    busy = false
    return
    } else {
    log(returnRandomInLogArray(0));
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
    log(returnRandomInLogArray(0));
    energy = rng_Rounded(1,9)
    busy = false
    return
    }
    if (energy>10 && energyLoss < energy){
        for (i=1; i>0; i--){
            log(returnRandomInLogArray(3)+"("+1+"s)")
            await sleep(1000)
        };
        if (rng_Rounded(0,1)==1){
            money = money + rng_Rounded(4,17);
            energy = energy - energyLoss
            log(returnRandomInLogArray(4));
            busy = false
            return
        } else {
            energy = energy - energyLoss
            log(returnRandomInLogArray(5));
            busy = false
            return
        };
    } else {
    log(returnRandomInLogArray(0));
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
    log(returnRandomInLogArray(0));
    energy = rng_Rounded(1,9)
    busy = false
    return
    }
    if (energy>10 && energyLoss < energy){
        for (i=2; i>0; i--){
            log(returnRandomInLogArray(6)+ "("+i+"s)")
            await sleep(1000)
        };
        if ((rng_Rounded(0,5)+(strength/5))>4){
            money = money + rng_Rounded(9,50);
            energy = energy - energyLoss;
            rep = rep + rng_Rounded(0,1);
            if (strength<21){
            strength = strength + rng_Rounded(0,1)
            };
            log(returnRandomInLogArray(7));
            busy = false
            return
        } else {
            let moneyloss = rng_Rounded(9,30)
            if (money>moneyloss){
            money = money - moneyloss
            function mugRNG(){if(rng_Rounded(0,3)==3){return 1 }else{return 0};}
            rep = rep - mugRNG()
            strength = strength + mugRNG()
            }
            energy = energy - energyLoss
            log(returnRandomInLogArray(8));
            busy = false
            return
        };
    } else {
    log(returnRandomInLogArray(0));
    busy = false
    return
    }
    }
};

async function giveaway(){
    if (busy == false){
    busy = true
    loss = ((0.1*money));
    for (i=2; i>0; i--){
        log(returnRandomInLogArray(9)+"("+i+"s)")
        await sleep(5)
    };
    if (loss < money && loss > 4){
    log(returnRandomInLogArray(10));
    rep = Math.round(rep+(Math.log(loss/2)))
    money = Math.round(money - loss)
    busy = false
    return
    } else {
    log(returnRandomInLogArray(11));
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

var errorTimer = 0;
var saveTimer = 0;

window.setInterval(function(){
    saveTimer++;
    if (saveTimer >= 250) {
        save();
        saveTimer = 0;
    };

    if (window.getComputedStyle(errorMessage).getPropertyValue('display')=="flex"){
        if (window.getComputedStyle(errorMessage).getPropertyValue('opacity')>0 && errorTimer>50){
        errorMessage.style.opacity=(window.getComputedStyle(errorMessage).getPropertyValue('opacity')-0.1)
    } else {
        errorTimer++
    }
        if (window.getComputedStyle(errorMessage).getPropertyValue('opacity')<=0){
            errorMessage.style.display="none";
            errorMessage.style.opacity="1";
            errorTimer = 0;
            errorMessage.style.color="#FF0000"
        }
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
    
//    money = Math.pow(20,11)
//    energy = Math.pow(10,9)

    // reset texts

    setLocation(stage)
    if (playername){nameSpan.innerText=playername};

}

function reset() {
    localStorage.removeItem("saveGame");
    localStorage.removeItem("saveUpgradesUses");
    localStorage.removeItem("saveUpgradesFlags");
    localStorage.removeItem("saveUpgradesActive");
    location.reload()
}

function exportSave() {

    save()

    var loadGame = JSON.parse(localStorage.getItem("saveGame"));
    var loadUpgradesUses = JSON.parse(localStorage.getItem("saveUpgradesUses"));
    var loadUpgradesFlags = JSON.parse(localStorage.getItem("saveUpgradesFlags"));
    var loadUpgradesActive = JSON.parse(localStorage.getItem("saveUpgradesActive"));

    const mergedSaveVariables = {
        loadGame,
        loadUpgradesUses,
        loadUpgradesFlags,
        loadUpgradesActive
    }

    var mergedSaveVariablesString = JSON.stringify(mergedSaveVariables, null, 2);
    var binaryExportString = String.fromCodePoint(...new TextEncoder().encode(mergedSaveVariablesString));
    var base64ExportString = btoa(binaryExportString)

    navigator.clipboard.writeText(base64ExportString)

    errorMessage.style.display="flex";
    errorMessage.style.color="#00FF00";
    errorMessage.innerText=("Copied to clipboard.");


    console.log(base64ExportString)

}

var importOpen = false;
var impPopup = document.getElementById("importPopup");

function openImport() {

if (importOpen==false){
    impPopup.style.display="flex";
    importOpen = true
} else {
    impPopup.style.display="none";
    importOpen = false
}

};

function importSave() {

    var base64ImportString = document.getElementById("inputSaveCode").value

    try {
    var binaryImportString = atob(base64ImportString)
    var decodedJSONImportString = new TextDecoder().decode(Uint8Array.from(binaryImportString, c => c.codePointAt(0)));
    var mergedSaveImportVariables = JSON.parse(decodedJSONImportString);

    localStorage.setItem("saveGame",JSON.stringify(mergedSaveImportVariables.loadGame));
    localStorage.setItem("saveUpgradesUses",JSON.stringify(mergedSaveImportVariables.loadUpgradesUses));
    localStorage.setItem("saveUpgradesFlags",JSON.stringify(mergedSaveImportVariables.loadUpgradesFlags));
    localStorage.setItem("saveUpgradesActive",JSON.stringify(mergedSaveImportVariables.loadUpgradesActive));
    
    location.reload()

    } catch (error) {
        errorMessage.style.display="flex"
        errorMessage.style.color="#FF0000";
        errorMessage.innerText=("Failed to import: "+ error.message + " (Did you check if it was a valid code?)");
        impPopup.style.display="none";
        importOpen = false
    }
};



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

/*
var testarray = [];

for (i=0;i<=100;i++){
    let testval=rng_Rounded(0,500)
    if (testarray.includes(testval)){
        console.log("found repeat ("+testval+")")
    } else {
        console.log(testval)
        testarray.push(testval)
    };
}

ran an experiment on function randomness

*/

// BORING STUFF

var creditOpen = false;

function creditToggle(){
    let popup = document.getElementById("creditPOP")
    if (creditOpen){
        popup.style.display="none"
        creditOpen = false
    } else {
        popup.style.display="inline-block"
        creditOpen = true
    }
}