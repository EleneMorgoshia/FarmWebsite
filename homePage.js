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


//third main section - Baskets ( if costumer clicks , Sign in div will appear)
// **********Third main section ***************************//
//having the access to the html elements
const singInDiv = document.getElementById('singInDiv') // sign in div
const buyButton = document.getElementsByClassName('buyButton') // purchase basket button
const xIcon = document.getElementById('xIcon') // x - icon

const enteredName = document.getElementById("enteredName") // input - name
const enteredPassword = document.getElementById('enteredPassword') //input - password
const continueButton = document.getElementById("continueButton") // continue button
const homePage = document.getElementById("homePage") // homepage
const shopPage = document.getElementById("shopPage") //shopPage
const incorrectData = document.getElementById('incorrectData') // incorrect data
const registering = document.getElementById("registering") // register
//Creating a for loop to access each purchase button 
for(let i = 0 ; i < buyButton.length ; i ++){
    buyButton[i].addEventListener('click',function() { // when user clicks the button
        singInDiv.style.display = 'block' //sign in div will be appeared
    })
}

xIcon.addEventListener("click",function(){
    singInDiv.style.display = 'none'
})


//creating the objec's constructor
function rgdAccount(userName, password){
    this.userName = userName
    this.password = password
}

//creating the registered accounts
const person1 = new rgdAccount('Elene' , '123')
const person2 = new rgdAccount('Lizi' , '123')
const person3 = new rgdAccount('KOKI' , '123')
const person4 = new rgdAccount('Niko' , '123')
const person5 = new rgdAccount('Erekle' , '123')
const person6 = new rgdAccount('Ioane' , '123')

//creating the list where the registered accounts will be set
const registeredArray = [
    person1,person2 , person3 , person4 , person5 , person6
]

//function for continue button
continueButton.addEventListener("click",function(){
    for(let i = 0 ; i < registeredArray.length ; i ++ ){
        if(registeredArray[i].userName == enteredName.value && registeredArray[i].password == enteredPassword.value ){
            window.location.href = "/shop.html"; // moving to another html file
        }else{
            incorrectData.style.display = 'block'
        }
    }
})


registering.addEventListener('click',function(){
    window.location.href = '/signin.html'
})


// forth main section - Slider
//********forth main section************************* */
//having the access to the html elements
const leftIcon = document.getElementById("leftIcon") // Left icon <
const rightIcon = document.getElementById("rightIcon") // right icon >

//inside the div (content)
const personFace = document.getElementsByClassName("personFace") // images
const personName = document.getElementsByClassName('person-name') //Names
const comment = document.getElementsByClassName("comment") //Comment

const circles = document.getElementsByClassName('circle') // Circles

//creating the object constructor
function individualssInfo(image,name,comment){
    this.image = image,
    this.name = name,
    this.comment = comment
}

const individual1= new individualssInfo("/images/farmer-1.jpg" , 'Liam Smith' , "Morgo's Homestead offers an amazing selection of fresh produce. The quality of products is unparalleled" )
const individual2= new individualssInfo("/images/farmer-2.jpg" , 'Alex Brown' , "I've been purchasing from Morgo's Homestead for a while now, and I'm consistently impressed." )
const individual3= new individualssInfo("/images/farmer-3.jpg" , 'Sophia Davis' , "Morgo's Homestead offers an amazing selection of fresh produce. The quality of the vegetables is unparalleled" )
const individual4= new individualssInfo("/images/farmer-4.jpg" , 'Ethan Taylor' , "The produce and meat from Morgo's Homestead are always of the highest quality." )
const individual5= new individualssInfo("/images/farmer-5.jpg" , 'Michael Brown' , "I love shopping at Morgo's Homestead for their fantastic produce and meat. The freshness is unbelivable" )
const individual6 = new individualssInfo("/images/farmer-6.jpg" , 'Emma Johnson' , "Morgo's Homestead never disappoints with their fresh produce and meat. The quality of products are insane" )
const individual7= new individualssInfo("/images/farmer-7.jpg" , 'Miranda Brown' , "I appreciate the dedication that Morgo's Homestead puts into their work.The products are top-notch." )
const individual8= new individualssInfo("/images/farmer-8.jpeg" , 'Olivia Martin' , "Morgo's Homestead never disappoints. Their farm baskets are packed with fresh, seasonal produce." )
const individual9= new individualssInfo("/images/farmer-9.jpg" , 'James Rodriguez' , "I’ve been a loyal customer of Morgo's Homestead for years. Their produce is consistently high quality." )

//creating the list where objects will be set
const individualsArray = [
    individual1 , individual2 , individual3 ,individual4 , individual5 , individual6 , individual7 , individual8 , individual9
]

// creating function for left and right icon
let counter = 0
for(let i = 0 ; i < personFace.length ; i++){
    leftIcon.addEventListener('click',function(){
        counter--
        if(counter < 0){
            counter = individualsArray.length - 1
        }

        personFace[i].src = individualsArray[counter].image
        personName[i].innerHTML = individualsArray[counter].name
        comment[i].innerHTML = individualsArray[counter].comment

    })

    rightIcon.addEventListener('click',function(){
        counter++ 
        if(counter > individualsArray.length - 1 ){
            counter = 0
        }
        personFace[i].src = individualsArray[counter].image
        personName[i].innerHTML = individualsArray[counter].name
        comment[i].innerHTML = individualsArray[counter].comment
    })
}



//Fifth main sectin - FAQ
//*********Fifth main section ******************** */
//having the access to the html elements
const answerDiv = document.getElementById('answerDiv') // answer-div
const questionChildDiv = document.getElementsByClassName("question-child-div") // child divs - question
const introH1 = document.getElementById("introH1") // h1 - here is you answer
const answer = document.getElementById("answerToQuestion") // answer
const xButton = document.getElementById('xButton') // X - Button

// creating the object's constructor
function answerToQuestion(title,answer){
    this.title = title
    this.answer = answer
}

// creating objects
const answer1 = new answerToQuestion("Here is the answer to your question",'We offer a variety of farm products,including fresh vegetables, fruits, eggs, cheese, milk, and meats. Our greenhouse produces vegetables, fruits, and flowers while our livestock provides eggs, cheese, and milk.')
const answer2 = new answerToQuestion("Here is the answer to your question", "You can purchase our baskets directly from our website or visit our farm. We offer different basket sizes, including small, medium, large, and an additional type, each with a selection of products from our farm.")
const answer3 = new answerToQuestion("Here is the answer to your question", 'Our small basket includes eggs, milk, a selection of vegetables and fruits, and 2 chickens. The medium basket contains more eggs, milk, vegetables, fruits, 4 chickens, and meat options like grassfed ground beef or steak. The large basket includes everything from the smaller baskets in larger quantities.')
const answer4 = new answerToQuestion( "Here is the answer to your question", 'Yes, we occasionally offer special deals and discounts. Be sure to check our website or sign up for our newsletter to stay updated on any promotions.')
const answer5 = new answerToQuestion("Here is the answer to your question", 'You can reach us through the contact form on our website, via email, or by phone. We are happy to assist with any questions or concerns you may have.')
const answer6 = new answerToQuestion( "Here is the answer to your question", "At Morgo's Homestead, we prioritize sustainable farming practices and strive to provide high-quality products. While not all of our products are certified organic, we use environmentally friendly methods to ensure the health and quality of our produce and livestock.")

//creating a list where we store all the answers
const answersArray = [
    answer1, answer2, answer3 ,answer4 ,answer5 ,answer6 
]

for(let i = 0 ; i < questionChildDiv.length ; i++){
    questionChildDiv[i].addEventListener('click',function(){
        answerDiv.style.display = 'block'
        introH1.innerHTML = answersArray[i].title
        answer.innerHTML = answersArray[i].answer
    })
}

xButton.addEventListener('click',function(){
    answerDiv.style.display = 'none'
})


//circle functional in the silder
const circle1 = document.getElementById("circle-1") //first circle
const circle2 = document.getElementById("circle-2") //second circle
const circle3 =  document.getElementById('circle-3') //third circle


const firstCircleChild = document.getElementsByClassName("firstCircleChild") // first circle duvs
const secondCircleChild = document.getElementsByClassName("secondCircleChild") //second circle divs
const thirdCircleChild = document.getElementsByClassName("thirdCircleChild") // third circle divs

//creating functional where we remove all the divs
function removeAllDivs(){
    const allKindOfDivs = document.getElementsByClassName('child-feedback-div')
    for(let i = 0 ; i < allKindOfDivs.length ; i++){
        allKindOfDivs[i].style.display = 'none'
    }

}

//creating functional where we display desired divs
function displayDesiredDiv(desiredDivsClass){
    const desiredDivs = document.getElementsByClassName(desiredDivsClass)
    for(let i = 0 ; i < desiredDivs.length ; i++){
        desiredDivs[i].style.display = 'block' 
        desiredDivs[i].style.display = 'flex' 
    }
}

circle1.addEventListener('click', () => {
    removeAllDivs()
    displayDesiredDiv('firstCircleChild')
})

circle2.addEventListener('click' , () => {
    removeAllDivs()
    displayDesiredDiv('secondCircleChild')
})

circle3.addEventListener('click',() => {
    removeAllDivs()
    displayDesiredDiv('thirdCircleChild')
}) 