import React, { useEffect, useState } from 'react';

const sideFilters = [
    {
      label: "소음",
      key: "sound",
    },
    {
      label: "옵션 상태",
      key: "options",
    },
    {
      label: "치안",
      key: "security",
    },
    {
      label: "채광/단열",
      key: "light_insulation",
    },
    {
      label: "쓰레기처리",
      key: "garbage",
    },
    {
      label: "벌레",
      key: "bug",
    },
    {
      label: "냄새",
      key: "smell",
    },
    {
      label: "편의시설",
      key: "convenience",
    },
  ];

  const sideItems = [
    {
      title: "경북 경산시 대학로 280",
      address: "(지번) 대흥 531-2",
      fee: "월세 100 / 50",
      reviews: 64,
      tags: [
        {
          label: "치안",
          key: "security",
        },
        {
          label: "냄새",
          key: "smell",
        },
        {
          label: "편의시설",
          key: "convenience",
        },
      ],
      rating: 3.0,
    },
    {
      title: "경북 경산시 대학로 280",
      address: "(지번) 대흥 531-2",
      fee: "월세 100 / 50",
      reviews: 64,
      tags: [
        {
          label: "치안",
          key: "security",
        },
        {
          label: "냄새",
          key: "smell",
        },
        {
          label: "편의시설",
          key: "convenience",
        },
      ],
      rating: 3.0,
    },
    {
      title: "경북 경산시 대학로 280",
      address: "(지번) 대흥 531-2",
      fee: "월세 100 / 50",
      reviews: 64,
      tags: [
        {
          label: "치안",
          key: "security",
        },
        {
          label: "냄새",
          key: "smell",
        },
        {
          label: "편의시설",
          key: "convenience",
        },
      ],
      rating: 3.0,
    },
    {
      title: "경북 경산시 대학로 280",
      address: "(지번) 대흥 531-2",
      fee: "월세 100 / 50",
      reviews: 64,
      tags: [
        {
          label: "치안",
          key: "security",
        },
        {
          label: "냄새",
          key: "smell",
        },
        {
          label: "편의시설",
          key: "convenience",
        },
      ],
      rating: 3.0,
    },
    {
      title: "경북 경산시 대학로 280",
      address: "(지번) 대흥 531-2",
      fee: "월세 100 / 50",
      reviews: 64,
      tags: [
        {
          label: "치안",
          key: "security",
        },
        {
          label: "냄새",
          key: "smell",
        },
        {
          label: "편의시설",
          key: "convenience",
        },
      ],
      rating: 3.0,
    },
    {
      title: "경북 경산시 대학로 280",
      address: "(지번) 대흥 531-2",
      fee: "월세 100 / 50",
      reviews: 64,
      tags: [
        {
          label: "치안",
          key: "security",
        },
        {
          label: "냄새",
          key: "smell",
        },
        {
          label: "편의시설",
          key: "convenience",
        },
      ],
      rating: 3.0,
    },
    {
      title: "경북 경산시 대학로 280",
      address: "(지번) 대흥 531-2",
      fee: "월세 100 / 50",
      reviews: 64,
      tags: [
        {
          label: "치안",
          key: "security",
        },
        {
          label: "냄새",
          key: "smell",
        },
        {
          label: "편의시설",
          key: "convenience",
        },
      ],
      rating: 3.0,
    },
  ];

function SideBar(){

    // const [selected, setSelected] = useState(false);

    // useEffect(()=>{
    //   if(selected === false) return;
    //   console.log("true일때만 출력", selected)
    //   return() =>{
    //     console.log("값 바뀌기 전에 출력")
    //   }
    // },[selected])

    const [clicked0, setClicked0] = useState(false);
    const onClick0 = () => setClicked0(!clicked0);

    const [clicked1, setClicked1] = useState(false);
    const onClick1 = () => setClicked1(!clicked1);

    const [clicked2, setClicked2] = useState(false);
    const onClick2 = () => setClicked2(!clicked2);

    const [clicked3, setClicked3] = useState(false);
    const onClick3 = () => setClicked3(!clicked3);

    const [clicked4, setClicked4] = useState(false);
    const onClick4 = () => setClicked4(!clicked4);

    const [clicked5, setClicked5] = useState(false);
    const onClick5 = () => setClicked5(!clicked5);

    const [clicked6, setClicked6] = useState(false);
    const onClick6 = () => setClicked6(!clicked6);

    const [clicked7, setClicked7] = useState(false);
    const onClick7 = () => setClicked7(!clicked7);


    return(
        <div className="side-nav">
          <div className="side-nav__filter-container">
            <div className="filter-container__title-wrapper">
              <div className="title-wrapper__title">
                단점 키워드를
                <br />
                선택하여 줄여나가보세요.
              </div>
              <div className="title-wrapper__filter-toggle">
                <div className="toggle-wrapper">
                  <span>공실만 보기</span>
                  <div className="filter-toggle__switch">
                    <div className="switch__circle"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-container__side-filters">
              <div><button className={clicked0 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick0() }}>{sideFilters[0].label}</button></div>
              <div><button className={clicked1 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick1() }}>{sideFilters[1].label}</button></div>
              <div><button className={clicked2 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick2() }}>{sideFilters[2].label}</button></div>
              <div><button className={clicked3 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick3() }}>{sideFilters[3].label}</button></div>
              <div><button className={clicked4 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick4() }}>{sideFilters[4].label}</button></div>
              <div><button className={clicked5 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick5() }}>{sideFilters[5].label}</button></div>
              <div><button className={clicked6 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick6() }}>{sideFilters[6].label}</button></div>
              <div><button className={clicked7 ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick7() }}>{sideFilters[7].label}</button></div>
            </div>
          </div>
          <div className="side-nav__items-wrapper">
            <div className="side-items-title-wrapper">
              <div className="side-items-title">해당 지역 목록 321개</div>
              <div className="side-items-tags">
                <div className="side-tag">
                  <div className="tag-circle"></div>
                  <span>주의</span>
                </div>
                <div className="side-tag">
                  <div className="tag-circle"></div>
                  <span>경계</span>
                </div>
                <div className="side-tag">
                  <div className="tag-circle"></div>
                  <span>심각</span>
                </div>
              </div>
            </div>
            <div className="side-nav__items">
              {sideItems.map((sideItem, index) => {
                return (
                  <div key={index} className="side-nav__item">
                    <div className="item-thumbnail"></div>
                    <div className="item-details">
                      <div className="item__title">{sideItem.title}</div>
                      <div className="item__content">{sideItem.address}</div>
                      <div className="details__bottom-wrapper">
                        <div className="item__price-wrapper">
                          <div className="item__price">{sideItem.fee}</div>
                          <div className="item__reviews">
                            리뷰 {sideItem.reviews}
                          </div>
                        </div>
                        <div className="details__tags-wrapper">
                          <div className="tags">
                            {sideItem.tags.map((tag, tagIndex) => {
                              return (
                                <div className="tag" key={tag.key}>
                                  {tag.label}
                                </div>
                              );
                            })}
                          </div>
                          <div className="rating-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="star-icon"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{sideItem.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    );
}

export default SideBar;

// <div className="filter-container__side-filters"> 아래에 있던거
// {
//   sideFilters.map((sideFilter, index) => {
//     return (
//       <div key={index}>
//         {/* {sideFilter.label} */}
//         <button className={clicked ? 'side-filter-item-clicked' : 'side-filter-item'} onClick={() => { onClick() }}>{sideFilter.label}</button>
//       </div>
//     );
//   })
// }