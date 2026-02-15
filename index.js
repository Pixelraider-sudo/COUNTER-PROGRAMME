const counterLabel = document.getElementById('counterlabel');
const decrementbtn = document.getElementById('decrementbtn');
const incrementbtn = document.getElementById('incrementbtn');
const resetbtn = document.getElementById('resetbtn');

let counter = 0;

const updateCounterLabel = () => {
    counterLabel.textContent = counter;

    if (counter > 0) {
        counterLabel.style.color = "green";
    } 
    else if (counter < 0) {
        counterLabel.style.color = "red";
    } 
    else {
        counterLabel.style.color = "black";
    }
}
incrementbtn.onclick = () => {
    counter++;
    updateCounterLabel();
}
resetbtn.onclick = () => {
    counter = 0;
    updateCounterLabel();
}
decrementbtn.onclick = () => {
    counter--;
    updateCounterLabel();
}  