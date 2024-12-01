const TimeElement = document.getElementById("time")
const CurrentTime = new Date().toLocaleTimeString()
TimeElement.textContent =`the Time Is ${CurrentTime}`

chrome.action.setBadgeText({
    text:"Time",
},()=>{
    console.log("time badge is here");
}
  )