const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let randomPass = ""
let randomPass2 = ""

let genPass1El = document.getElementById("genPass1")
let genPass2El = document.getElementById("genPass2")

function randomIndex(){
    return Math.floor(Math.random() * characters.length)
}
function randomPassIndex(){
    return Math.floor(Math.random() * 16) + 8
}

function generatePass(){
    clearPass()
    for (let i = 0; i < randomPassIndex(); i++){
        
        randomPass += characters[randomIndex()]
        randomPass2 += characters[randomIndex()]

        genPass1El.textContent = randomPass
        genPass2El.textContent = randomPass2
    }
}

function clearPass() {
    randomPass = ""
    randomPass2 = ""
}
