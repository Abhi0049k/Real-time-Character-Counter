const textEle = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remaining = document.getElementById("remaining-counter");
textEle.addEventListener("keyup",()=>{
    updateCounter();
});

updateCounter();
function updateCounter(){
    totalCounter.innerText = textEle.value.length;
    remaining.innerText = textEle.getAttribute("maxlength") - textEle.value.length;
}