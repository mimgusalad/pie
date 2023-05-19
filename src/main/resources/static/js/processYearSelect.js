function appendYear($select){
    var date = new Date();
    var year = date.getFullYear();
    var idx = 0;
    for(var i=year-10; i<=year; i++){
        $select.prepend("<option value='"+i+"'>"+i+"년"+"</option>");
        idx++;
    }
    $select.find("option:eq(0)").prop("selected", true);
}
appendYear($("#select"));