let minus = document.querySelector("#minus")
let plus = document.querySelector("#plus")
let input = document.querySelector("input")


minus.addEventListener("click", function(){
    if(input.value > 1){
        input.value--;
    }
})

plus.addEventListener("click", function(){
        input.value++;
})

document.querySelector("button").addEventListener("click", function(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    document.body.style.background= `rgb(${red},${green},${blue})`
})