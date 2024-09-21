let blurry = document.getElementById('blurry');

document.addEventListener("DOMContentLoaded",()=>{
    let counter = document.getElementById('counter');
    let count = 0;
    let opacity = 1;
        setInterval(()=>{
            count > 99 ? count = 100 : count++;

            if(count > 50){
                opacity > 0 ? opacity -= 0.01 : opacity = 0;
                counter.style.opacity = opacity;
            }
            counter.innerHTML = count + "%";
        },20)
        setTimeout(()=>{
            blurry.classList.remove("blur");
            blurry.classList.add("normal")

        },50000)
    
})