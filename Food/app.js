const viewButtons = document.querySelectorAll('.recipe-card button');
viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to the recipe page!');
    });
});
