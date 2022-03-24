let homeLnk = document.querySelector('.home', '.about')


function displayAlert(event){
    alert('Hello, Welcome to home Page')
}

homeLnk.addEventListener('click', displayAlert)

let featureBox = document.querySelector('.features')

function changeElements(){
    console.log(trying)
    
}
featureBox.addEventListener('mouseover', changeElements)