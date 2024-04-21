let counter = 0;
function increment() {
    counter++;
    document.querySelector('body').innerHTML = counter;
}
document.addEventListener('click', increment);
document.onkeydown = increment;