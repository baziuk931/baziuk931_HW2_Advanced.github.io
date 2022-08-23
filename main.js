//Variables

let n = 0;
let m = 0;
let evenNumber;
let result = 0;


// Get 'N' value from user

n = prompt('please specify the N value - integer number');
console.log(n);



//Check if 'N' is an integer


while (!Number.isInteger(+n) || n === "" || n===null) {

        alert("Wrong value, please add integer number");
        n = prompt('please specify the N value - integer number');

}

//Get 'M' value from user

m = prompt('please specify the M value - integer number');
console.log(m);

//Check if 'M' is an integer

while (!Number.isInteger(+m) || m === ''|| n===null) {
    alert("Wrong value, please add integer number");
    m = prompt('please specify the M value - integer number');
}


//Confirm that we can use even numbers

evenNumber = confirm("Should we skip even numbers? If so click 'Ok', otherwise we will summarize all values");
console.log(evenNumber);


// loop to count N to M values with if alse condition to exclude even numbers

if (evenNumber) {
    if (!(n % 2)) {
        n++;

        for (let i = n; i <= m; i += 2) {

            result += i;
            console.log(result);
        }

    }
    else {

        for (let i = Number(n); i <= m; i += 2) {

            result += i;
            console.log(result);

        }

    }
}
else {
    for (let i = n; i <= m; i++) {

        result += Number(i);
        console.log(result);

    }
}

document.writeln(`The sum of numbers is ${result}.`);


