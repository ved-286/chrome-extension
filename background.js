// background.js

// Create an alarm that triggers every minute
chrome.alarms.create("timerAlarm", {
    periodInMinutes: 1 / 60, // This sets the alarm to trigger every minute
});

// Listen for the alarm event
chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.local.get(["timer"],(res)=>{
        const time = res.timer ?? 0
        chrome.storage.local.set({
            timer:time+1
        })
        chrome.action.setBadgeText({
            text:`${time + 1}`
        })
    })
})
    
           