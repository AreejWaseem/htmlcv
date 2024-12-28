
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('header .btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Button clicked: ' + button.textContent);
        });
    });

    const cont
