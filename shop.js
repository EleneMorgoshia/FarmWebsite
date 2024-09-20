//creating a shopping cart functional
//section1

//having the access to the html elements
const shoppingCartDiv = document.getElementById("shoppingCartDiv") // shopping cart div
const basketClick = document.getElementById("basketClick") // basket - Image
const plus = document.getElementsByClassName('plus') // Plus div

const productImage = document.getElementsByClassName("productImage") // Products Images
const ol = document.getElementById("basketUl")

const productPrice = document.getElementsByClassName("productPrice") // Products prices(with $)
const priceNumber = document.getElementsByClassName("priceNumber") // products prices - only NUMBER(span)
const sumOfPrices = document.getElementById("sumOfPrices") // p - total Price: 
const title = document.getElementsByClassName('title') //  title of the products 

const xButton = document.getElementById("xButton") // x - button
//function for basket img
basketClick.addEventListener('click', () => {
    shoppingCartDiv.style.display = 'block'
})


//creating a list for pirces
let priceArray = [

]
for(let i = 0 ; i < priceNumber.length ; i ++){
    priceArray.push(Number(priceNumber[i].innerHTML))
}


//functional for the sign in and registration part

const enteredUserame = document.getElementById('enteredName')
const enteredPassword = document.getElementById("enteredPassword")
const continueButton = document.getElementById("continueButton")

const signInDiv = document.getElementById('signInDiv') //sign in div
const AccountDiv = document.getElementById('AccountDiv')
const accountUser = document.getElementById("accountUser") // p - where account's user will be set 
const xIcon = document.getElementById("xIcon") // exit button

const wrongData = document.getElementById("wrongData")

//registration html elements
const registrationDiv = document.getElementById("registrationDiv")
const regLink = document.getElementById("regLink") // registration p
const regName = document.getElementById("regName")
const regPass = document.getElementById("regPass") 
const registeredBtn = document.getElementById("registeredBtn") // registration button
const exitBtnnn = document.getElementById("exitBtnnn")
//creating the object constructor
function personData(name , password){
    this.name = name
    this.password = password
}

//creating some objects
const person1 = new personData("Elene Morgoshia", '123')
const person2 = new personData("niko456", '456')
const person3 = new personData('koki789','789')

//creating the list where the objects will be set
const personsArray = [
    person1 , person2, person3
]


//functional for the regLink - p 
regLink.addEventListener('click',() => {
    signInDiv.style.display = 'none'
    registrationDiv.style.display = 'block'
})

//functional for the registration button
registeredBtn.addEventListener('click' , () => {
    let personName = regName.value 
    let personPassowrd = regPass.value

    const newObject = new personData(personName , personPassowrd)
    personsArray.push(newObject)

    regName.value = ''
    regPass.value = ''
 
    registrationDiv.style.display = 'none'
    signInDiv.style.display = 'block'
})

exitBtnnn.addEventListener('click', () => {
    registrationDiv.style.display = 'none'
})

let isLoggedIn = false // at first user is not logged in 
//Sing in button's functional
const AccountPs = document.getElementById("AccountPs")
continueButton.addEventListener('click',() => {

    for(let i = 0 ; i < personsArray.length ; i++){
        if(enteredUserame.value == personsArray[i].name && enteredPassword.value == personsArray[i].password){
            signInDiv.style.display = 'none'
            AccountDiv.style.display = 'flex'
            userLogo.style.display = 'block'
            accountUser.innerHTML =  personsArray[i].name
            AccountPs.innerHTML= personsArray[i].password
            isLoggedIn = true
        }else if(enteredUserame.value == personsArray[i].name && enteredPassword.value != personsArray[i].password){//incorrect Password
            wrongData.innerHTML = 'Incorrect Password'
        }else if(enteredUserame.value != personsArray[i].name   &&   enteredPassword.value == personsArray[i].password){//incorrect Password
            wrongData.innerHTML = 'Incorrect Username'
        }else{//empty inputs or wrong inputs(both)
            wrongData.innerHTML = 'Incorrect Username and Password'
        }
    }

    enteredUserame.value = ''
    enteredPassword.value = ''
})


xIcon.addEventListener('click', () => {
    signInDiv.style.display = 'none'
})


//loging out from the account
const userLogo = document.getElementById("userLogo")
const exitIcon = document.getElementById('exitIcon')
const personalInfo = document.getElementById("personalInfo")
const personalName = document.getElementById("personalName")
const personalPassword = document.getElementById("personalPassword")
const signOut = document.getElementById("signOut")

accountUser.addEventListener("click",() => {
    personalInfo.style.display = 'flex'
    personalName.innerHTML = accountUser.innerHTML
    personalPassword.innerHTML =  AccountPs.innerHTML
})

exitIcon.addEventListener("click", () => {
    personalInfo.style.display = 'none'
})


signOut.addEventListener("click", () => {
    personalInfo.style.display = 'none'
    accountUser.innerHTML = ''
    userLogo.style.display = 'none'
    isLoggedIn = false;
})



let totalPrice = 0; // counter for the prices 
for(let i = 0 ; i < productImage.length ; i++){
    plus[i].addEventListener('click', () => {

        if(isLoggedIn == true){
            shoppingCartDiv.style.display = 'block'
            let li = document.createElement('li') // creating the list 
            let img = document.createElement('img') // creating the img
            let hr = document.createElement('hr') // creating the hr
            let p = document.createElement('p') // creating p for the products prices
            p.innerHTML = productPrice[i].innerHTML  
            let  h4 = document.createElement("h4") // creating the h4 fo the products names
            h4.innerHTML = title[i].innerHTML 
            let h5 = document.createElement('h5') // creating the h5 for the delate product
            h5.innerHTML = '(Delate The Product)'
    
    
    
            //calculating the total price
            totalPrice += priceArray[i]
            sumOfPrices.innerHTML =  totalPrice + '$'
    
            img.src = productImage[i].src // img src will be equal to the images from the prodyctImage list
            img.style.width = '100' + 'px'
            img.style.height = '100' + 'px'
            img.style.objectFit = 'cover'
            li.style.marginLeft = '20' + 'px'
            hr.style.marginBottom = '15' + 'px'
            ol.style.marginLeft = '20' + 'px'
            h5.style.cursor = 'pointer'
            h5.style.transition = '0.5s'
    
    
            li.appendChild(img) // img will be set in the list
            li.appendChild(h4) //h4 will be set in the list
            li.appendChild(p) // price will be add in  the cart 
            li.appendChild(h5)
            ol.appendChild(li) //li will be set in the ol
            ol.appendChild(hr) //hr will be set in the ol 
    
    
    
            //removing the element from the shopping cart
            h5.addEventListener('click',() => {
                img.style.display = 'none'//delating the img
                h5.style.display = 'none' //delating the hr
                h4.style.display = 'none' //delating the name of the product
                p.style.display = 'none'//delating the price
                hr.style.display = 'none' //delating the hr
                li.style.display = 'none'//delating the li
                totalPrice -= priceArray[i]
                sumOfPrices.innerHTML =  totalPrice + '$'
            })
          
        }else{
            signInDiv.style.display = 'block'
        }
        
    })
}


xButton.addEventListener('click', () => {
    xButton.style.cursor = 'pointer'
    shoppingCartDiv.style.display = 'none'
})

//////////////////////////////////////////////////////////////////////
// creating the function for the links - baskets , sale , vegetarian


//products link
const productsLink = document.getElementById('productsLink')

//fruits
const fruits = document.getElementsByClassName("fruits") // products  - FRUITS
const fruitsCategory = document.getElementById("fruitsCategory") // link of fruits category 

//vegetables
const vegetables = document.getElementsByClassName("vegetables") // products - vegetables
const vegetablesCategory = document.getElementById('vegetablesCategory') // link of vegetables Category

//meats
const meat = document.getElementsByClassName("meat") // products - meat
const meatCategory = document.getElementById("meatCategory") // link of meat Category

//milk&eggs&dairy
const milk = document.getElementsByClassName("milk") // products - milk&eggs&dairy
const milkCategory = document.getElementById('milkCategory') // link of milk Category

//flowers
const flowers = document.getElementsByClassName('flowers') // products - Flowers
const flowersCategory = document.getElementById("flowersCategory") // link of flowers Category


//vegetarian food
const vegetarian = document.getElementsByClassName("vegetarian") // vegetarian food
const vegetarianLink = document.getElementById("vegetarianLink") // link of vegetarian food 


//saled food 
const saled = document.getElementsByClassName("saled") // saled products
const saledProductsLink = document.getElementById('saledLink')  // link of saled products


//Baskkets food
const basketsInProducts = document.getElementsByClassName("basketsInProducts") // basket products


//function to hide all  kind of products
function hideAllCategoryProducts() {
    const allKindOfDiv = document.getElementsByClassName('child-div')
    for(let i = 0 ; i < allKindOfDiv.length ; i++){
        allKindOfDiv[i].style.display = 'none'
    }
}

//function to display the desired category products
function desiredCategoryDisplay(categoryClass){ // as a parameter we have classname of the desired divs 
    const particularCategoryDivs = document.getElementsByClassName(categoryClass)
    for(let i = 0 ; i < particularCategoryDivs.length ; i++){
        particularCategoryDivs[i].style.display = 'block'
     
    }
}

//fruits
fruitsCategory.addEventListener('click',() => {
    hideAllCategoryProducts() //hiding all the divs
    desiredCategoryDisplay('fruits')
})

//vegetables
vegetablesCategory.addEventListener('click',() => {
    hideAllCategoryProducts() //hiding all the divs
    desiredCategoryDisplay('vegetables')
})

//meat
meatCategory.addEventListener('click',() => {
    hideAllCategoryProducts() //hiding all the divs
    desiredCategoryDisplay('meat')
})

//milk
milkCategory.addEventListener('click' , () => {
    hideAllCategoryProducts() //hiding all the divs
    desiredCategoryDisplay('milk')
})

//flowers
flowersCategory.addEventListener('click',() => {
    hideAllCategoryProducts() //hiding all the divs
    desiredCategoryDisplay('flowers')
})

productsLink.addEventListener('click' , () => {
    hideAllCategoryProducts() //hiding all the divs
    desiredCategoryDisplay('child-div')
})


vegetarianLink.addEventListener('click' , () => {
    hideAllCategoryProducts() //hiding all the divs
    desiredCategoryDisplay('vegetarian')
})

saledProductsLink.addEventListener('click', () => {
    hideAllCategoryProducts() //hiding all the divs
    desiredCategoryDisplay('saled')
})


basketLink.addEventListener('click' , () => {
    hideAllCategoryProducts() //hiding all the divs
    desiredCategoryDisplay('basketsInProducts')
})



//addding baskets to the cart
//having the access to the html elements
const basketImage = document.getElementsByClassName('basketImage') // baskets images
const basketPrice = document.getElementsByClassName('basketPrice') // baskets prices
const productTitle = document.getElementsByClassName('productTitle') // name of the product
const purchaseBasket = document.getElementsByClassName("purchaseBasket") //purchase basket link


const basketPriceArray = []
for(let i = 0 ;  i < basketPrice.length ; i++){
    basketPriceArray.push( Number(basketPrice[i].innerHTML))
}



for(let i = 0 ; i < basketImage.length ; i++){
    purchaseBasket[i].addEventListener('click', () => {
        
        if(isLoggedIn == true){
            shoppingCartDiv.style.display = 'block'
            let li = document.createElement('li')
            let img = document.createElement('img')
            let name = document.createElement('h4')
            let price = document.createElement('p')
            let hr = document.createElement('hr')
            let h5 = document.createElement('h5') // creating the h5 for the delate product
            h5.innerHTML = '(Delate The Product)'
    
    
            img.src = basketImage[i].src
            name.innerHTML = productTitle[i].innerHTML 
            price.innerHTML = basketPriceArray[i] + '$'
    
            //calculating the total price
            totalPrice += basketPriceArray[i]
            sumOfPrices.innerHTML =  totalPrice + '$'
    
            //styling space
            img.style.height = '200' + 'px'
            img.style.width = '100' + 'px'
            img.style.height = '100' + 'px'
            img.style.objectFit = 'cover'
            li.style.marginLeft = '20' + 'px'
            hr.style.marginBottom = '15' + 'px'
            ol.style.marginLeft = '20' + 'px'
            h5.style.cursor = 'pointer'
    
            li.appendChild(img)
            li.appendChild(name)
            li.appendChild(price)
            li.appendChild(h5)
            ol.appendChild(li)
            ol.appendChild(hr)
    
    
            //removing the element from the shopping cart
            h5.addEventListener('click',() => {
                img.style.display = 'none'//delating the img
                h5.style.display = 'none' //delating the hr
                name.style.display = 'none' //delating the name of the product
                price.style.display = 'none'//delating the price
                hr.style.display = 'none' //delating the hr
                li.style.display = 'none'//delating the li
                totalPrice -= basketPriceArray[i]
                sumOfPrices.innerHTML =  totalPrice + '$'
            })
        }else{
            signInDiv.style.display = 'block'
            signInDiv.style.top = '25'+ '%'
        }



    })
}



//burger manu functional
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

