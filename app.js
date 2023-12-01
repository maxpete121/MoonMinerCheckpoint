let playerStats = {
    gather: 1,
    wallet: 0,
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





function collectWood() {
    let currentGath = playerStats.gather
    console.log(currentGath)
    playerStats.wallet += currentGath
    console.log(playerStats.wallet)
   
    
    pageUpdate()
}

function pageUpdate(){
document.getElementById("cash").innerText = playerStats.wallet
}