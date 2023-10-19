const selectMenuList = document.querySelectorAll(".select-menu");
const selectBtnList = document.querySelectorAll(".select-btn");
const priceSelectMenu = document.querySelector(".price_dropdown_area");
const priceSelectBtn = document.querySelector(".price-select-btn");

priceSelectBtn.addEventListener("click", () => {
    priceSelectMenu.classList.toggle("active");
    const textPrice = document.querySelectorAll(".text_price_result");
    document.querySelector(".price-text").innerText = "보증금 " + textPrice[0].innerText + "/ 월세 " + textPrice[1].innerText;
});

for(let index=0; index < 3; index ++){
    selectBtnList[index].addEventListener("click", () => {
        selectMenuList[index].classList.toggle("active");
        const options = selectMenuList[index].querySelectorAll(".option");
        const sBtn_text = selectMenuList[index].querySelector(".sBtn-text");
        options.forEach(option =>{
            option.addEventListener("click", ()=>{
                let selectedOption = option.querySelector(".option-text").innerText;
                sBtn_text.innerText = selectedOption;
                selectMenuList[index].classList.remove("active");
            });
        });
    });
}