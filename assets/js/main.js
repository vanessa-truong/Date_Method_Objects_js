console.log("work")

// Level 1_1
const div = document.querySelector('div');

let date1 = new Date();
console.log(date1);
div.innerHTML += date1;

let date2 = new Date(0);
div.innerHTML += "<br>" + date2;


let date3 = new Date(31556908800);
div.innerHTML += "<br>" + date3;

let date4 = new Date(86400000);
div.innerHTML += "<br>" + date4;


// Level 1_2

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let date0 = new Date();
console.log(date0.getFullYear());

div.innerHTML += "<br>" + "<br>" + date0.getFullYear();
div.innerHTML += "<br>" + date0.getMonth() + " Monat";
div.innerHTML += "<br>" + date0.getDay() + " Tag";
div.innerHTML += "<br>" + date0.getHours() + " Stunde";
div.innerHTML += "<br>" + date0.getMinutes() + " Minute";

div.innerHTML += "<br>" + monate[date0.getMonth()];
div.innerHTML += "<br>" + wochenTag[date0.getDay()];



// Level 1_3

let d = new Date(2123, 9, 23, 13, 25);
// console.log(d);


div.innerHTML += new Date(d.setFullYear(2222));


div.innerHTML += "<br>" + new Date(date0.setDate(date0.getDate() + 30));



// Level 1_5

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let monatsName = new Date("March 4, 2001");
let monatsName1 = new Date(2019, 11, 24);
let monatsName2 = new Date(1410, 6, 15);

console.log(list[monatsName.getMonth()]);
console.log(list[monatsName1.getMonth()]);
console.log(list[monatsName2.getMonth()]);


// Level 2_1

const body = document.querySelector('body');

const dateToday = () => {
    const body = document.querySelector('body');
    const div = document.querySelector('div');
    body.appendChild(div);
    let currentDay = new Date();
    let day = currentDay.getDate();
    let month = currentDay.getMonth();
    let year = currentDay.getFullYear();
    div.innerHTML += `<br>${day}-${month}-${year}`;
}


dateToday();