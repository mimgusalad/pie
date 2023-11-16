function imgUpload(){
	console.log('imgUpload');
	const FileElement = document.querySelector('#fileInput');
	console.log('FileElement : ', FileElement);
	console.log(FileElement.files[0]);

	var formData = new FormData();
	formData.append("dataFile",FileElement.files[0]);

	fetch('/CONT/upload', {
	    method: 'POST',
	    cache: 'no-cache',
	    body: formData
	})
	.then((response) => response.json())
	.then((data) => {
            var txtLen = JSON.parse(data.result).txts.length;
            // input에 값 넣기
            document.getElementById("address").value = JSON.parse(data.result).txts[0];
            document.getElementById("addressDetail").value = JSON.parse(data.result).txts[2];
            document.getElementById("periodYear").value = JSON.parse(data.result).txts[txtLen-3];
            document.getElementById("periodMonth").value = JSON.parse(data.result).txts[txtLen-2];
            document.getElementById("periodDay").value = JSON.parse(data.result).txts[txtLen-1];
            document.getElementById("sidebar_btn_submit").value = "제출하기";
	});
}