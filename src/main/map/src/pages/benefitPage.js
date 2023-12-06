import React from "react";

import "./benefitPage.css";


export default function benefitPage(){
    return (
        <div style={{background: "#fff"}} >
            <div className="content_user_point">
                <div className="content_user_info">
                    <img className="img_user_profile" />
                    <span className="text_user_nickname">넨도</span>
                </div>
                <UserPointCard></UserPointCard>
                <UserPointCard></UserPointCard>
                <UserPointCard></UserPointCard>
            </div>
            <div className="content_point_exchange">
                <p style={{
                    color: "var(--text-primary, #222)",
                    marginBottom: "20px",
                    fontFamily:"Pretendard",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "32px"
                }}>포인트 교환하기</p>
                <div className="point_exchange_item" style={{background: "#FF3C6C"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="158" height="46" viewBox="0 0 158 46" fill="none" style={{marginLeft:"65px", marginTop: "10px"}}>
                    <path d="M79.21 20.27V34.04H72.95V20.79C72.95 18.04 71.15 15.96 67.91 15.96C64.96 15.96 62.86 18.04 62.86 20.85V34.05H56.61V10.58H62.61V13.34C64.12 11.03 67.21 10.31 69.4 10.31C76.59 10.31 79.21 15 79.21 20.27ZM19.87 10.59L13.67 25.3L7.31 10.59H0L10.33 32.59L4.43 45.66H11.48L27.2 10.59H19.87ZM107.64 22.48C107.64 29.18 102.15 34.62 95.39 34.62C88.63 34.62 83.14 29.19 83.14 22.48C83.14 15.77 88.63 10.34 95.39 10.34C102.15 10.34 107.64 15.77 107.64 22.48ZM101.48 22.48C101.48 19.15 98.75 16.44 95.38 16.44C92.01 16.44 89.29 19.14 89.29 22.48C89.29 25.82 92.02 28.52 95.38 28.52C98.74 28.52 101.48 25.82 101.48 22.48ZM51.66 23.18V34.05H46.01V31.63C44.17 33.47 41.78 34.59 39.22 34.59C32.45 34.59 26.97 29.16 26.97 22.45C26.97 15.74 32.46 10.31 39.22 10.31C45.98 10.31 51.66 15.6 51.66 23.18ZM45.31 22.48C45.31 19.15 42.58 16.44 39.22 16.44C35.86 16.44 33.13 19.14 33.13 22.48C33.13 25.82 35.86 28.52 39.22 28.52C42.58 28.52 45.31 25.82 45.31 22.48ZM157.99 23.18V34.05H152.34V31.63C150.5 33.47 148.12 34.59 145.55 34.59C138.78 34.59 133.3 29.16 133.3 22.45C133.3 15.74 138.79 10.31 145.55 10.31C152.31 10.31 157.99 15.6 157.99 23.18ZM151.64 22.48C151.64 19.15 148.91 16.44 145.54 16.44C142.17 16.44 139.45 19.14 139.45 22.48C139.45 25.82 142.18 28.52 145.54 28.52C148.9 28.52 151.64 25.82 151.64 22.48ZM111.62 34.04H117.99V0H111.62V34.04ZM123.11 33.71C123.11 38.06 120.47 39.49 118.04 39.49V45.72C121.67 45.72 129.37 44.7 129.41 33.83V10.58H123.1V33.71H123.11Z" fill="white"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="506" height="147" viewBox="0 0 506 147" fill="none" style={{marginLeft:"430px", marginTop: "32px", opacity: "25%"}}>
                    <path d="M253.694 64.9207V109.023H233.644V66.5862C233.644 57.7785 227.879 51.1166 217.502 51.1166C208.054 51.1166 201.328 57.7785 201.328 66.7783V109.055H181.31V33.8856H200.527V42.7253C205.363 35.3269 215.26 33.0208 222.274 33.0208C245.302 33.0208 253.694 48.042 253.694 64.9207ZM63.6396 33.9176L43.7822 81.0308L23.4125 33.9176H0L33.0849 104.379L14.1884 146.24H36.7681L87.1161 33.9176H63.6396ZM344.749 71.9989C344.749 93.4576 327.166 110.881 305.515 110.881C283.864 110.881 266.281 93.4897 266.281 71.9989C266.281 50.5081 283.864 33.1169 305.515 33.1169C327.166 33.1169 344.749 50.5081 344.749 71.9989ZM325.02 71.9989C325.02 61.3336 316.276 52.654 305.483 52.654C294.689 52.654 285.978 61.3015 285.978 71.9989C285.978 82.6962 294.721 91.3438 305.483 91.3438C316.244 91.3438 325.02 82.6962 325.02 71.9989ZM165.457 74.2408V109.055H147.361V101.304C141.468 107.198 133.813 110.785 125.614 110.785C103.931 110.785 86.3794 93.3936 86.3794 71.9028C86.3794 50.412 103.963 33.0208 125.614 33.0208C147.265 33.0208 165.457 49.9636 165.457 74.2408ZM145.119 71.9989C145.119 61.3336 136.375 52.654 125.614 52.654C114.852 52.654 106.109 61.3015 106.109 71.9989C106.109 82.6962 114.852 91.3438 125.614 91.3438C136.375 91.3438 145.119 82.6962 145.119 71.9989ZM506.01 74.2408V109.055H487.914V101.304C482.021 107.198 474.398 110.785 466.167 110.785C444.484 110.785 426.933 93.3936 426.933 71.9028C426.933 50.412 444.516 33.0208 466.167 33.0208C487.818 33.0208 506.01 49.9636 506.01 74.2408ZM485.672 71.9989C485.672 61.3336 476.929 52.654 466.135 52.654C455.342 52.654 446.63 61.3015 446.63 71.9989C446.63 82.6962 455.374 91.3438 466.135 91.3438C476.897 91.3438 485.672 82.6962 485.672 71.9989ZM357.496 109.023H377.898V0H357.496V109.023ZM394.296 107.966C394.296 121.898 385.841 126.478 378.058 126.478V146.432C389.684 146.432 414.346 143.165 414.474 108.351V33.8856H394.264V107.966H394.296Z" fill="white"/>
                  </svg>
                  <p className="text_point_title"> 5,000 Point</p>
                  <p className="text_point_sub">야놀자 포인트로 교환</p>
            </div>
            <div className="point_exchange_item" style={{border : "3px solid #E8EBED"}}>
                <img src={`${process.env.PUBLIC_URL}/img/benefit/benefit_name_shinsegae.png`} style={{width: "291px", height: "163px", marginLeft:"40px"}} />
                <img src={`${process.env.PUBLIC_URL}/img/benefit/benefit_icon_shinsegae.png`} style={{width: "930px", height: "176px" }}/>
                <p className="text_point_title"> 3,000 Point</p>
                <p className="text_point_sub">신세계 포인트로 교환</p>
            </div>
            <div className="point_exchange_item" style={{background: "#FFEB00"}}>
                <img src={`${process.env.PUBLIC_URL}/img/benefit/benefit_name_kakao.png`} style={{width: "157px", height: "180px", marginLeft:"65px"}} />
                <img src={`${process.env.PUBLIC_URL}/img/benefit/benefit_icon_kakao.png`} style={{width: "285px", height: "180px", marginLeft:"540px"}} />
                <p className="text_point_title"> 1,000 Point</p>
                <p className="text_point_sub">카카오페이지 포인트로 교환</p>
            </div>
            <div className="point_exchange_item" style={{background: "#2AC1BC"}}>
                <img src={`${process.env.PUBLIC_URL}/img/benefit/benefit_name_delivery.png`} style={{width: "241px", height: "154px", marginLeft:"40px", marginTop: "10px"}} />
                <img src={`${process.env.PUBLIC_URL}/img/benefit/benefit_icon_delivery.png`} style={{width: "135px", height: "142px", marginLeft:"600px", marginTop: "20px"}} />
                <p className="text_point_title"> 1,000 Point</p>
                <p className="text_point_sub">배달의 민족 포인트로 교환</p> 
            </div> 
            
            </div>

            <div className="content_point_event">
                <p style={{
                    color: "var(--text-primary, #222)",
                    marginBottom: "20px",
                    fontFamily:"Pretendard",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "32px"
                }}>이벤트</p>
                <div className="list-control cont mb-20">
                    <div className="how-many">
                        <p>총 <strong className="highlight">39</strong>건</p>
                    </div>
                    <div className="sort-by">
                        <button type="button" className="btn sort" title="최신순 정렬" onclick="sortPage('1');">최신순</button>
                        <button type="button" className="btn sort" title="조회순 정렬" onclick="sortPage('2');">마감순</button>
                    </div>
                </div>
                <ul className="post-list ongoing ml-40">
                    <li className="post-preview">    
                            <a href="javascript:goView(4167);" className="post-anchor"></a>
                            <div className="thumb">
                                <span className="ev-lb">캐쉬<br/>업</span>
                                    <img src="https://image.cultureland.co.kr/upload/web/plus/21429172667389593635924106.png" alt="image description" />
                            </div>
                            <div className="meta pt-15">
                                <h3 className="line-1">쿠팡캐시 캐시백 </h3>
                                <p className="term">기간 : 2023-10-20~2023-10-31</p>
                            </div>
                        </li>
                        <li className="post-preview">
                            
                            <a href="javascript:goView(4165);" className="post-anchor"></a>
                            <div className="thumb">
                                <span className="ev-lb">캐쉬<br/>업</span>
                                <img src="https://image.cultureland.co.kr/upload/web/plus/14552726137069152041802704.png" alt="image description"/>
                            </div>
                            <div className="meta pt-15">
                                <h3 className="line-1">스마일캐시 2% 수수료지원!</h3>
                                <p className="term">기간 : 2023-10-18~2023-10-31</p>
                            </div>
                        </li>
                        <li className="post-preview">
                            
                            <a href="http://www.shinhan.maxxcard.co.kr/event.do?media=cultureland&amp;pd_cd=05" target="_blank" className="post-anchor"></a>
                            <div className="thumb">
                                <span className="ev-lb ty3">간편<br/>응모</span>
                                <img src="https://image.cultureland.co.kr/upload/web/plus/19389900136785006317293723.jpg" alt="image description"/>
                            </div>
                            <div className="meta pt-15">
                                <h3 className="line-1">신한플레이 이벤트</h3>
                                <p className="term">기간 : 2023-10-13~2023-12-31</p>
                            </div>
                        </li>
                        <li className="post-preview">
                            
                            <a href="https://h-point-web.app.link/e/2303_cultureland_app" target="_blank" className="post-anchor"></a>
                            <div className="thumb">
                                <span className="ev-lb ty3">간편<br/>응모</span>
                                <img src="https://image.cultureland.co.kr/upload/web/plus/7957361393550783407553972.png" alt="image description"/>
                            </div>
                            <div className="meta pt-15">
                                <h3 className="line-1">H.Point 회원가입하면?</h3>
                                <p className="term">기간 : 2023-10-11~2023-12-31</p>
                            </div>
                        </li>
                        <li className="post-preview">
                            
                            <a href="https://www.cultureland.co.kr/event/CoupangADForus.do" target="_blank" className="post-anchor"></a>
                            <div className="thumb">
                                <span className="ev-lb ty2">상품권<br/>이벤트</span>
                                <img src="https://image.cultureland.co.kr/upload/web/plus/21474836472912587418836037.png" alt="image description"/>
                            </div>
                            <div className="meta pt-15">
                                <h3 className="line-1">쇼핑하면 상품권당첨</h3>
                                <p className="term">기간 : 2023-10-07~2023-10-31</p>
                            </div>
                        </li>
                        <li className="post-preview">
                            
                            <a href="javascript:goView(4156);" className="post-anchor"></a>
                            <div className="thumb">
                                <span className="ev-lb">캐쉬<br/>업</span>
                                <img src="https://image.cultureland.co.kr/upload/web/plus/8348459296113770418136215.png" alt="image description"/>
                            </div>
                            <div className="meta pt-15">
                                <h3 className="line-1">캐시플러스 5% 캐쉬업 이벤트</h3>
                                <p className="term">기간 : 2023-10-06~2023-10-31</p>
                            </div>
                        </li>
                        <li className="post-preview">
                            
                            <a href="javascript:goView(4153);" className="post-anchor"></a>
                            <div className="thumb">
                                <span className="ev-lb ty3">간편<br/>응모</span>
                                <img src="https://image.cultureland.co.kr/upload/web/plus/21474836476003565629988682.png" alt="image description"/>
                            </div>
                            <div className="meta pt-15">
                                <h3 className="line-1">KB Pay 이벤트</h3>
                                <p className="term">기간 : 2023-10-05~2023-10-31</p>
                            </div>
                        </li>
                        <li className="post-preview">
                            
                            <a href="http://api.pincrux.com/click.pin?appkey=132116&amp;pubkey=910070" target="_blank" className="post-anchor"></a>
                            <div className="thumb">
                                <span className="ev-lb ty3">간편<br/>응모</span>
                                <img src="https://image.cultureland.co.kr/upload/web/plus/9713956107327365944385141.jpg" alt="image description"/>
                            </div>
                            <div className="meta pt-15">
                                <h3 className="line-1">미툰 무료체험 이벤트</h3>
                                <p className="term">기간 : 2023-10-05~2023-12-31</p>
                            </div>
                        </li>
                        <li className="post-preview">
                            
                            <a href="https://api.pincrux.com/click.pin?appkey=132109&amp;pubkey=910070" target="_blank" className="post-anchor"></a>
                            <div className="thumb">
                            <span className="ev-lb ty3">간편<br/>응모</span>
                                <img src="https://image.cultureland.co.kr/upload/web/plus/14314061255418773732860192.png" alt="image description"/>
                            </div>
                            <div className="meta pt-15">
                                <h3 className="line-1">SK증권 계좌개설 이벤트</h3>
                                <p className="term">기간 : 2023-10-04~2023-10-31</p>
                            </div>
                        </li>
                    </ul>
                    <div className="paging dot-top">
                        <a href="javascript:movePage('1');" title="처음 페이지로 이동">
                            <i className="icon-first">처음 페이지로 이동</i>
                        </a>
                        <span><strong title="현재 페이지">1</strong>
                        <a href="javascript:movePage('2');">2</a>
                        <a href="javascript:movePage('3');">3</a>
                        <a href="javascript:movePage('4');">4</a>
                        <a href="javascript:movePage('5');">5</a>
                        </span><a href="javascript:movePage('5');" title="마지막 페이지로 이동"><i className="icon-last">마지막 페이지로 이동</i></a>

                        <form id="frmPage" method="post" action="ingEvent.do">
                            <input type="hidden" name="pageNavi" value="10" />
                            <input type="hidden" name="pageList" value="9" />
                            <input type="hidden" name="totalCount" value="39" />
                            <input type="hidden" id="pageNow" name="pageNow" value="" />
                            <input type="hidden" name="startRow" value="0" />
                        </form>

                    </div>
            </div>
        </div>
    
    );
}

function UserPointCard(){
    return (
            <div className="user_point_area" >
                <img src="/img/benefit/benefit_img1.png"  />
                <p className="text_main_title">3등급</p>
                <p className="text_sub_title">나의 혜택 등급</p>
                <p className="text_other">다음 등급까지 4,000점 필요</p>
            </div>
    );
}

function PointExchangeItem(){
    return (
            <div className="point_exchange_item" style={{background: "#FF3C6C"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="158" height="46" viewBox="0 0 158 46" fill="none" style={{marginLeft:"65px", marginTop: "10px"}}>
                    <path d="M79.21 20.27V34.04H72.95V20.79C72.95 18.04 71.15 15.96 67.91 15.96C64.96 15.96 62.86 18.04 62.86 20.85V34.05H56.61V10.58H62.61V13.34C64.12 11.03 67.21 10.31 69.4 10.31C76.59 10.31 79.21 15 79.21 20.27ZM19.87 10.59L13.67 25.3L7.31 10.59H0L10.33 32.59L4.43 45.66H11.48L27.2 10.59H19.87ZM107.64 22.48C107.64 29.18 102.15 34.62 95.39 34.62C88.63 34.62 83.14 29.19 83.14 22.48C83.14 15.77 88.63 10.34 95.39 10.34C102.15 10.34 107.64 15.77 107.64 22.48ZM101.48 22.48C101.48 19.15 98.75 16.44 95.38 16.44C92.01 16.44 89.29 19.14 89.29 22.48C89.29 25.82 92.02 28.52 95.38 28.52C98.74 28.52 101.48 25.82 101.48 22.48ZM51.66 23.18V34.05H46.01V31.63C44.17 33.47 41.78 34.59 39.22 34.59C32.45 34.59 26.97 29.16 26.97 22.45C26.97 15.74 32.46 10.31 39.22 10.31C45.98 10.31 51.66 15.6 51.66 23.18ZM45.31 22.48C45.31 19.15 42.58 16.44 39.22 16.44C35.86 16.44 33.13 19.14 33.13 22.48C33.13 25.82 35.86 28.52 39.22 28.52C42.58 28.52 45.31 25.82 45.31 22.48ZM157.99 23.18V34.05H152.34V31.63C150.5 33.47 148.12 34.59 145.55 34.59C138.78 34.59 133.3 29.16 133.3 22.45C133.3 15.74 138.79 10.31 145.55 10.31C152.31 10.31 157.99 15.6 157.99 23.18ZM151.64 22.48C151.64 19.15 148.91 16.44 145.54 16.44C142.17 16.44 139.45 19.14 139.45 22.48C139.45 25.82 142.18 28.52 145.54 28.52C148.9 28.52 151.64 25.82 151.64 22.48ZM111.62 34.04H117.99V0H111.62V34.04ZM123.11 33.71C123.11 38.06 120.47 39.49 118.04 39.49V45.72C121.67 45.72 129.37 44.7 129.41 33.83V10.58H123.1V33.71H123.11Z" fill="white"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="506" height="147" viewBox="0 0 506 147" fill="none" style={{marginLeft:"430px", marginTop: "32px", opacity: "25%"}}>
                    <path d="M253.694 64.9207V109.023H233.644V66.5862C233.644 57.7785 227.879 51.1166 217.502 51.1166C208.054 51.1166 201.328 57.7785 201.328 66.7783V109.055H181.31V33.8856H200.527V42.7253C205.363 35.3269 215.26 33.0208 222.274 33.0208C245.302 33.0208 253.694 48.042 253.694 64.9207ZM63.6396 33.9176L43.7822 81.0308L23.4125 33.9176H0L33.0849 104.379L14.1884 146.24H36.7681L87.1161 33.9176H63.6396ZM344.749 71.9989C344.749 93.4576 327.166 110.881 305.515 110.881C283.864 110.881 266.281 93.4897 266.281 71.9989C266.281 50.5081 283.864 33.1169 305.515 33.1169C327.166 33.1169 344.749 50.5081 344.749 71.9989ZM325.02 71.9989C325.02 61.3336 316.276 52.654 305.483 52.654C294.689 52.654 285.978 61.3015 285.978 71.9989C285.978 82.6962 294.721 91.3438 305.483 91.3438C316.244 91.3438 325.02 82.6962 325.02 71.9989ZM165.457 74.2408V109.055H147.361V101.304C141.468 107.198 133.813 110.785 125.614 110.785C103.931 110.785 86.3794 93.3936 86.3794 71.9028C86.3794 50.412 103.963 33.0208 125.614 33.0208C147.265 33.0208 165.457 49.9636 165.457 74.2408ZM145.119 71.9989C145.119 61.3336 136.375 52.654 125.614 52.654C114.852 52.654 106.109 61.3015 106.109 71.9989C106.109 82.6962 114.852 91.3438 125.614 91.3438C136.375 91.3438 145.119 82.6962 145.119 71.9989ZM506.01 74.2408V109.055H487.914V101.304C482.021 107.198 474.398 110.785 466.167 110.785C444.484 110.785 426.933 93.3936 426.933 71.9028C426.933 50.412 444.516 33.0208 466.167 33.0208C487.818 33.0208 506.01 49.9636 506.01 74.2408ZM485.672 71.9989C485.672 61.3336 476.929 52.654 466.135 52.654C455.342 52.654 446.63 61.3015 446.63 71.9989C446.63 82.6962 455.374 91.3438 466.135 91.3438C476.897 91.3438 485.672 82.6962 485.672 71.9989ZM357.496 109.023H377.898V0H357.496V109.023ZM394.296 107.966C394.296 121.898 385.841 126.478 378.058 126.478V146.432C389.684 146.432 414.346 143.165 414.474 108.351V33.8856H394.264V107.966H394.296Z" fill="white"/>
                  </svg>
                  <p className="text_point_title"> 5,000 Point</p>
                  <p className="text_point_sub">야놀자 포인트로 교환</p>
            </div>
    );
}