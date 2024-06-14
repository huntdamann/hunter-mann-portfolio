const workSection = document.getElementById('worksection')
const picture = document.getElementById('pic-container')
const options = {
    root: null,
    rootMargin: "5px",
    threshold: 1,
};
const observer = new IntersectionObserver(intersectionCallback, options);

console.log(workSection);
observer.observe(workSection);
    


function intersectionCallback(entries) {
   
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("Education section is shown");
            picture.classList.add('showPicture')
        }
        else {
            console.log("I am currently not in the viewport");
            picture.classList.remove('showPicture')
        }
    })
}









