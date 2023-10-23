const inputLeftBtn = document.querySelectorAll(".input-left");
const inputRightBtn = document.querySelectorAll(".input-right");

const thumbLeft = document.querySelectorAll(".slider > .thumb.left");
const thumbRight = document.querySelectorAll(".slider > .thumb.right");
const range = document.querySelectorAll(".slider > .range");
const textPrice = document.querySelectorAll(".text_price_result");

for(let i = 0; i < 2; i++){
    inputLeftBtn[i].addEventListener("input", () => {
        const selectLeftBtn = inputLeftBtn[i];
        const [min, max] = [parseInt(selectLeftBtn.min), parseInt(selectLeftBtn.max)];

        selectLeftBtn.value = Math.min(parseInt(selectLeftBtn.value), parseInt(inputRightBtn[i].value)-1);

        const percent = ((selectLeftBtn.value-min) / (max-min)) * 100;
        thumbLeft[i].style.left = percent + "%";
        range[i].style.left = percent + "%";
        textPrice[i].innerText = percent + "~" + inputRightBtn[i].value;

    });

    inputRightBtn[i].addEventListener("input", () => {
        const selectRightBtn = inputRightBtn[i];
        const [min, max] = [parseInt(selectRightBtn.min), parseInt(inputLeftBtn[i].max)];

        selectRightBtn.value = Math.min(parseInt(selectRightBtn.value), parseInt(selectRightBtn.value)-1);

        const percent = ((selectRightBtn.value-min) / (max-min)) * 100;
        thumbRight[i].style.right = 100 - percent + "%";
        range[i].style.right = 100 - percent + "%";
        textPrice[i].innerText = inputLeftBtn[i].value + " ~ " + percent;
    });
}