const TimeElement = document.getElementById("time")
const nameElement = document.getElementById("name")
const TimerElement = document.getElementById("timer")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")


startBtn.addEventListener("click",()=>{
    chrome.storage.local.set({
        isRunning: true,
    })
})

stopBtn.addEventListener("click",()=>{
    chrome.storage.local.set({
        isRunning: false,
    })
})

resetBtn.addEventListener("click",()=>{
    chrome.storage.local.set({
        timer: 0,
        isRunning: false,
    })
})

function updateTimeElement(){
    const CurrentTime = new Date().toLocaleTimeString()
    TimeElement.textContent =`the Time Is ${CurrentTime}`
    

    chrome.storage.local.get(["timer"],(res)=>{
        const time = res.timer ?? 0
        TimerElement.textContent = `timer is at ${time} seconeds`
    
    })
}

setInterval(updateTimeElement,1000)

chrome.storage.local.get(["name"],(res)=>{
    const name = res.name ?? "???"
    nameElement.textContent = `your name is ${name}`
})