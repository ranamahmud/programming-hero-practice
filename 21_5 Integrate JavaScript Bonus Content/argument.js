function getFullName(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    return fullName;
}

const name = getFullName('omor','Hanif','songkhet','bin', 'Poribohon');
console.log(name);


function getFullNameArg(firstName, lastName) {
    console.log(arguments);
    let fullName = '';
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName + ' '+namePart
    }
    return fullName;
}

const nameArg = getFullNameArg('omor','Hanif','songkhet','bin', 'Poribohon','subokta','jonodorodi');
console.log(nameArg);