import React from "react";
import subCategory from "../data/sCategory";

const SubCategory = (props) => {
  const { m_id, m_name } = props.mCategory;

  const result = subCategory.filter(({ m_id, s_id, s_name }) => {
    if (props.mCategory.m_id === m_id) return s_name;
  });
  console.log(result);

  return (
    <div>
      {result.map(({ m_id, s_id, s_name }) => {
        return <h1>{s_name}</h1>;
      })}
    </div>
  );
};

export default SubCategory;
