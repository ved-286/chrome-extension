const TimeElement = document.getElementById("time")

const TimerElement = document.getElementById("timer")

function updateTimeElement(){
    const CurrentTime = new Date().toLocaleTimeString()
    TimeElement.textContent =`the Time Is ${CurrentTime}`
    

    chrome.storage.local.get(["timer"],(res)=>{
        const time = res.timer ?? 0
        TimerElement.textContent = `timer is at ${time} seconeds`
    
    })
}

setInterval(updateTimeElement,1000)