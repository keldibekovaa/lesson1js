const SmallBox=document.querySelector('.SmallBox')
const BigBox=document.querySelector('.BigBox')

let Postop = 0
let Posleft = 0

function MoveSmall(){
    if(Posleft<=400 && Postop===0){
        Posleft+=50
        SmallBox.style.left =${Posleft}px
    }
}
SmallBox.addEventListener("click",()=>{
    MoveSmall()
})