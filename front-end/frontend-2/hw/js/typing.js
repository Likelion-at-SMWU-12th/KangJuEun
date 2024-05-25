let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["안녕하세요👋", "반갑습니다🙌", "행복하세요💛", "행운 가득하길🍀"];
    let selectString = stringArr[Math.floor(Math.random()* stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

function dynamic(randomArr){
    if(randomArr.length> 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 100);
    }else{
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500)
