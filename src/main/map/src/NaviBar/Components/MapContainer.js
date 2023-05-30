import React, {useState, useEffect} from "react";
import {markerData} from "../../data/markerData.js"

const {kakao} = window;

function MapContainer({searchPlace}){

    console.log(searchPlace);
    //초기위치
    let [state, setState] = useState({
        center : { lat: 37.49676871972202, lng: 127.02474726969814 }
    });

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
        center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
        level: 3
      };
        const map = new kakao.maps.Map(container, options);

        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(searchPlace, placesSearchCB);

          function placesSearchCB (data, status, pagination) {
              if (status === kakao.maps.services.Status.OK) {

                  const newSearch = data[0]
                  setState({
                    center : {lat : newSearch.y, lng : newSearch.x}
                  })
              }
          };

          markerData.forEach((el) => {
            new kakao.maps.Marker({
              map : map,
              position : new kakao.maps.LatLng(el.lat, el.lng)
            });
          });

      }, [searchPlace]);
      //
      // useEffect(()=>{
      //   const container = document.getElementById('map');
      //   const options = {
      //   center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
      //   level: 3
      //   };
      //   const map = new kakao.maps.Map(container, options);
      //   function setCenter() {
      //     let moveLatLon = new kakao.maps.LatLng(state.center.lat, state.center.lng);
      //     map.setCenter(moveLatLon);
      //   };
      // },[state])
      //

      return (
        //<Main>
          <div id='map' style={{
              width: '1130px',
              height: '600px',
              // marginTop: '133px',
              // marginLeft: '454px'
          }}></div>
        //</Main>
      );
}

export default MapContainer;