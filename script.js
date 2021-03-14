
// const welcomeMessage = ["Allow me to introduce my self", "my name is"] 
// const welcomeBlock = document.getElementById('welcome-block');
// welcomeBlock.addEventListener('animationiteration', function() {
//     for (let i = 0; i < welcomeMessage.length; i++) {
//         console.log(welcomeMessage[i])
//     }
// })

// const icon = document.getElementByClass("interests");
// item.addEventListener("mouseover", func, false);
// item.addEventListener("mouseout", func1, false);

// function func()
// { 
//    icon.setAttribute("style", "background-color:blue;")
// }

// function func1()
// {  
//    item.setAttribute("style", "background-color:green;")
// }
const phoneIcon = document.getElementById("phone");

phoneIcon.addEventListener("mouseover", function () {
    phoneIcon.src = "images/phone-icon.png"
})

phoneIcon.addEventListener('mouseout', function(){
    phoneIcon.src = "images/phone-purple-icon.png"
  })