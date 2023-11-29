import React, { useState } from "react";
import DaumPostcode from 'react-daum-postcode';



function DaumPost(props){
    let [modal,setModal] = useState(false);
    const postCodeStyle={
        width:'450px',
        height:'500px',
        position: 'absolute',
        left:'35%',
        top: '20%',
        zIndex: '100',
        backgroundColor: 'rgb(255, 255, 255)',
        flexDirection: 'column',
        display: modal ? 'block': 'none',
    };

    const ModalBackground={
        position:'fixed',
        top : "0",
        left: "0",
        right: "0",
        bottom:"0",
        background:"#00000080",
        zIndex: "10000",
        display: modal ? 'block':'none',
    };

    const onCompletePost = data => {
        setModal(!modal)
        props.setAddressObj(data.address);
    }
    
    const handleClick = () => {
        setModal(!modal)
    }
    return (
        <>
        <button className = "content_form_location_submit" type="button" onClick={handleClick}>검색</button>
        {modal == true? 
        (<div style={ModalBackground} onClick={handleClick}>
            <DaumPostcode style={postCodeStyle} onComplete={onCompletePost}></DaumPostcode>
         </div>): null}
    </>
    );
   }
  
  export default DaumPost;