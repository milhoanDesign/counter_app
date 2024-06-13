
// Initialize the count as 0
// Listen for clicks on the Increment button
// Increment the count variable when the button is clicked
// Change the count-el in the HTML to reflect the new count


document.addEventListener("DOMContentLoaded", function() {
    const incrementBtn = document.getElementById("increment-btn");
    const countEl = document.getElementById("count-el");

    let count = 0;

    incrementBtn.addEventListener("click", function() {
        count++;
        countEl.textContent = count;
    });
});
