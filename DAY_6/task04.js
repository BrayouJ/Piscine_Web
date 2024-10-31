export function fizzBuzz(num) {
    let list = []
    for (let i = 1; i <= num; i++) {
        if (i%15 == 0) {
            list.push("FizzBuzz");
        }
        else if (i%3 == 0) {
            list.push("Fizz");
        }
        else if (i%5 == 0) {
            list.push("Buzz");
        }
        else {
            list.push(i.toString());
        }
    }
    let result = list.join(", ")
    console.log(result);
    return result
}