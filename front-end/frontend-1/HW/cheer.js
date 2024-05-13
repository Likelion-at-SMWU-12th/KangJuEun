justforfun = prompt("많이 힘드신가요?");
console.log(justforfun);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const cheer = document.querySelector("#cheer");

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    cheer.innerText = `화이팅 ${userName} !`;
    cheer.classList.remove("hidden");
}

loginForm.addEventListener("submit", loginSubmit);

