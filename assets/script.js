// A query selector is a method that allows us to grab an element from the DOM and do something with it.
const panels = document.querySelectorAll('.panel');

// a function that listens for a click on a panel and removes the active class from the panel that is currently active to the panel that is clicked on.
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

// a function that removes the active class from the panel that is currently active.
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}