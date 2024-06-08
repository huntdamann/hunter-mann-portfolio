

const sectionOne = document.querySelector('#section-1');
const hiddenElements = document.querySelectorAll('.h');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        entry.target.classList.toggle("show-content", entry.isIntersecting)
    })
}, {

    threshold: 0.5,
});

hiddenElements.forEach(el => {

    observer.observe(el);

})



