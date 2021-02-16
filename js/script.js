const collButton = document.querySelectorAll(".faq__collapsible-button");
const icon = document.querySelectorAll(".faq__collapsible-icon");
const button = document.getElementById ("button")
let i;
const activeIcon = `<svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.88 10.5601L8 4.44006L14.12 10.5601L16 8.66673L8 0.666725L0 8.66673L1.88 10.5601Z" fill="#61A199"/>
</svg>
`
const inactiveIcon = `<svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.88 0.439941L8 6.55994L14.12 0.439941L16 2.33327L8 10.3333L0 2.33327L1.88 0.439941Z" fill="#A0A7AD"/>
</svg>
`


for (i = 0; i < collButton.length; i++) {
    collButton[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";      
        }
        changeIcon(collButton, icon)

    });

};


function changeIcon(button, icon) {
    for (i = 0; i < icon.length; i++) {
        for (i = 0; i < button.length; i++) {
            if (button[i].classList.contains("active")) {
                icon[i].innerHTML = activeIcon;
            } else { icon[i].innerHTML = inactiveIcon };
        };
    };
};