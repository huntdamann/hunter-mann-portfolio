const workSection = document.getElementById('worksection')
const picture = document.getElementById('pic-container')
const skill = document.getElementById('skill')



window.addEventListener(
    "load",
    (event) => {
      createObserver();
    },
    false,
  );


let options = {
    root: document.querySelector("#skill"),
    rootMargin: "0px",
    threshold: 1.0,

};

let observer = new IntersectionObserver(callback,options);





