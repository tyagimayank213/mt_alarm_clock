console.log("This is alarm project");
const alarmsubmit = document.getElementById('submitalarm');

alarmsubmit.addEventListener('click', setAlarm);

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

function ringBell(){
        audio.play();
}

function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    let alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm ${alarmDate}`);
    let now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(()=> {
           
            ringBell();
        },timeToAlarm);
    }


}