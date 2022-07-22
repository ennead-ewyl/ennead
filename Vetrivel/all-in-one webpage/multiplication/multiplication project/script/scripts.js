const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const quesELE = document.getElementById("question")
const formELE = document.getElementById("form")
const ansELE = document.getElementById("ans")
const scoreELE = document.getElementById("score")


let score=JSON.parse( localStorage.getItem("score"))


scoreELE.innerText=`Score: ${score}`

if(!score){
    score=0
}


quesELE.innerText =`what is the value for ${num1} maultiply ${num2} ?`

const correct = num1*num2;
formELE.addEventListener("submit",()=>{
    const user = +ansELE.value;
    if(correct === user)
    {
        score++; 
        local()
    }
    else{
        score--
        local()
    }
})

function local(){
    localStorage.setItem("score",JSON.stringify(score))
}


