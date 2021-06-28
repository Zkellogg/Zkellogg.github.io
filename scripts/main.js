let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/motorcycle1.jpg') {
      myImage.setAttribute('src','images/motorcycle2.jpg');
    } else {
      myImage.setAttribute('src','images/motorcycle1.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Nice to meet you, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Nice to meet you, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
  
  