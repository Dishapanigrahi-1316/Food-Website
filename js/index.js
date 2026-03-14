let slides = document.querySelectorAll(".testimonial-card");
let index = 0;

function showSlide(){
slides.forEach(slide => slide.classList.remove("active"));
slides[index].classList.add("active");
}

function nextSlide(){
index++;
if(index >= slides.length){
index = 0;
}
showSlide();
}

function prevSlide(){
index--;
if(index < 0){
index = slides.length - 1;
}
showSlide();
}
  //cart
let count = 0;
let total = 0;

let btn = document.querySelectorAll(".add");

btn.forEach(function(button){

button.addEventListener("click", function(e){

e.preventDefault();   // stop page refresh

let price = Number(button.getAttribute("data-price"));

count++;
total += price;

document.getElementById("count").innerText = count;
document.getElementById("total").innerText = total;

});

});