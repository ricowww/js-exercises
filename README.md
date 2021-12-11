# js-exercises
TOP project


function showMessage(text) {
   text = text || 'empty';
   alert(text);
}


////A function can return a value back into the calling code as the result.
function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
alert( result ); // 3


//Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
function power(x,n) {
    let result = x;
    for (let i = 1; i < n; i++) {
       result *= x;
   }
    return result;
}

alert(power(10, 5));


//Let’s look at more examples of passing functions as values and using function expressions.

function ask(q, y, n) {
    if (confirm(q)) y()
    else n();
}

function showOk() {
    alert('You agreed');
}

function showCancel() {
    alert('U cancelled');
}

ask('do you agree?', showOk, showCancel); //input functions as inputs to a bigger function





