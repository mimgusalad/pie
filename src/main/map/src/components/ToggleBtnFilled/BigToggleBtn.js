import React, { useState, useRef, useEffect } from "react";
import "./ToggleBtn.css";

export default function BigToggleBtn({
  cityItems,
  width,
  filled,
  selectedCity,
  setSelectedCity,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const [selected, setSelected] = useState(false);
  const toggleContainer = useRef(null);
  const toggleRef = useRef(null);

  const handleOutsideClick_1 = (event) => {
    if (
      toggleContainer.current &&
      !toggleContainer.current.contains(event.target) &&
      !toggleRef.current.contains(event.target)
    ) {
      setIsOpen(false); // 토글이 열려있는 상태에서 외부를 클릭하면 토글을 닫습니다.
    }
  };

  const handleStateItemClick = (item) => {
    setSelectedItem(item);
  };
  const handleItemClick = (item) => {
    setSelectedCity(cityItems[selectedItem].state + " " + item);
    setIsOpen(false);
    setSelected(true);
  };

  // const siDo = areaData.map((item) => item.siDo);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick_1);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick_1);
    };
  }, []);

  return (
    <div>
      <button
        className={filled ? `toggleBtnFilled` : `toggleBtnNotFilled`}
        onClick={() => setIsOpen(!isOpen)}
        ref={toggleRef}
      >
        {selectedCity || "지역 선택"}
        <div className={`arrow ${isOpen ? "up" : "down"}`}></div>
      </button>
      {isOpen && (
        <div className="toggleGrid" ref={toggleContainer}>
          <div className="stateColumn">
            <div className="category">시/도</div> {/* 카테고리 추가 */}
            {cityItems.map((state) => (
              <button
                onClick={() => handleStateItemClick(state.id)}
                key={state.id}
                className={selectedItem === state.id ? "selected" : ""}
              >
                {state.state}
              </button>
            ))}
          </div>
          <div className="cityColumn">
            <div className="category">시/군/구</div> {/* 카테고리 추가 */}
            {cityItems[selectedItem].city.map((city) => (
              <button onClick={() => handleItemClick(city)} key={city}>
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
