const btn = document.querySelector(".button");

const performCalculation=()=>{
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    


    let result;


    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter a valid number!";
    }
    else {
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;

            case "subtract":
                result = num1 - num2;
                break;

            case "multiply":
                result = num1 * num2;
                break;

            case "divide":
                if(num2===0){
                    result="Cannot divide by zero";
                }
                else{
                result = num1 / num2;
                }
                break;
            default:
                result = "Invalid option selected";
        }
    }
    console.log(result);
    document.getElementById("result").textContent = result;

}

btn.addEventListener("click",performCalculation);
