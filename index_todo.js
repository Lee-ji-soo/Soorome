const todoForm = document.querySelector(".js-toDoForm"),
      todoInput= todoForm.querySelector("input"),
      todoUl= document.querySelector(".js-toDoList"),
      TODO_LS="what to do";
      
let todos=[];

function saveTodo(){
     localStorage.setItem(TODO_LS, JSON.stringify(todos) )
}

function delBtn(){
    const clickBtn= event.target,
          clickBtnPa = clickBtn.parentNode;
    todoUl.removeChild(clickBtnPa);

    
    const done = todos.filter(function(did){
        return did.id !== parseInt(clickBtnPa.id);
    });

    todos = done;

    saveTodo();
}

function paintInput(text){
    const checkBtn = document.createElement("button"),
           li = document.createElement("li"),
           span = document.createElement("span");
           newId = todos.length +1;
           
    span.innerText= text;
    checkBtn.innerText="✕";
    checkBtn.addEventListener("click",delBtn);

    li.appendChild(span);
    li.appendChild(checkBtn);
    li.id = newId;

    todoUl.appendChild(li);

    const todoObj= {
        do : text,
        id : newId
    };
    todos.push(todoObj);

    // console.log(text);

    saveTodo();


}

function handleSubmit(event){
    event.preventDefault();
    const textInput= todoInput.value;
    paintInput(textInput);
    todoInput.value="";
}

function savedOrNot(){
    const savedInLocal= localStorage.getItem(TODO_LS);
    if(TODO_LS !== null){
        const savedParsed = JSON.parse(savedInLocal);
        savedParsed.forEach(function(did){
            paintInput(did.do);
        })
    }
}

// function loadToDos(){
//     const loadedToDos= localStorage.getItem(TODO_LS)
//     if(loadedToDos !==null){
//         const parsedToDos = JSON.parse(loadedToDos);
//         parsedToDos.forEach(function(toDo){
//             paintInput(toDo.do);
//         });
//     }
// }
function init(){
    savedOrNot();
    todoForm.addEventListener("submit",handleSubmit);
}

init();






// const toDoForm = document.querySelector(".js-toDoForm"),
//       toDoInput= toDoForm.querySelector("input"),
//       toDoList= document.querySelector(".js-toDoList");

// const TODOS_LS = "toDos";

// let toDos=[];

// function deleteToDo(event){
//     // console.dir(event.target.parentNode);
//     const btn = event.target;
//     const li = btn.parentNode;
//     toDoList.removeChild(li);
//     const cleanToDos= toDos.filter(function(toDo){
//         return toDo.id !==  parseInt(li.id);
//     }); //filter라는 내장 함수. 참인 것만 결과로 나옴}
//     toDos = cleanToDos;
//     saveToDos();

//     }
    

// function saveToDos(){
//     localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
// }

// function paintToDo(text){
//     console.log(text);
//     const li = document.createElement("li");
//     const delBtn = document.createElement("button");
//     const span= document.createElement("span");
//     const newId= toDos.length+1;
//     delBtn.innerText= "✕";
//     delBtn.addEventListener("click",deleteToDo);
//     span.innerText = text
//     li.appendChild(span);
//     li.appendChild(delBtn);
//     li.id=newId;
//     toDoList.appendChild(li);
//     const toDoObj = {
//         text: text,
//         id: newId 
//     };
//     toDos.push(toDoObj);
//     saveToDos();

// }

// function handleSubmit(event){
//     event.preventDefault();
//     const currentValue = toDoInput.value;
//     paintToDo(currentValue);
//     toDoInput.value="";
// }

// function loadToDos(){
//     const loadedToDos= localStorage.getItem(TODOS_LS)
//     if(loadedToDos !==null){
//         const parsedToDos = JSON.parse(loadedToDos);
//         parsedToDos.forEach(function(toDo){
//             paintToDo(toDo.text);
//         });
//     }
// }
// function init(){
//     loadToDos();
//     toDoForm.addEventListener("submit",handleSubmit);
// }

// init();