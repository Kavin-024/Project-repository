const container = document.querySelector(".slide")
const btn = document.querySelectorAll(".bot")
const imagelist = ["1.img", "2.img", "3.img", "4.img"]
let index = 0

btn.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("bot-left")) {
            index--;
            if (index < 0) {
                index = imagelist.length - 1;
            }
            container.style.background = `url("Images/${imagelist[index]}.jpg") center/cover`
        }
        else {
            index++;
            if (index == imagelist.length) {
                index = 0;
            }
            container.style.background = `url("Images/${imagelist[index]}.jpg") center/cover`


        }
        console.log(index)
        
    })
})




