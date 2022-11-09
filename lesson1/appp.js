const smallBox=document.querySelector('.smallBox')
const bigBox=document.querySelector('.bigBox')




let Postop = 0
let Posleft = 0

function MoveSmall(){
    if(Posleft<=1000 && Postop===0){
        Posleft+=100
        smallBox.style.left =`${Posleft}px`
        setTimeout(MoveSmall,100)
    }else if(Posleft===1100 && Postop!==500){
        Postop+=100
        smallBox.style.top =`${Postop}px`
        setTimeout(MoveSmall,100)
    }else if ( Posleft!==0 && Postop===500){
        Posleft-=100
        smallBox.style.left =`${Posleft}px`
        setTimeout(MoveSmall,100)
    }else if(Posleft===0 && Postop>=0){
        Postop-=100
        smallBox.style.top =`${Postop}px`
        setTimeout(MoveSmall,100)
    }
}
MoveSmall()