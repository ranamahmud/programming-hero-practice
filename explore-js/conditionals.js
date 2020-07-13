var number = 5;

if(number > 2){
    console.log("Yes");
}

var biscuitPrice = 12;

if(biscuitPrice < 10){
    console.log("I will eat the buiscuits.")
}else{
    console.log("Khali Cha is Better")
}

if(biscuitPrice == 10){
    console.log("I will eat the buiscuits.")
}else{
    console.log("Khali Cha is Better")
}


if(biscuitPrice != 10){
    console.log("I will eat the buiscuits.")
}else{
    console.log("Khali Cha is Better")
}


if(biscuitPrice == 12){
    console.log("I will eat the buiscuits.")
}else{
    console.log("Khali Cha is Better")
}

var jobPaiso = true;
var savingAmount = 5000;

if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomar patri khuji");
} else{
    console.log("Tor kopale biya nai");
}

savingAmount = 500000;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomar patri khuji");
} else{
    console.log("Tor kopale biya nai");
}
jobPaiso = false;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomar patri khuji");
} else{
    console.log("Tor kopale biya nai");
}

savingAmount = 50;
if(jobPaiso == true || savingAmount > 200000){
    console.log("Aso tomar patri khuji");
} else{
    console.log("Tor kopale biya nai");
}
jobPaiso = true;
if(jobPaiso == true || savingAmount > 200000){
    console.log("Aso tomar patri khuji");
} else if(jobPaiso == true){
    console.log("acha koi din pore dekhbo");
}else{
    console.log("Tor kopale biya nai");

}
