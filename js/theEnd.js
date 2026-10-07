const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function panOut(){
document.getElementById("roomanimator").classList.remove("panningBack")
document.getElementById("roomanimator").classList.add("panningOut")
}

function panIn(){
document.getElementById("roomanimator").classList.remove("panningOut")
document.getElementById("roomanimator").classList.add("panningBack")
}

function correction(){
document.getElementById("roomanimator").classList.add("correction")
}

async function throwToEnemy(){
document.getElementById("tablegun").classList.remove("hidden")
document.getElementById("tablegun").classList.remove("gunToMe")
document.getElementById("tablegun").classList.add("gunToEnemy")
await sleep(1000)
document.getElementById("tablegun").classList.add("hidden")
}

async function throwToMe(){
document.getElementById("tablegun").classList.remove("hidden")
document.getElementById("tablegun").classList.remove("gunToEnemy")
document.getElementById("tablegun").classList.add("gunToMe")
await sleep(1000)
document.getElementById("tablegun").classList.add("hidden")
}

async function panTest(){
panOut()
await sleep(3000)
throwToMe()
await sleep(2000)
panIn()
await sleep(5000)
panOut()
await sleep(3000)
throwToEnemy()
await sleep(2000)
panIn()
}

panTest()