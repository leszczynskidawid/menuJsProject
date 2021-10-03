const burger = document.querySelector(".burger"); 
// const bars = document.querySelector(".fa-bars");
// const times = document.querySelector(".fa-times"); 
// const menu = document.querySelector(".menu");
// const wrapper = document.querySelector(".wrapper");

let uniewersal = document.querySelectorAll(".uniewersal");

burger.addEventListener("click", function(){

//    bars.classList.toggle("active"); 
//    times.classList.toggle("active"); 
//    menu.classList.toggle("active");
//    wrapper.classList.toggle("active");

   uniewersal.forEach(e=>
    {
        e.classList.toggle("active");
    })




   
   



 


})