let playerStats = {
    gather: 1,
    wallet: 0,
    axeSharp: 1,
    axeGrip: 1,
    apprentice: 0,
    chainExpert: 0,
    autoGather: 0
}

let upgrades = [{
    name: 'sharpen',
    gatherAdd: 1,
    price: 10,
},{
    name: 'Better Grip',
    gatherAdd: 2,
    price: 20,
}];

let autoUpgrades =[{
    name: 'Lumber Apprentice',
    gatherAddAuto: 1,
    price: 15,
},{
    name: 'Chainsaw Expert',
    gatherAddAuto: 4,
    price: 30,
}];


pageUpdate()
upgradeUpdate()


function collectWood() {
    let currentGath = playerStats.gather
    console.log(currentGath)
    playerStats.wallet += currentGath
    console.log(playerStats.wallet)
   
    
    pageUpdate()
    
}


setInterval(autoGather, 3000)
function autoGather(){
    if(playerStats.autoGather >= 1){
        let autocash = playerStats.autoGather
        playerStats.wallet += autocash
        console.log(autocash)
        autoUpdate()
        pageUpdate()
    }

}

function pageUpdate(){
document.getElementById("cash").innerText = playerStats.wallet
document.getElementById("sharp-price").innerText = upgrades[0].price
document.getElementById("grip-price").innerText = upgrades[1].price
document.getElementById("app-price").innerText = autoUpgrades[0].price
document.getElementById("chain-price").innerText = autoUpgrades[1].price

}

function upgradeUpdate(){
    document.getElementById("gather-rate").innerText = playerStats.gather
    document.getElementById("app-labor").innerText = playerStats.apprentice
    document.getElementById("axe-grip").innerText = playerStats.axeGrip
    document.getElementById("axe-sharpness").innerText = playerStats.axeSharp
    document.getElementById("chain-labor").innerText = playerStats.chainExpert
}

function autoUpdate(){
    let autoNum = playerStats.autoGather
    document.getElementById("auto-gather").innerText = autoNum
}


function sharpenAxe(){
    let sharpPrice = upgrades[0].price
    if(playerStats.wallet >= sharpPrice){
        let sharpenU = upgrades[0].gatherAdd
        console.log(sharpenU)
        playerStats.gather += sharpenU
        playerStats.axeSharp += sharpenU
        playerStats.wallet -= sharpPrice
        upgrades[0].price += sharpPrice
        pageUpdate()
        upgradeUpdate()
    }

}

function newGrip(){
    let gripPrice = upgrades[1].price
    if(playerStats.wallet >= gripPrice){
        let newGrip = upgrades[1].gatherAdd
        playerStats.gather += newGrip
        playerStats.axeGrip++
        playerStats.wallet -= gripPrice
        upgrades[1].price *= 3
        pageUpdate()
        upgradeUpdate()
    }
}

function appBuy(){
    let appPrice = autoUpgrades[0].price
    if(playerStats.wallet >= appPrice){
        let appUpgrade = autoUpgrades[0].gatherAddAuto
        playerStats.autoGather += appUpgrade
        playerStats.apprentice++
        playerStats.wallet -= appPrice
        autoUpgrades[0].price *= 2
        autoUpdate()
        pageUpdate()
        upgradeUpdate()
    }
}

function chainBuy(){
    let chainPrice = autoUpgrades[1].price
    if(playerStats.wallet >= chainPrice){
        let chainUpgrade = autoUpgrades[1].gatherAddAuto
        playerStats.autoGather += chainUpgrade
        playerStats.chainExpert++
        playerStats.wallet -= chainPrice
        autoUpgrades[1].price *= 3.5
        autoUpdate()
        pageUpdate()
        upgradeUpdate()
    }
}