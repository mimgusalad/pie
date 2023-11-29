import { useState } from "react";
import "./PriceInputDropdown.css";


export default function PriceInputDropdown(props){
    let priceOptionList=['전체', '전세','월세'];
    return(
        <div className="price_dropdown_area" >
            <div className="option_select_area" >
                {
                    priceOptionList.map(function(text){
                        return (
                            <PriceRadioBtn text={text} priceOption={props.priceOption} setPriceOption={props.setPriceOption}></PriceRadioBtn>
                        )
                    })
                }
            </div>
            <div>
                <Slider_box_text title="보증금" index="1" priceOption={props.priceOption} setPriceOption={props.setPriceOption}></Slider_box_text>
                <Slidebar index="1" priceOption={props.priceOption} setPriceOption={props.setPriceOption} sBtnInnerText={props.sBtnInnerText} setInnerText={props.setInnerText}></Slidebar>
                <div className="content_price_mark">
                    <span className="text_price_mark">최소</span>
                    <span className="text_price_mark">5천만</span>
                    <span className="text_price_mark">1억</span>
                    <span className="text_price_mark">최대</span>
                </div>
            </div>
            <div>
                <Slider_box_text title="월세" index="2" priceOption={props.priceOption} setPriceOption={props.setPriceOption}></Slider_box_text>
                <Slidebar index="2" priceOption={props.priceOption} setPriceOption={props.setPriceOption} sBtnInnerText={props.sBtnInnerText} setInnerText={props.setInnerText}></Slidebar>
                <div className="content_price_mark">
                    <span className="text_price_mark">최소</span>
                    <span className="text_price_mark">35만</span>
                    <span className="text_price_mark">200만</span>
                    <span className="text_price_mark">최대</span>
                </div>
            </div>
        </div>

    )
}

function PriceRadioBtn(props){
    return(
        <div className="content_form_radioBtn">
            <input id={props.text} type="radio" name="priceOption" value={props.text}
                className="price_option_btn"  onClick={ (e) => { let copy = [...props.priceOption]; copy[0] = e.target.value; props.setPriceOption(copy); }}/>
            <label for={props.text} className="price_option_label">{props.text}</label>
        </div>
    )
}
function Slider_box_text(props){
    return(
        <div className="price_text_area">
            <p className="text_price_title">{props.title}</p>
            <span className="text_price_result" ></span>
        </div>
    )
}
function Slidebar(props){
    return(
        <div className="slider_box">
            <div className="middle">
                <div className="multi-range-slider">
                    {/* 진짜 슬라이더 */}
                    <input type="range"  name="minDeposit" className="input-left" min="0" max="100" defaultValue="25" onInput={(e) => {
                        processRangebar();
                        let copy = [...props.priceOption]
                        props.index=="1" ? copy[1] = e.target.value : copy[3] = e.target.value;
                        props.setPriceOption(copy);
                        
                    }} />
                    <input type="range"  name="maxDeposit" className="input-right" min="0" max="100" defaultValue="75" onInput={(e) => {
                        processRangebar();
                        let copy = [...props.priceOption]
                        props.index=="1" ? copy[2] = e.target.value : copy[4] = e.target.value;
                        props.setPriceOption(copy);
                    }}/>
                    {/* <!-- 커스텀 슬라이더 --> */}
                    <div className="slider">
                        <div className="track"></div>
                        <div className="range"></div>
                        <div className="thumb left"></div>
                        <div className="thumb right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function processRangebar()  {
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
            // props.priceOption[i+1] = percent + "~" + inputRightBtn[i].value;
            // props.setPriceOption(props.priceOption);
        });

        inputRightBtn[i].addEventListener("input", () => {
            const selectRightBtn = inputRightBtn[i];
            const [min, max] = [parseInt(selectRightBtn.min), parseInt(inputLeftBtn[i].max)];

            selectRightBtn.value = Math.min(parseInt(selectRightBtn.value), parseInt(selectRightBtn.value)-1);

            const percent = ((selectRightBtn.value-min) / (max-min)) * 100;
            thumbRight[i].style.right = 100 - percent + "%";
            range[i].style.right = 100 - percent + "%";
            textPrice[i].innerText = inputLeftBtn[i].value + " ~ " + percent;
            // props.priceOption[i+1] =  inputLeftBtn[i].value + " ~ " + percent;
            // props.setPriceOption(props.priceOption);
        });
    }
};
