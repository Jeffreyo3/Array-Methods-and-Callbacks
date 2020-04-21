import { fifaData } from './fifa.js';
// console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


// filter Finals
const finals2014 = fifaData.filter(item =>
    item.Year === 2014 && item.Stage === "Final"
)
//(a) Home Team name for 2014 world cup final
console.log("Task 1a:", finals2014[0]['Home Team Name'])

//(b) Away Team name for 2014 world cup final
console.log("Task 1b:", finals2014[0]['Away Team Name'])

//(c) Home Team goals for 2014 world cup final
console.log("Task 1c:", finals2014[0]['Home Team Goals'])

//(d) Away Team goals for 2014 world cup final
console.log("Task 1d:", finals2014[0]['Away Team Goals'])

//(e) Winner of 2014 world cup final
console.log("Task 1e:", finals2014[0]['Win conditions'])


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const allFinals = data.filter(match => match.Stage === "Final");
    return allFinals;
};

console.log("Task 2:", getFinals(fifaData));

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, getFinals) {
    // const finalsData = getFinals(data);
    // const yearsArray = finalsData.map(final => {
    //     return final.Year
    // })
    // return yearsArray;

    return getFinals(data).map(item => item.Year)
};

console.log("Task 3:", getYears(fifaData, getFinals));

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(data, getFinals) {
    // const finalsData = getFinals(data);
    // const winner = finalsData.map(match => {
    //     if (match["Home Team Goals"] > match["Away Team Goals"]) {
    //         return `Home team, ${match["Home Team Name"]} was the victor!`
    //     } else {
    //         return `Away team was the victor. ${match["Away Team Name"]}.`
    //     }
    // })
    // return winner

    return getFinals(data).map(match => match["Home Team Goals"] > match["Away Team Goals"] ? match["Home Team Name"] : match["Away Team Name"])

};

console.log("Task 5:", getWinners(fifaData, getFinals));

/* Task 6: Implement a higher-order function called `getAllWinners` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(data, getYears, getWinners) {

    const winners = getWinners(data, getFinals);
    const years = getYears(data, getFinals);
    return winners.map((item, index) => `In ${years[index]}, ${item} won the world cup!`);

};

console.log("Task 6:", getAllWinners(fifaData, getYears, getWinners));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */


// USING .FILTER()
// function getCountryWins(data, teamInitials) {
//     const winnerInitials = data.map(match => {
//         if (match["Home Team Goals"] > match["Away Team Goals"]) {
//             return { initials: match["Home Team Initials"], name: match["Home Team Name"] }
//         } else {
//             return { initials: match["Away Team Initials"], name: match["Away Team Name"] }
//         }
//     })
//     const winName = winnerInitials.filter(name => name.initials === teamInitials)

//     return `${winName[0] ? winName[0].name : teamInitials} has ${winName.length} World Cup win${winName.length === 1 ? '.' : 's.'}`
// };


// USING .FOREACH()
function getCountryWins(data, teamInitials) {
    let count = 0;
    const initials = data.map(match => {
        if (match["Home Team Goals"] > match["Away Team Goals"]) {
            return match["Home Team Initials"];
        } else {
            return match["Away Team Initials"];
        }
    });
    initials.forEach(name => {
        if (name === teamInitials) {
            count++;
        }
    });

    return count;
}

console.log("Task 7:", getCountryWins(getFinals(fifaData), "GER"));

/*  STRETCH Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const averageHomeGoals = data.reduce(function (accumulator, item) {
        return accumulator + item["Home Team Goals"] + item["Away Team Goals"]
    }, 0)
    return (averageHomeGoals / data.length).toFixed(2)
};

console.log("Task 10:", getAverageGoals(getFinals(fifaData)));


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */