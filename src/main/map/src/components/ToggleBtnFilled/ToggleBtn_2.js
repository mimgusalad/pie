import React, { useState, useRef, useEffect } from "react";
import "./ToggleBtn.css";

export default function ToggleBtn_2({
  items,
  width,
  filled,
  selectedPrice,
  setSelectedPrice,
}) {
  const [isOpen, setIsOpen] = useState(false);
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
        {selectedPrice.range || "가격 선택"}
        <div className={`arrow ${isOpen ? "up" : "down"}`}></div>
      </button>
      {isOpen && (
        <div className="toggleList" ref={toggleContainer}>
          {items.map((item) => (
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault(); // a 태그의 기본 이벤트를 방지합니다.
                event.stopPropagation(); // 이벤트 버블링을 중단합니다.
                const [minPrice, maxPrice] = item.split("~").map(Number);
                setSelectedPrice({ min: minPrice, max: maxPrice, range: item });
                setIsOpen(false);
              }}
              key={item}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
