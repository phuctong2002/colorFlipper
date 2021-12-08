const colors = ["green", "red", "reba( 133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener( "click", function(){
    // thay doi may hinh nen nhe anh em
    const randomNumber =  Math.floor(Math.random() * 4);
    const main = document.getElementsByTagName("main")[0];
    main.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});