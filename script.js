const rating = document.querySelectorAll(".rbtn");
const button = document.getElementById("button")
const container = document.getElementsByClassName("container");
const thankyou = document.getElementsByClassName("msg-component");

const ratingno = document.getElementById("span")

for (let btn = 0; btn < rating.length; btn++) {
    rating[btn].addEventListener("click",( )=>{
        console.log("this button was clicked");
        rating[btn].style.backgroundColor = "white";
        ratingno.textContent= btn+1;
        
    });
    
}

button.addEventListener("click", function(){
    console.log("completed");
    container[0].classList.add("hidden");
    thankyou[0].classList.remove("hidden");
})