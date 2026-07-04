var upgrades = [];
var activeUpgrades = [];

var upgrade1 = {
    id: "projectButton1",
    title: "Metal Detector ",
    priceTag: "(12 B$)",
    description: "It's much easier to use these than to check every nook and cranny manually.",
    trigger: function(){return money>0},
    uses: 1,
    cost: function(){return money>=12},
    flag: 0,
    element: null,
    effect: function(){
        upgrade1.flag = 1;
        log("I should be able to find more junks now.");
        money = money - 12;
        scavmax = scavmax + 1;
        upgrade1.element.parentNode.removeChild(upgrade1.element);
        var index = activeUpgrades.indexOf(upgrade1);
        activeUpgrades.splice(index, 1);
    }
}

upgrades.push(upgrade1);

var upgrade2 = {
    id: "projectButton2",
    title: "Revolver ",
    priceTag: "(100 B$)",
    description: "The boom stick does wonders for uncooperative parties.",
    trigger: function(){return money>=50},
    uses: 1,
    cost: function(){return money>=100},
    flag: 0,
    element: null,
    effect: function(){
        upgrade2.flag = 1;
        log("Bang. At least that's what I hope it does.");
        money = money - 100;
        hasGun = true;
        upgrade2.element.parentNode.removeChild(upgrade2.element);
        var index = activeUpgrades.indexOf(upgrade2);
        activeUpgrades.splice(index, 1);
    }
}

upgrades.push(upgrade2);

var upgrade3 = {
    id: "projectButton3",
    title: "Ticket to the Slums ",
    priceTag: "(30 B$)",
    description: "The place where city exiles coexist.",
    trigger: function(){return money>=12},
    uses: 1,
    cost: function(){return money>=30},
    flag: 0,
    element: null,
    effect: function(){
        upgrade3.flag = 1;
        log("Crimes here are rampant. Sounds like my favorite kind of hell.");
        money = money - 30;
        stage = 1
        setLocation(stage)
        upgrade3.element.parentNode.removeChild(upgrade3.element);
        var index = activeUpgrades.indexOf(upgrade3);
        activeUpgrades.splice(index, 1);
    }
}


upgrades.push(upgrade3);

var upgrade4 = {
    id: "projectButton4",
    title: "idk ",
    priceTag: "(5105235 B$)",
    description: "Why?",
    trigger: function(){return money>=1},
    uses: 1,
    cost: function(){return money>=5105235},
    flag: 0,
    element: null,
    effect: function(){
        money = money - 5105235
        upgrade4.flag = 1;
        log("Placeholder.")
        upgrade4.element.parentNode.removeChild(upgrade4.element);
        var index = activeUpgrades.indexOf(upgrade4);
        activeUpgrades.splice(index, 1);
    }
}


upgrades.push(upgrade4);