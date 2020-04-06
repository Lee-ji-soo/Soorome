//질문 : 어쩔때 ( a,b ) 두가지를 쓰는지

const form = document.querySelector(".js-form"),//확인
      input= form.querySelector("input"), //입력
      greeting= document.querySelector(".js-greetings");

const USER_LS= "currentUser"
     SHOWING_CN = "showing"

function saveName(text){
    localStorage.setItem(USER_LS,text);
}    

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);

}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit)

}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}!`;

}

function loadName(){
    const currentUser =localStorage.getItem(USER_LS)
    if (currentUser === null){
        askForName();
        // she is not
    } else{
        // she is
        paintGreeting(currentUser);
    }

}

function init(){
 loadName();
}

init();