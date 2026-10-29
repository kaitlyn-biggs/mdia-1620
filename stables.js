// Rent Info
let rent = 1000;
let lateRent = rent * 1.2;

// Horses
let naomi = {
    name: "Naomi",
    nickname: "Neigh",
    age: 1,
    favoriteTreat: "carrots",
    rent: rent,
    lateRent: lateRent,
    isInside: true,
    color: "brown",
    breed: "Thoroughbred",
};
let maribel = {
    name: "Maribel",
    nickname: "Mare",
    age: 5,
    favoriteTreat: "apples",
    rent: rent,
    lateRent: lateRent,
    isInside: false,
    color: "chestnut",
    breed: "Arabian",
};
let winona = {
    name: "Winona",
    nickname: "Winnie",
    age: 10,
    favoriteTreat: "celery",
    rent: rent,
    lateRent: lateRent,
    isInside: true,
    color: "black",
    breed: "Clydesdale",
};

let horses = [naomi, maribel, winona];

// New Horse
let prancelot = {
    name: "Prancelot",
    nickname: "Prance",
    age: 10,
    favoriteTreat: "sugar cubes",
    rent: rent,
    lateRent: lateRent,
    isInside: false,
    color: "palamino",
    breed: "American Saddlebred",
};

horses.push(prancelot);

// Hungry?
naomi.IsHungry = true;
maribel.isHungry = true;
winona.isHungry = false;
prancelot.isHungry = false;

// Log Available Stalls
let totalNumberOfStalls = 8;

function logAvailableStalls () {
    console.log(totalNumberOfStalls - horses.length);
};

// Log Late Rent
function logLateRentRate (horse) {
    console.log(horse.lateRent);
};

logLateRentRate(naomi);

// Log Nickname
function getHorseNickname (horse) {
    return horse.nickname;
};

console.log(getHorseNickname(naomi))