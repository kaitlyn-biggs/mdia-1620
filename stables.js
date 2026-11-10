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
naomi.isHungry = true;
maribel.isHungry = true;
winona.isHungry = false;
prancelot.isHungry = false;

// Log Available Stalls
function logAvailableStalls(horsesInStable) {
    let stalls = 8;
    console.log(stalls - horsesInStable);
};

// Log Late Rent
function logLateRentRate(horse) {
    console.log(horse.lateRent);
};

logLateRentRate(naomi);

// Log Nickname
function getHorseNickname(horse) {
    return horse.nickname;
};

console.log(getHorseNickname(naomi));

// Who Likes this Treat?
for (const horse of horses) {
    let treatGiven = "sugar cubes";
    if (horse.favoriteTreat == treatGiven) {
        console.log(`${horse.name} is very thankful for their ${treatGiven}!`);
        break;
    } else {
        console.log(`${horse.name} would prefer a different treat.`);
    }
}

// Describe My Horse
function describeMyHorse(horse) {
    if (horse.age >= 5) {
        console.log(`${horse.name} is not a baby anymore!`);
    } else {
        console.log(`${horse.name} is still a baby!`)
    }
}

for (const horse of horses) {
    describeMyHorse(horse);
}

// Move Horses Inside/Outside Based on Time of Day
function moveMyHorses(time, horsesToMove) {
    // time must be entered as the hour number in 24-hour format (e.g. 12:30 pm = 12)
    let validTime = time >= 0 && time <= 24;

    if (!validTime) {
        console.log("Please enter a valid time to run this function (e.g. 0 - 24).");
        return;
    }

    let isDarkOutside = (time >= 18 || time <= 6);

    for (const horse of horsesToMove) {
        if (isDarkOutside && !horse.isInside) {
            horse.isInside = true;
            console.log(`It's dark outside. ${horse.name} is inside sleeping.`);
        } else if (!isDarkOutside && horse.isInside) {
            horse.isInside = false;
            console.log(`${horse.name} is going outside to soak in the sun.`);
        }
    }
}

moveMyHorses(20, [naomi, maribel, prancelot]);

// Feed Horses
function feedMyHorses(horsesToFeed) {
    for (const horse of horsesToFeed) {
        if (horse.isInside == false) {
            horse.isInside = true;
            horse.isHungry = false;
            console.log(`${horse.name} was brought inside and ate ${horse.favoriteTreat}.`);
        } else {
            horse.isHungry = false;
            console.log(`${horse.name} was inside already and ate ${horse.favoriteTreat}.`);
        }
    }
}

feedMyHorses(horses);