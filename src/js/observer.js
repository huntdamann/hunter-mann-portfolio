const workSection = document.getElementById('worksection')
const picture = document.getElementById('pic-container')
const skill = document.getElementById('skill')
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
};
const observer = new IntersectionObserver(intersectionCallback, options);
const skillObserver = new IntersectionObserver(callback, options)

console.log(workSection);
observer.observe(workSection);
skillObserver.observe(skill);
    


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

function callback(entries) {
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            console.log("Skill is in view")
        }
        else {
            console.log("Skill is not in view anymore")
        }



    })
}









