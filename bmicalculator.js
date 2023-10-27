var name = prompt("Enter Your Name");
var age = prompt("Enter your age");
var weight = prompt("Enter Your Weight");
var height = prompt("Enter Your Height in metre");


function bmiCalculator(weight, height) {
    var bmiValue = weight / (height * height);
    return Math.round(bmiValue);
}

if (bmiCalculator(weight, height) < 18.5) {
    var healthCondition = "Underweight";
} else if (bmiCalculator(weight, height) >= 18.5 && bmiCalculator(weight, height) < 25) {
    healthCondition = "Healthy Weight";
} else if (bmiCalculator(weight, height) >= 25 && bmiCalculator(weight, height) < 30) {
    healthCondition = "Over Weight";
} else {
    healthCondition = "Obese";
}

alert("Hello " + name + ", Your BMI value is " + bmiCalculator(weight, height) + ", and you are " + healthCondition);