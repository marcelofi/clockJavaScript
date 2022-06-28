setInterval(setClock,1000)

const hourHand=document.querySelector('[data-hour-hand]')
const minutesHand=document.querySelector('[data-minutes-hand]')
const secondsHand=document.querySelector('[data-seconds-hand]')

function setClock(){
    const currentDAte=new Date()
    const secondsRatio=currentDAte.getSeconds()/60
    const minutesRatio=(secondsRatio + currentDAte.getMinutes())/60
    const hoursRatio=(minutesRatio + currentDAte.getHours())/12
    setRotation(secondsHand,secondsRatio)
    setRotation(minutesHand,minutesRatio)
    setRotation(hourHand,hoursRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360)
}

setClock()