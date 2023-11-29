// export default function uploadPhoto(e){
//     if (window.File && window.FileList && window.FileReader) {
//         let plusName = [];
//         let plusSrc = [];
//         var files = e.target.files; //FileList object
//         var output = files.length;
//         var classCnt = imgPreviewSrc.length;
        
//         if((classCnt + output) > 4){
//             alert("이미지는 최대 4장까지 업로드 가능합니다.")
//             return;
//         }

//         for (var i = 0; i < files.length; i++) {
//             var file = files[i];
//             //Only pics
//             if (!file.type.match('image')) {
//                 continue;
//             }
//             plusName.push(file.name);
//             var picReader = new FileReader();
//             picReader.addEventListener("load", function (event) {
//                 var picFile = event.target;
//                 setImgPreviewSrc([...imgPreviewSrc, picFile.result]);
//             });
//             //Read the image
//             picReader.readAsDataURL(file);
//         }
//         console.log(plusSrc)
//         setImgPreviewName([...imgPreivewName,plusName]);
//     } else {
//         console.log("fail")
//     }
// }