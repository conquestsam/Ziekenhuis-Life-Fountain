const unReadMessages = document.querySelectorAll(".Unseen");
const unread = document.querySelector(".Number");
const markAllAsRead = document.querySelector(".Mark-all-as-read");

unread.innerText = unReadMessages.length;

unReadMessages.forEach((e) => {
    e.addEventListener("click", () => {
        e.classList.remove("Unseen");
        const newURMSG = document.querySelectorAll(".Unseen");
        unread.innerText = newURMSG.length;
    })
    
});

markAllAsRead.addEventListener('click', () => {
    unReadMessages.forEach((e) => {
        e.classList.remove("Unseen")
    })
    const newURMSG = document.querySelectorAll(".Unseen");
    unread.innerText = newURMSG.length;
});














// let markAllAsRead = document.querySelector(".Mark-all-as-read");

// markAllAsRead.addEventListener('click', () => {
//     document.querySelectorAll("#allUsers").forEach(e => {
//         e.classList.remove("Unseen");
//     })

//     document.querySelectorAll(".Unread-icon").forEach(e => {
//         e.classList.remove("Unread-icon")
//     });

//     document.querySelector(".Number").innerHTML = 0;
// })