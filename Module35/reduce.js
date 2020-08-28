const nums = [12, 25, 37, 29, 100];
nums.map(num => num * 2);
nums.filter(num => num > 20);
nums.find(num => num > 23);

let total = nums.reduce((sum, num) => {
    console.log(sum, num);
    
    return sum + num;
}, 0)
console.log(total);

const friends = [
    {name:'Rashed', money:12},
    
    {name:'Kashed', money:25},
    
    {name:'Pashed', money:37},
    
    {name:'Nashed', money:29},
    
    {name:'Munia', money:100},
];

const toatalFriends = friends.reduce((sum, friend) =>{
    console.log(sum, friend.money);
    return sum + friend.money;
}, 0)
console.log(toatalFriends);