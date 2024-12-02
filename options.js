const inpt = document.getElementById("input-text")
const btn = document.getElementById("btn")
const timeInput = document.getElementById("time-input")

btn.addEventListener("click",()=>{
    const name = inpt.value 
    const notificationTime = timeInput.value
    chrome.storage.sync.set({
        name,
        notificationTime
    })
})

chrome.storage.sync.get(["name"],(res)=>{
       inpt.value = res.name ?? "???"
       timeInput.value = res.notificationTime ?? 1000
})