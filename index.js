function displayTime(){
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let timeSession = document.getElementById('time-session');

    if(hours >= 12){
        timeSession.innerHTML = 'PM';
    }else{
        timeSession.innerHTML = 'AM';
    }

    if(hours > 12){
        hours = hours - 12;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);