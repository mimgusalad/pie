import React, {useState} from "react";

export default function KeywordBtnList(props) {
    var keywordTitleList = ["발생", "열악", "부족"];
    var eachKeywordList=[ ['insect', 'smell','noise'], ['trash','optionQuality','safety'], ['sunlight', 'convenience'] ];
    var eachKeywordKor = [['벌레', '냄새', '소음'], ['쓰레기 처리','옵션 상태','치안'],['일조량','편의시설']];
    return (
        keywordTitleList.map(function(keyword, idx){
            return (
                <div className="keywordList">
                    <p>{ keyword }</p>
                    <KeywordBtn keywordList={eachKeywordList[idx]} checkItemHandler={props.checkItemHandler} eachKeywordKor={eachKeywordKor[idx]}></KeywordBtn>
                </div>
            )
        })
    )
}

function KeywordBtn(props){
    const [checked,setChecked] = useState([false,false,false]);

    const checkHandled = ({target}) =>{
        let index = target.name;
        let copy = [...checked];
        copy[index] = !copy[index];
        setChecked(copy);
        props.checkItemHandler(target.value, target.checked);
    };

    return (
        props.keywordList.map(function(keyword, index){
            return (
            <label>
                <input  id={keyword} type="checkbox" value={props.eachKeywordKor[index]} name={index} onClick={(e)=> checkHandled(e)}/>
                {
                    checked[index] == false ? (
                        <div className="imgBox" style={{boxShadow: "none"}}>
                            <img  src={`${process.env.PUBLIC_URL}/img/keywordImg/${keyword}Img.png`} alt={keyword}  style={{filter: "grayscale(100%)"}}/>
                        </div>
                    ) : (
                        <div className="imgBox" style={{boxShadow: "rgba(0, 0, 0, 0.5) 0px 0px 10px"}}>
                            <img  src={`${process.env.PUBLIC_URL}/img/keywordImg/${keyword}Img.png`} alt={keyword} style={{filter: "grayscale(0%)"}}/>
                        </div>
                    )
                }
            </label>
            )
        })
    );

}
