function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    
    let a = 0;
   
    function changeBackgroundColor () {
    document.body.style.backgroundColor = getRandomHexColor();
    a = setTimeout(changeBackgroundColor, 1000);
} ;


document.querySelector("[data-start]").addEventListener('click',function(){
    this.disabled = true;
    document.querySelector("[data-stop]").disabled =false;
    changeBackgroundColor();

});

document.querySelector("[data-stop]").addEventListener('click',function(){
    this.disabled = true;
    document.querySelector("[data-start]").disabled =false;
    changeBackgroundColor.disabled;
    clearTimeout(a);
});

