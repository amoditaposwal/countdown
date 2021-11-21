const newYears ="1 Jan 2022";


function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    let totalSeconds = (newYearsDate-currentDate) / 1000;
    let days =Math.floor(totalSeconds/3600/24);
    let hours= Math.floor(totalSeconds/3600) % 24;
    let minutes =Math.floor(totalSeconds/60) % 60;
    let seconds =Math.floor(totalSeconds) % 60;


    document.querySelector("#days").innerHTML=days;
    document.querySelector("#hours").innerHTML=hours;
    document.querySelector("#minutes").innerHTML=minutes;
    document.querySelector("#seconds").innerHTML=seconds;

}
setInterval(countdown,1000);

countdown()