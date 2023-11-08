const openBtn= document.querySelector("#sidebar_btn_submit");
const closeBtn=document.querySelector(".modal_closeBtn");
const okBtn= document.querySelector(".modal_complete_btn");
const modal = document.querySelector(".modal");
const realUpload_photo = document.querySelector('.input_contract_photo');
const upload_photo = document.querySelector('.upload_contract_area');
const altImg = document.querySelector(".altImg");
const uploadIcon = document.querySelector(".uploadIcon");

upload_photo.addEventListener('click', () => realUpload_photo.click(),false);
realUpload_photo.addEventListener('change', fileSelect,false);

const open= () => {
    if (openBtn.value == "계약서 인증"){
        modal.classList.remove("hidden");
    }
}
const close = () => {
modal.classList.add("hidden");
altImg.classList.add("hidden");
uploadIcon.classList.remove("hidden");
altImg.src="";
}

openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
okBtn.addEventListener("click", close);


$(document).on('click', '.modal_complete_btn', function(e) {
    let timerInterval;
    Swal.fire({
      title: "잠시만 기다려주세요",
      html: "계약서에서 주소 및 계약기간을 추출 중입니다.",
      timer: 60000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });

});

//PreView Img File
function fileSelect() {
    //Check File API support
    if (window.File && window.FileList && window.FileReader) {

        var files = event.target.files; //FileList object
        var output = document.getElementById("contractPreview");

        if((files.length) > 1){
            alert("이미지는 한장만 업로드 가능합니다.")
            return;
        }

        var file = files[0];

        if (!file.type.match('image')){
            alter("이미지 파일만 업로드 가능합니다.")
            return;
        }

        var picReader = new FileReader();
        picReader.addEventListener("load", function (event) {
            var picFile = event.target;

            altImg.classList.remove("hidden");
            uploadIcon.classList.add("hidden");
            altImg.src=picFile.result;
            altImg.title = picFile.name;
        });

        picReader.readAsDataURL(file);
    }
    else {
        console.log("Your browser does not support File API");
    }
}