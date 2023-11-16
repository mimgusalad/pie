function inputSelectTextR(element){
    const inputTexts = document.querySelectorAll(".text_select_result");
    index = 0;
    if (element.name == "houseType") index = 0;
    else if (element.name == "payType") index = 1;
    else if (element.name == "payment") index = 2;
    else if (element.name == "addressName") index = 3;
    else if (element.name == "addressDetail") index = 4;

    const inputArea = inputTexts[index];
    if (index == 2){
        inputArea.innerText = "관리비 " + element.value + " 만원";
    }
    else inputArea.innerText= element.value;
}

function inputSelectTextS(element){
    const inputTexts = document.querySelectorAll(".text_select_result");
    index = 0;
    if (element.name == "houseType") index = 0;
    else if (element.name == "payType") index = 4;
    else if (element.name == "periodYear") index = 3;
    else if (element.name == "periodMonth") index = 3;
    else if (element.name == "periodDay") index = 3;
    else if (element.name == "addressName") index = 1;
    else if (element.name == "addressDetail") index = 2;

    const inputArea = inputTexts[index];
    if (index == 3){
        const valueYear = document.querySelector("#periodYear").value;
        const valueMonth = document.querySelector("#periodMonth").value;
        const valueDay = document.querySelector("#periodDay").value;
        inputArea.innerText = valueYear + " " + valueMonth + " " + valueDay;
    }
    else inputArea.innerText= element.value;
}