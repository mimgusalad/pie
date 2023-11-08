function imgUpload(){
	console.log('imgUpload');
	const FileElement = document.querySelector('#fileInput');
	console.log('FileElement : ', FileElement);
	console.log(FileElement.files[0]);

	var formData = new FormData();
	formData.append("dataFile",FileElement.files[0]);
    Swal.fire({
        title:'계약서 인증 중입니다",
        showLoaderOnConfirm: true,  //데이터 결과를 받을 때까지 로딩바
        preConfirm: () => { // 자동 실행 되는 함수
            return fetch('/CONT/upload', {
                method: 'POST',
                cache: 'no-cache',
                body: formData
            })
            .then((response) => response.json())
        },
        allowOutsideClick: () => !Swal.isLoading()
        }).then((data) => {
            var list = "";
            for(var i=0; i<JSON.parse(data.result).txts.length; i++){
                list += "<div><span>" + JSON.parse(data.result).txts[i] + "</div>";
            }
            document.getElementById("ocr_result_time").innerHTML = data.time;
            document.getElementById("ocr_result").innerHTML = list;
        })
}

