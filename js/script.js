// let user = {
//     login: {
//         firstName: 'Kate',
//         lastName: 'Pavlova'
//     },
//     password: 'qwerty',
//     role: 'quest'
// }

// document.writeln(Object.keys(user).length);

// // document.writeln(user.password);
// // console.log(user);

// let {login: {firstName: f, lastName: l}, ...rest} = user;
// document.writeln(f + ' ' + l + ' ' + rest.password + ' ' + user.role);

// let number = [3,5,6];
// let [, , c] = number;

// document.writeln(c)

let obj = {
    colors: {
        first: "yellow",
        second: "green"
    },
    color: [
        'black',
        'white',
        'red',        
        'blue'
    ]
}

// let fil = obj.color.filter(function(elem){
//     return elem.length<5;
// });

// let fil = obj.color.map(function(elem, index, all){
//     return elem + " " + index + " массив: " + all + "<br>"
// })

let fil = Object.keys(obj.colors).map(function(elem){
    return elem + ": " + obj.colors[elem] + "<br>"
})

document.writeln(fil);
console.log(fil);


