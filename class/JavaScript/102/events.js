const theButton = document.getElementById('theButton');/*,
      handler = () => {
            console.log('clicked');
            theButton.removeEventListener('click', handler);
      };
theButton.addEventListener('click', handler);*/

//const numbers = [1,2,3,4,5,6];
//const numbers = Rx.Observable.from([1,2,3,4,5,6])
/*const numbers = Rx.Observable.interval(500).take(7);
numbers.filter(n => n > 0 && n % 2 == 0)
       .map(n => n + '!')
       .forEach(n => console.log(n));

console.log('After Rxjs code');*/

var source = Rx.Observable.fromEvent(theButton, 'click');

//source.forEach(event => console.log('clicked', event));
try {
    const subscription = source
        .map(event => {
            throw 'OOPS!';
            return `Event Time: ${event.timeStamp}`;
        })
        .finally(() => console.log("Finally"))
        .subscribe(event => {
            console.log('clicked', event);
            subscription.unsubscribe();
        },
        err => console.log(err),
        completed => console.log('Completed')
        );
} catch (err) {
    console.log(err);
}