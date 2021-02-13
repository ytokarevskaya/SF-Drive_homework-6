    let coll = document.getElementsByClassName("faq__collapsible-button");
    let icon = document.getElementsByClassName("faq__collapsible-button-svg");
    let i;
    let activeIcon = `<svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.88 10.5601L8 4.44006L14.12 10.5601L16 8.66673L8 0.666725L0 8.66673L1.88 10.5601Z" fill="#61A199" />
        </svg>`
    let inactiveIcon = `<svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.88 0.439941L8 6.55994L14.12 0.439941L16 2.33327L8 10.3333L0 2.33327L1.88 0.439941Z"
                fill="#A0A7AD" />
        </svg>`


    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
           let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

        function changeIcon () {
            if (coll.classList.contains('active')) {
                icon.innerHTML = activeIcon
            } else { icon.innerHTML = inactiveIcon }
    };