import React from "react";
import { useGlobalContext } from "../Context/Context";

export default function Categories() {
  const { categoryItems, filterItems } = useGlobalContext();
  return (
    <div>
      {categoryItems.map((item, index) => {
        return (
          <button
            key={index}
            className="btn  btn-outline-warning mx-1 mx-md-2 "
            onClick={() => {
              filterItems(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
