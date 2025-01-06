const workSection = document.getElementById('worksection')
const picture = document.getElementById('pic-container')
const skill = document.querySelector('#sk')


const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,

};

const callback = (entries, observer) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      console.log(entry);
    }

  })
}

const observer = new IntersectionObserver(callback,options);

observer.observe(skill);





