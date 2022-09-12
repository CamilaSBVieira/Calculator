// get error div
const error = document.querySelector('.error');
// function to add alert on the error element
export function alerta() {
    // add alert to the error element
    error.innerHTML = "<div class='alert'>Can't enter more than 9 digits<span class='close' >X</span></div>";
    // get the close button
    const close = document.querySelector('.close');
    // adds event listener for clicks on the close button
    close.addEventListener('click', () => {
        // get the alert div
        const msgAlerta = document.querySelector('.alert');
        // and removes it from the error div
        error.removeChild(msgAlerta);
    });
}
