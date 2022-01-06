// const title = document.getElementById('#title')
// console.log(title)

// title.addEventListener('click',()=>{
//     alert('hello')
// })

//alert('hello');

let mn = 0;
while( mn <= 10){
    if ( mn == 5){
        continue;
        mn++;
    }
    console.log(mn);
    mn++;
}

let colors = {
    first : "blue",
    second : "red",
    third : "green"
}
for(let i in colors){
    console.log(i)
}

function carCreation(distance){
    return {
        distance : 1,
        location : {
            x:2,
            y:2
        },
        happy(){
            return "hello";
        }
    }
}
let car1 = carCreation(55);
console.log(car1)