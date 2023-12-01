let playerStats = {
    gather: 1,
    wallet: 0,
    axeSharp: 1,
    axeGrip: 1,
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
    gatherAddAuto: 3,
    price: 30,
}];


pageUpdate()


function collectWood() {
    let currentGath = playerStats.gather
    console.log(currentGath)
    playerStats.wallet += currentGath
    console.log(playerStats.wallet)
   
    
    pageUpdate()
}

function pageUpdate(){
document.getElementById("cash").innerText = playerStats.wallet
document.getElementById("gather-rate").innerText = playerStats.gather
document.getElementById("axe-sharpness").innerText = playerStats.axeSharp
document.getElementById("axe-grip").innerText = playerStats.axeGrip
document.getElementById("sharp-price").innerText = upgrades[0].price
document.getElementById("grip-price").innerText = upgrades[1].price

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
    }

}

function newGrip(){
    let gripPrice = upgrades[1].price
    if(playerStats.wallet >= gripPrice){
        let newGrip = upgrades[1].gatherAdd
        playerStats.gather += newGrip
        playerStats.axeGrip += newGrip
        playerStats.wallet -= gripPrice
        upgrades[1].price *= 3
        pageUpdate()
    }
}