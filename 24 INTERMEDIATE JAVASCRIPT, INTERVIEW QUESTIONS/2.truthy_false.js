let name = "";
if (name) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}

name = " ";
if (name) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}

// 0
// ""
// false
// undefined
// null
// NaN
// Truthy
// '0' ' ' 'false'
name = null;
if (name) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}


name = [];
if (name) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}