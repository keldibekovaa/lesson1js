const identificationInput=document.querySelector('#identificationInput');
const tapInput=document.querySelector(".tapInput");
const innInput=document.querySelector(".innInput");


const innRegExp=/^[0-1]\d{13}$/ig
tapInput.addEventListener("click",()=>{
    if (innRegExp.test(identificationInput.value)){
        innInput.innerText="правильно";
        innInput.style.color="green";
    }else {
        innInput.innerText="неправильно";
        innInput.style.color="red";
    }
});