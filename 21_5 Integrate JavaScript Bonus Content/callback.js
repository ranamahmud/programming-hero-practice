function welComeGuest(name,greetHandler) {
    greetHandler(name)
}

const actorName = 'Tom Hanks';


function greetMorning(name) {
    console.log('Good Morning',name);
}
function greetEvening(name) {
    console.log('Good Evening',name);
}

function greetAfternoon(name) {
    console.log('Good Afternoon',name);
}

welComeGuest(actorName,greetMorning);
welComeGuest(actorName,greetEvening);
welComeGuest(actorName, greetAfternoon);
welComeGuest('Kate Winslet',greetEvening);
welComeGuest('Shakib Khan', greetMorning);
welComeGuest('Shakib Khan', function (name) {
    console.log('Special Welcome',name);
});

function handleClick() {
    console.log('Someone Clicked Me');
}
// document.getElementById('click').addEventListener('click',handleClick);

// document.getElementById('click').addEventListener('click',function(){
//     console.log('click me again');
// });

