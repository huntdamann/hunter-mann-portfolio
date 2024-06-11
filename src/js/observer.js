

const sectionOne = document.querySelector('#section-1');
const hiddenElements = document.querySelectorAll('.h');
const skill = document.querySelectorAll('#skill')
const section = document.querySelector("#section");
const options = {

    rootMargin: "0px",
    threshold: 1 
}


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

        console.log("section 1");

       
        }

    })
}, {

    threshold: 0.8,
    delay:200,
    rootMargin:"0px",
});


observer.observe(section);



