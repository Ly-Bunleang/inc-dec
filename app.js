const btn_inc   = document.querySelector(".btn-inc");
const btn_dec   = document.querySelector(".btn-dec");
const btn_reset = document.querySelector(".btn-reset");
const show      = document.querySelector("span");

let number = 0;

btn_inc.addEventListener("click", function(){
    number++;
    show.innerHTML = number;
});

btn_dec.addEventListener("click", function(){
    number--;
    show.innerHTML = number;
});

btn_reset.addEventListener("click", function(){
    number = 0;
    show.innerHTML = number;
});