for(var i = 0; i < 10; i++) {
    app.theCounter.increment();
}
/* var x = app.counter.getCounter();
x = x + 100;
app.counter = 100;
app.counter.counter = 100;
app.counter.getCounter() = app.counter.getCounter() + 100;
app.counter.getCounter() = 100; */
console.log(app.theCounter.getCounter());

var counterA = app.createCounters.createCounter();
for(var i = 0; i < 5; i++) {
    counterA.increment();
}
console.log(counterA.getCounter());

var counterB = app.createCounters.createCounter();
for(var i = 0; i < 15; i++) {
    counterB.increment();
}
console.log(counterB.getCounter());
console.log(app.createCounters.getAmountCreated());
