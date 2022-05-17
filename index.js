

var djBox = document.getElementById("box");
//box style//
djBox.style.height = "300px";
djBox.style.width = "300px";
djBox.style.backgroundColor = "lightGrey"
djBox.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"

var body = document.getElementById("body")
//body color//
body.style.backgroundColor="tan"
body.style.alignItems="center"
body.style.height="1500px"


var instruct = document.getElementById("instruction")
//instructions//
instruct.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
instruct.style.height="150px"
instruct.style.width="200px"
instruct.style.backgroundColor="lightGrey"

djBox.onclick = function(){
    djBox.style.backgroundColor= "red"
}

djBox.ondblclick = function(){
    djBox.style.backgroundColor="green"
}

djBox.onmouseenter = function(){
    djBox.style.backgroundColor="blue"
}

djBox.onmouseleave = function(){
    djBox.style.backgroundColor="yellow"
}
document.addEventListener('scroll', function() {
    djBox.style.backgroundColor = 'orange'
})

document.addEventListener('keyup', function(e) {
    if (e.key == 'r') {
        djBox.style.backgroundColor = 'red'
    } else if (e.key == 'y') {
        djBox.style.backgroundColor = 'yellow'
    } else if (e.key == 'g') {
        djBox.style.backgroundColor = 'green'
    } else if (e.key == 'b') {
        djBox.style.backgroundColor = 'blue'
    }
        

        
    
})



/* COLOR KEY CODES 
R = 82. Y = 89. G = 71. B = 66.*/

    
