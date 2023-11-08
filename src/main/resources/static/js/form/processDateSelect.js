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
        for(var y = (com_year+5); y > (com_year-1); y--){
            $("#periodYear").append("<option value='"+y+"'>"+y+" 년"+"</option>");
        }
        //$("#periodYear").find("option:eq(0)").prop("selected", true);
        // 월 뿌려주기(1월부터 12월)
        var month;
        for(var i = 1; i <= 12; i++){
            $("#periodMonth").append("<option value='"+i+"'>"+i+" 월"+"</option>");
        }
        //$("#periodMonth").find("option:eq(0)").prop("selected", true);
        // 일 뿌려주기(1일부터 31일까지)
        var day;
        var endDay = 31;
        for(var i=1; i<= endDay; i++){
            $("#periodDay").append("<option value='"+i+"'>"+i+" 일"+"</option>");
        }
        //$("#periodDay").find("option:eq(0)").prop("selected", true);
    }