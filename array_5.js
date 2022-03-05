var donuts = ["glazed", "chocolate frosted", "boston cream", "powdered", "sprinkled", "maple", "coconut", "jelly"];


donuts[2] = "cinnamon twist";
donuts[4] = "salted caramel";
donuts[5] = "shortcake eclair";
console.log(donuts);


donuts.reverse();

console.log("--------")
console.log(donuts);

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
