// 유효성 검사 하는 js
// 방유형 및 별점 평가하는 항목
window.onload = function() {
    const realUpload = document.querySelector('.content_photo_input');
    const upload = document.querySelector('.content_photo_imgarea');
    document.getElementById("payment").value = null;
    document.getElementById("deposit").value = null;
    document.getElementById("fee").value = null;

    // 뒤로가기 버튼 클릭시
    $(document).on('click', '#sidebar_btn_return', function(e) {
          Swal.fire({
            title: '정말로 나가실 건가요?',
            text: "입력하신 내용은 저장되지 않습니다.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '나가기',
            cancelButtonText: '계속 진행하기'
          }).then((result) => {
            if (result.isConfirmed) {
              location.href='/';
            }
          })
        });

    // 사진 업로드
    upload.addEventListener('click', () => realUpload.click(),false);
    realUpload.addEventListener('change', handleFileSelect,false);

    // 방구조 유효성검사
    document.getElementById('content_form').onsubmit = function(){
        var houseTypeChk = false;
        for(var i =0; i< 5; i++){
            if(content_form.houseType[i].checked == true){
                houseTypeChk = true;
            }
        }
        if(houseTypeChk == false){
            alert("방구조를 체크해주세요.")
            return false;
        }

/*        var starPoint =  document.querySelector('.rating input').value;
        if(starPoint == 0){
            alert("별점을 평가해주세요.")
            return false;
        }*/
    };
};

function handleFileSelect() {
    //Check File API support
    if (window.File && window.FileList && window.FileReader) {

        var files = event.target.files; //FileList object
        var output = document.getElementById("content_photo_preview");
        var classCnt = document.getElementsByClassName('thumbnail').length;

        if((classCnt + files.length) > 4){
            alert("이미지는 최대 4장까지 업로드 가능합니다.")
            return;
        }

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            //Only pics
            if (!file.type.match('image')) {
                continue;
            }

            var picReader = new FileReader();
            picReader.addEventListener("load", function (event) {
                var picFile = event.target;
                var div = document.createElement("div");
                div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" + "title='" + picFile.name + "'/>";
                output.insertBefore(div, null);
            });
            //Read the image
            picReader.readAsDataURL(file);
        }
    } else {
        console.log("Your browser does not support File API");
    }
}