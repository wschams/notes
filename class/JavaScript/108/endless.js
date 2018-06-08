/*let die = false,
    i = 0;

setTimeout(() => die = true, 2000);

while (!die) {
    console.log(i++);
}*/

let interval,
    i = 0;

setTimeout(() => clearInterval(interval), 2000);

interval = setInterval(() => console.log(i++), 0);