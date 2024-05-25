const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1).padStart(2, "0");
    const today = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `오늘은 ${year}년 ${month}월 ${today}일이며,
    현재 시각은 ${hours}:${minutes}:${seconds}입니다.`;
}

getClock();
setInterval(getClock, 1000);