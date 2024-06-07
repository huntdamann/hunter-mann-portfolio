console.log("Thank you for visiting my site!");
console.log("Produced and engineered by hunter mann");

console.log(
  "              _-o#&&*''''?d:>b\\_\r\n          _o/\"`''  '',, dMF9MMMMMHo_\r\n       .o&#'        `\"MbHMMMMMMMMMMMHo.\r\n     .o\"\" '         vodM*$&&HMMMMMMMMMM?.\r\n    ,'              $M&ood,~'`(&##MMMMMMH\\\r\n   /               ,MMMMMMM#b?#bobMMMMHMMML\r\n  &              ?MMMMMMMMMMMMMMMMM7MMM$R*Hk\r\n ?$.            :MMMMMMMMMMMMMMMMMMM/HMMM|`*L\r\n|               |MMMMMMMMMMMMMMMMMMMMbMH'   T,\r\n$H#:            `*MMMMMMMMMMMMMMMMMMMMb#}'  `?\r\n]MMH#             \"\"*\"\"\"\"*#MMMMMMMMMMMMM'    -\r\nMMMMMb_                   |MMMMMMMMMMMP'     :\r\nHMMMMMMMHo                 `MMMMMMMMMT       .\r\n?MMMMMMMMP                  9MMMMMMMM}       -\r\n-?MMMMMMM                  |MMMMMMMMM?,d-    '\r\n :|MMMMMM-                 `MMMMMMMT .M|.   :\r\n  .9MMM[                    &MMMMM*' `'    .\r\n   :9MMk                    `MMM#\"        -\r\n     &M}                     `          .-\r\n      `&.                             .\r\n        `~,   .                     ./\r\n            . _                  .-\r\n              '`--._,dd###pp=\"\"' The World is OUR PLAYGROUND, Create to your hearts desire...",
);



const burgerIcon = document.getElementById("burger-handle");
const menu = document.getElementById("menu-handle");
const doorIcon = document.getElementById("door-handle");


let show = 0;

function burgerClick() {
  if (show == 0) {
    menu.classList.toggle('show'); 
    console.log('Show Menu');
    show = 1;
  }
}
function doorClick() {
    if (show==1) {
        menu.classList.toggle('show');
        console.log('Close Menu')
        show = 0;
    }
}

burgerIcon.addEventListener('click', burgerClick);
doorIcon.addEventListener('click', doorClick);

