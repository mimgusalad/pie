import React, {useEffect} from "react";

const { kakao } = window;

export default function KakaoMap(props){
    console.log(props.latitude)
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center : new kakao.maps.LatLng(props.latitude, props.longitude),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
        
        var markerPosition = new kakao.maps.LatLng(props.latitude, props.longitude);
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    },[])

    return (
        <div className="content_map_area" id="map" style={{
            marginTop: "40px",
            width: "620px",
            height: "240px",
            
            borderRadius: "8px"
        }}>
        </div>
    )
}