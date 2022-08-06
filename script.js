let dt = new Date();
console.log(dt);

let newDate = new Date("1997-03-17")
console.log(newDate);

let newDate1 = new Date(2025,03,17,11,15,17);
console.log(newDate1);

let yr = newDate1.getFullYear();
console.log("This is the year", yr);

let mont = newDate1.getMonth();
console.log("This is month",mont);

let hours = newDate1.getHours();
console.log("This is hours right now", hours);

 let min = newDate1.getMinutes();
 console.log("This is minute", min);

let abc = newDate1.setDate(2);
console.log(abc);

let xyz = Date.UTC
console.log(xyz)


setInterval(updateTime , 1000);

function updateTime(){
    time.innerHTML = new Date();
}