function explain_callback(name, age, task) {
    console.log('hello', name);
    console.log('your age',age);
    washHands();
    trakeShower();
}

function washHands() {
    console.log("Wash hand with sope");
}

function trakeShower() {
    console.log("Take shower");
}
explain_callback('Sogir Uddin', 17);
explain_callback('Kogir Uddin', 13);


function explain_callback2(name, age, task) {
    console.log('hello', name);
    console.log('your age',age);
    task();
}

function washHands() {
    console.log("Wash hand with sope");
}

function trakeShower() {
    console.log("Take shower");
}

function scrollFacebook() {
    console.log("Scroll facebook but don't like any posts");
}
explain_callback2('Sogir Uddin', 17,washHands);
explain_callback2('Kogir Uddin', 13, trakeShower);
explain_callback2('Jogir Uddin',13, scrollFacebook);