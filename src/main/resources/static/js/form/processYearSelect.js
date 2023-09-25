$(document).ready(function(){
        setDateBox();
    });

    // select box 연도 , 월 표시
    function setDateBox(){
        var dt = new Date();
        var year = "";
        var com_year = dt.getFullYear();
        // 발행 뿌려주기
        // 올해 기준으로 -1년부터 +5년을 보여준다.
        for(var y = (com_year); y > (com_year-12); y--){
            $("#year").append("<option value='"+ y +"'>"+ y + "년" +"</option>");
        }
    }