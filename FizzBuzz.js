////FizzBuzz
//
////When a user inputs a number
////Loop from 1 to the entered number
////If the current number is divisible by 3 then print "Fizz"
////If the current number is divisible by 5 then print "Buzz"
////If the current number is divisible by 3 and 5 then print "FizzBuzz"
////Otherwise print the current number
//
//
////When a user inputs a number
//
//let x = prompt('Enter a number', '');
////alert(x);
//
//
////Loop from 1 to the entered number
//
//let countToNum = x => {
//    let result = x;
//    for (let i = 1; i < x; i++) {
//        //alert(i);
//    }
//
//}
//
////If the current number is divisible by 3 then print "Fizz"
//let fbzResult;
//let fizzBuzz = i => {if (i % 3 == 0 && i % 5 == 0) {
//    fbzResult = 'FizzBuzz';
//    alert(fbzResult);
//    } else if (i % 3 == 0) {
//        fbzResult = 'Fizz';
//        alert(fbzResult);
//    } else if (i % 5 == 0) {
//        fbzResult = 'Buzz';
//        alert(fbzResult);
//    } else {
//        fbzResult = i;
//        alert(fbzResult);
//    }
//}
//
//fizzBuzz(15);


//final code

//count function
let countToNum = x => {
    let result = x;
    for (let i = 1; i < x; i++) {
        fizzBuzz(i);

    }

}
//fizzbuzz
let fbzResult;
let fizzBuzz = j => {if (j % 3 == 0 && j % 5 == 0) {
    fbzResult = 'FizzBuzz';
    alert(fbzResult);
    } else if (j % 3 == 0) {
        fbzResult = 'Fizz';
        alert(fbzResult);
    } else if (j % 5 == 0) {
        fbzResult = 'Buzz';
        alert(fbzResult);
    } else {
        fbzResult = j;
        alert(fbzResult);
    }
}
//ask for number
let x = prompt('Enter a number', '');
countToNum(x);


