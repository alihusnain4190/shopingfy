import React, { useState } from "react";
import subCategory from "../data/sCategory";
import { FaPlus } from "react-icons/fa";
const SubCategory = (props) => {
  /* return array of sub category according to main category */
  const result = subCategory.filter(({ m_id, s_id, s_name }) => {
    if (props.mCategory.m_id === m_id) return s_name;
  });
  const handleClick = (name, id, m_id) => {
    props.itemName(name, id, m_id);
  };
  return (
    <div className="s__category__wrapper">
      {result.map(({ s_id, s_name, m_id }) => {
        return (
          <p
            key={s_id}
            className="m__category__p"
            onClick={() => {
              handleClick(s_name, s_id, m_id);
            }}
          >
            {s_name.toUpperCase()}
            <FaPlus className="m__category__plus" />
          </p>
        );
      })}
    </div>
  );
};

export default SubCategory;
