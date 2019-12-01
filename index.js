var numSquares = 6
var colors = []
var pickedColor
var colors = generateRandomColor(numSquares)
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay")
var messageDispaly = document.getElementById("message")
var button = document.getElementById("button")
var h1 = document.querySelector("h1")
var modeButtons = document.querySelectorAll(".mode")
var pickedColor = pickColor()

init()

function init() {
    setModeButtons()
    setUpSquares()
    reset()
}

function setModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")
            this.textContent === "Easy" ? numSquares = 3 :  numSquares = 6
            reset()
        })
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length ; i++) {
        squares[i].addEventListener("click", function() {
           var clickedColor = this.style.background
           if (clickedColor === pickedColor) {
               messageDispaly.textContent = "correct"
               button.textContent = "Play Again"
               changeColor(clickedColor)
               h1.style.backgroundColor = clickedColor
           }else {
               this.style.background = "#232323"
               messageDispaly.textContent = "Try again"
           }
        })
    }
    reset()
}


function reset() {
    colors = generateRandomColor(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    messageDispaly.textContent = ""
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i]
        } else {
            squares[i].style.background = "none"
        }
    }
        h1.style.backgroundColor = "steelblue"
}





button.addEventListener('click', function(){
    reset()
})

function pickColor() {
    var random = Math.floor(Math.random() *  colors.length)
    return colors[random]
}

function changeColor(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = color
    }
}

function generateRandomColor(num) {
    var arr = []
    for(var i = 0; i < num; i++ ){
        arr.push(randomColor())
    }
    return arr
}

function randomColor() {
    var r = Math.floor(Math.random() *  256)
    var g = Math.floor(Math.random() *  256)
    var b = Math.floor(Math.random() *  256)
    return `rgb(${r}, ${g}, ${b})`
}









