// no 4

// var object = {
// name:"abdul",
// age: 27
// }

var object = [1, 5, 8, 9]

for (const key in object) {
   console.log(object[key]);
}

console.log("panggil per index "+object[0]);

function foo1() {
    return {
        salam: "hai"
    };
}

function foo2() {
    return 
    {
        salam: "hai"
    };
}

var obj = {
    name: "rocky",
    level: "Big"
}

console.log(foo2().salam);