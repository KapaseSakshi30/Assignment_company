document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
    let operator = "";
    let firstOperand = "";
    let secondOperand = "";

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function clear() {
        currentInput = "";
        operator = "";
        firstOperand = "";
        secondOperand = "";
        updateDisplay();
    }

    function handleOperator(op) {
        if (currentInput === "") return;
        if (firstOperand === "") {
            firstOperand = currentInput;
            operator = op;
            currentInput = "";
        } else {
            secondOperand = currentInput;
            currentInput = operate(operator, firstOperand, secondOperand).toString();
            firstOperand = currentInput;
            operator = op;
            secondOperand = "";
        }
        updateDisplay();
    }

    function operate(op, a, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (op) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                if (b === 0) return "Error";
                return a / b;
            default:
                return "Error";
        }
    }

    function handleNumber(number) {
        if (currentInput === "0" && number === "0") return;
        if (currentInput === "0" || currentInput === "Error") {
            currentInput = number;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }

    document.getElementById("clear").addEventListener("click", clear);
    document.getElementById("add").addEventListener("click", () => handleOperator("+"));
    document.getElementById("subtract").addEventListener("click", () => handleOperator("-"));
    document.getElementById("multiply").addEventListener("click", () => handleOperator("*"));
    document.getElementById("divide").addEventListener("click", () => handleOperator("/"));
    document.getElementById("calculate").addEventListener("click", () => handleOperator("="));
    document.getElementById("dot").addEventListener("click", () => {
        if (!currentInput.includes(".")) {
            currentInput += ".";
            updateDisplay();
        }
    });

    for (let i = 0; i <= 9; i++) {
        document.getElementById(i.toString()).addEventListener("click", () => handleNumber(i.toString()));
    }

    clear();
});
