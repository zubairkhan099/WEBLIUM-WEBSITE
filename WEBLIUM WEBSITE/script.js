let btn1 = document.querySelector(".list-item-one")
let btn2 = document.querySelector(".list-item-two")
let btn3 = document.querySelector(".list-item-three")
let secImg = document.querySelector(".sec-img-changing")
let sectexth2 = document.querySelector(".text h2")
let sectextP = document.querySelector(".text p")


btn1.addEventListener(("click"), () => {
    console.log("i was clicked")
    secImg.src = "./images/0neimg.jpg"
    sectexth2.innerText = "Stylish templates for free"
    sectextP.innerText = "There are dozens of templates that make the process of making a gaming website as easy and comfortable as possible. The users can choose from templates in various styles and depending on the type of games: strategies, arcades, races, simulations, and much more. Make a game website with a template and achieve success with Weblium"
    btn1.style.color = "blue"
    btn2.style.color = "black"
    btn3.style.color = "black"
})
btn2.addEventListener(("click"), () => {
    secImg.src = "./images/secimg.jpg"
    sectexth2.innerText = "Flexible configuration"
    sectextP.innerText = "In order to make game websites in an individual style, an innovative tool from Weblium — a website builder has been created. It allows you to customize the template, move graphic components and text blocks, as well as create pages from scratch"
    btn1.style.color = "black"
    btn2.style.color = "blue"
    btn3.style.color = "black"


})
btn3.addEventListener(("click"), () => {
    secImg.src = "./images/thirdimg.jpg"
    sectexth2.innerText = "Responsive design"
    sectextP.innerText = "Now making a games website is available for both desktop and mobile versions. There is no need to worry about the website displaying incorrectly. You do not need to have special knowledge to set up this feature."
    btn1.style.color = "black"
    btn2.style.color = "black"
    btn3.style.color = "blue"
});

// SLIDER SECTION

const slide = document.querySelectorAll(".slide")
var counter = 0;
slide.forEach((slide, index)=>{
        slide.style.left=`${index * 100}%`
    }
)

const slideImage = ()=>{
    slide.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

const goPrev =()=>{
    if(counter >0){
    counter--
    slideImage()
    }
}
const goNext =()=>{
    if(counter<slide.length-1){
    counter++
    slideImage()
    }
}