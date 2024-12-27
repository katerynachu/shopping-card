console.log(1)

const tabButtons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab-block-tab");

tabButtons.forEach(btn => {
    btn.addEventListener("click",()=>{
        tabButtons.forEach(button => button.classList.remove("active"));
        tabs.forEach(tab => tab.classList.remove("active"));

        btn.classList.add("active");
        const tabId = btn.dataset.tab;
        document.getElementById(tabId).classList.add("active")

    })
})