import React from "react";

const MainCategory = (props) => {
  const { m_id, m_name } = props.mCategory;
  return (
    <div>
      <h3>{m_name}</h3>
    </div>
  );
};

export default MainCategory;
