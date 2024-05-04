document.addEventListener("DOMContentLoaded", function() {
    const correctionsInput = document.getElementById("corrections");
    const checkedRowsInput = document.getElementById("checkedRows");
    const resultSpan = document.getElementById("result");

    correctionsInput.addEventListener("input", calculateResult);
    checkedRowsInput.addEventListener("input", calculateResult);

    function calculateResult() {
        const corrections = parseFloat(correctionsInput.value);
        const checkedRows = parseFloat(checkedRowsInput.value);

        if (!isNaN(corrections) && !isNaN(checkedRows) && checkedRows !== 0) {
            const result = ((corrections / checkedRows) * 100).toFixed(2);
            resultSpan.textContent = result + "%";

            // Apply red color directly based on the condition
            resultSpan.style.color = parseFloat(result) >= 5 ? "red" : "white";
        } else {
            resultSpan.textContent = "-";
            resultSpan.style.color = "white";
        }
    }
});
