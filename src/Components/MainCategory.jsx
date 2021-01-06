import React from "react";

const MainCategory = (props) => {
  const { m_id, m_name } = props.mCategory;
  return (
    <div key={m_id} className="m__category__wrapper">
      <h2 className="m__category__heading">{m_name}</h2>
    </div>
  )
};

export default MainCategory;
