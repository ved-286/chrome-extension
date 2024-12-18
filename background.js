// background.js

// Create an alarm that triggers every minute
chrome.alarms.create("timerAlarm", {
    periodInMinutes: 1 / 60, // This sets the alarm to trigger every minute
});

// Listen for the alarm event
chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.local.get(["timer","isRunning"],(res)=>{
        const time = res.timer ?? 0
        const isRunning = res.isRunning ?? true
        if(!isRunning){
            return
        }
        chrome.storage.local.set({
            timer:time+1
        })
        chrome.action.setBadgeText({
            text:`${time + 1}`
        })

        chrome.storage.sync.get(["notificationTime"],(res)=>{
            const notificationTime = res.notificationTime ?? 1000
            if(time % notificationTime == 0){
                this.registration.showNotification("Chrome Timer Extension",{
                    body: `${notificationTime} seconed has passed`,
                    icon: "icon.png",
                })
             }
        })
        
         })
        })
    
           