const pianoKeys = document.querySelectorAll(".piano-keys .key")
const volumeSlider = document.querySelector(".volume-slider input")
const checkbox = document.querySelector(".keys-checkbox input")
const keyview = document.querySelectorAll(".key span")

console.log(pianoKeys )
const allKeys=[];
let audio = new Audio("tunes/a.wav")
const playTune = (key)=>{
    audio.src = `tunes/${key}.wav`;
    audio.play()
    const clickedkey =  document.querySelector(key)
    console.log(clickedkey)
    clickedkey.classList.add("active")
    setTimeout(()=>{
        clickedkey.classList.remove("active")
    }, 150)
}

    pianoKeys.forEach(key=>{
    allKeys.push(key.dataset.key);
       key.addEventListener("click", ()=> playTune(key.dataset.key))
    })
   
    document.addEventListener("keydown", (e)=>{
        if(allKeys.includes(e.key))  playTune(e.key)
    })


    volumeSlider.addEventListener("input", (e)=>
    {
        audio.volume = e.target.value
    })

keyview.forEach((e)=>{

    checkbox.addEventListener("change", function(){
        if(!checkbox.checked){
            e.classList.add("view")
            console.log("no")
        }
        else{
            e.classList.remove("view")
            console.log("yes")
        }
    })
})

console.log(keyview.classList)