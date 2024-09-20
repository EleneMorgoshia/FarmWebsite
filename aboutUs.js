// first main section - Image slider
//having the access to the html elements
const sliderImage = document.getElementById("sliderImage")

// creating the object constructor
function images(image){
    this.image = image
}

const img1 = new images("/images/about-us-slider.jpg") 
const img2 = new images('/images/image-3.png')
const img3 = new images('/images/slider-2.jpg')
const img4 = new images("/images/another happy farmer.jpg")


// creating the list where we  images will be set
const imagesArray = [
    img2 , img1 , img3, img4
]

//creatign the function that changes the images randomly
let counter = 0
function imgSlider(){
    counter++
    if(counter > imagesArray.length - 1){
        counter = 0
    } 
    sliderImage.src = imagesArray[counter].image
}

setInterval(imgSlider,2000);



//forth main section - employees
//having the access to the  html elements
const firstNumber = document.getElementById("firstNumber") // first Button - 1
const secondNumber = document.getElementById("secondNumber") // second Button - 2
const thirdNumber = document.getElementById("thirdNumber") // third Button - 3 

const firstClick = document.getElementsByClassName('firstClick') //  divs  of first button
const secondClick = document.getElementsByClassName("secondClick") // divs of second button
const thirdClick = document.getElementsByClassName("thirdClick") // divs of third button

//creating the function that will dealte all the divs(using classes)
function removeAlltheDivs(){
    const AllKindOfDiv = document.getElementsByClassName("child-team-div")
    for(let i = 0 ; i < AllKindOfDiv.length ; i++){
        AllKindOfDiv[i].style.display = 'none'
    }
}

//creating the function that will display the desired classed divs
function desiredDivs(particularClass){
    const desiredDivs = document.getElementsByClassName(particularClass)
    for(let i = 0 ; i < desiredDivs.length ; i++){
        desiredDivs[i].style.display = 'block'
    }
}

firstNumber.addEventListener('click',() => {
    removeAlltheDivs() //removing all kind of divs
    desiredDivs('firstClick') //firstclick divs will be appeared on the screen
})

secondNumber.addEventListener('click' , () => {
    removeAlltheDivs() //removing all kind of divs
    desiredDivs('secondClick')
})

thirdNumber.addEventListener('click', () => {
    removeAlltheDivs() //removing all kind of divs
    desiredDivs('thirdClick ')
})

//functional for the burger menu
const burgerManu = document.getElementById("burgerManu") // link of burgermanu
const burgerMenuDiv = document.getElementById("burgerMenuDiv")
const exitBtn = document.getElementById("exitBtn")
burgerManu.addEventListener('click' , () => {
    burgerMenuDiv.style.display = 'block'
})

exitBtn.addEventListener("click",() => {
    burgerMenuDiv.style.display = 'none'
})