/* 키워드 이미지 선택 처리하는 함수
   키워드 추가 process
   키워드 삭제 process
*/
function getCheckboxValue() {
    const queryCB = 'input[name="keyword"]:checked';
    const queryP = 'p[class="keywordText"]';

    const selectedCB= document.querySelectorAll(queryCB);
    const selectedP = document.querySelectorAll(queryP);
    
    /*체크된 키워드가 4개 이상인지 확인*/
    /*4개 이상인 경우 해당 함수 실행하지 않음*/
    if (selectedCB.length >3){
        alert('키워드는 최대 3개까지 선택가능합니다.');
        return 0;
    }

    /*체크된 키워드 이름 저장*/
    /*체크된 키워드 색 변경*/
    let elementCB = [];
    selectedCB.forEach((el) => {
        elementCB.push(el.value);
        const nextElement = el.nextElementSibling;
        nextElement.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
        const imgElement = nextElement.firstElementChild;
        imgElement.style.filter="grayscale(0%)";
    });
    
    /*keywordText에 적혀져있는 text가져오기*/
    let elementP=[];
    selectedP.forEach((el) => {
        if(el.innerText != ''){
            elementP.push(el.innerText);
        }
    });

    /*추가 혹은 삭제 algorithm*/
    /*추가*/
    if(elementCB.length > elementP.length){
        /*새로 추가된 키워드 버튼 찾기*/
        elementP.forEach((el) =>{
            elementCB.splice(elementCB.indexOf(el),1);
        });
        let queryTemp = 'p[class="keywordText"]:empty';
        document.getElementById(document.querySelector(queryTemp).id).innerText = elementCB[0];
    }
    /*삭제*/
    else{
        elementCB.forEach((el) =>{
            elementP.splice(elementP.indexOf(el),1);
        });

        /*삭제된 키워드가 적인 text 삭제*/
        selectedP.forEach((el) => {
            if(el.innerText == elementP[0]){
                el.innerText = '';
            }
        });
        /*삭제된 키워드의 버튼색을 gray로 변환*/
        const el = document.getElementById(elementP[0]);
        const nextElement = el.nextElementSibling;
        nextElement.style.boxShadow = "none";
        const imgElement = nextElement.firstElementChild;
        imgElement.style.filter="grayscale(100%)";
    }
}

/* 방찾기 버튼 클릭시 실행되는 함수
   : 선택된 키워드가 1순위부터 순차적으로 선택되어 있는지 
   유효성 검사하는 함수
   : 유효성 검사 실패시 메인페이지 유지
   : 유효성 검사 성공시 지도 화면으로 전환
*/

function validationKeyword(){
    const roomSearchForm = document.roomSearchForm;
    var firstKeyword = document.getElementById("firstKeyword").innerText;
    var secondKeyword = document.getElementById("secondKeyword").innerText;
    var thirdKeyword = document.getElementById("thirdKeyword").innerText;

    if(!firstKeyword){
        if(secondKeyword || thirdKeyword){
            alert("키워드를 순차적으로 입력해주세요.");
            return false;
        }
        else{
            /*hidden input에 각 키워드들 insert*/
            roomSearchForm.submit();
        }
    }
    else{
        if(!secondKeyword && thirdKeyword){
            alert("키워드를 순차적으로 입력해주세요.");
            return false;
        }
        else{
            /*hidden input에 각 키워드들 insert*/
            const tmpResult = document.querySelectorAll('input[type="hidden"]');
            const keywordList = [firstKeyword,secondKeyword,thirdKeyword];
            for(var i=1; i<tmpResult.length; i++ ){
                tmpResult[i].value=keywordList[i-1];
            }
            roomSearchForm.submit();
        }
    }
}