let record = document.getElementById("home-result")
let guest = document.getElementById("guest-result")


console.log(record)
console.log(guest)


let count = 0
let countg =0

function addone() {
    count += 1
    record.textContent = count
   
    
    
}

function addtwo() {
    count += 2
    record.textContent = count
   
    
}

function addthree() {
    count += 3
    record.textContent = count
   
}

function addgone() {
    countg += 1
    guest.textContent = countg
   
    
    
}

function addgtwo() {
    countg += 2
    guest.textContent = countg
   
    
}

function addgthree() {
    countg += 3
    guest.textContent = countg
   
}

function reply() {
    count = 0
    countg = 0
    record.textContent = 0
    guest.textContent = 0
    
}


function leader() {
    if (  record.textContent > guest.textContent ) {
  textToHighlight.style.backgroundColor = "yellow";
  textToHighlight.style.color = "black";;
 } else if ( record.textContent < guest.textContent) {
  console.log("You can apply for a learner's permit");
 } else {
  console.log("You are not eligible to drive yet");
 }
}




