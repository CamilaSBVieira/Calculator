const error = document.querySelector('.error');

export function alerta() {
    error.innerHTML = "<div class='alert'>Number can\'t be longer <span class='close' >X</span></div>";
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
        const msgAlerta = document.querySelector('.alert');
        error.removeChild(msgAlerta);
    });
}
