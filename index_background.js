const body= document.querySelector("body");

const IMG_NUMBER = 5;

// 1.<img> 태그에 이미지 넣기.
function paintImage(imgNumber){
    const image = new Image();
    image.src=`images/${imgNumber + 1}.png`;
    image.classList.add("bgImage");
    body.prepend(image);
}

// 2.이미지 갯수를 랜덤으로 설정하기.
function genRandom(){
    const number = Math.floor(Math.random()* IMG_NUMBER);
    return number;
}

// 1번과 2번 연결하기.
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();
