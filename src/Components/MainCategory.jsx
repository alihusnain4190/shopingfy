import React, { useEffect, useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";

const MainCategory = (props) => {
  const { m_id, m_name } = props.mCategory;
  const [mHeading, setHeading] = useState({ m_name: "", m_id: 0 });
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setHeading({ m_name: props.mCategory.m_name, m_id: props.mCategory.m_id });
  }, [props.mHeading]);
  const handleEdit = (e) => {
    setEdit(!edit);
  };
  const hadnleSubmit = (e) => {
    e.preventDefault();
    setHeading((prevState) => ({
      m_name: mHeading,
    }));
    props.changeMainHeading(mHeading);
  };
  if (edit === false) {
    return (
      <div key={m_id} className="m__category__wrapper">
        <h2 className="m__category__heading">{mHeading.m_name}</h2>
        <FaEdit className="m__category__wrapper__edit" onClick={handleEdit} />
      </div>
    );
  }
  if (edit === true) {
    return (
      <div key={m_id} className="m__category__wrapper">
        <form onSubmit={hadnleSubmit}>
          <input
            type="text"
            onChange={(e) => setHeading({ m_name: e.target.value, m_id: m_id })}
          ></input>
          <button>Save</button>
        </form>
        <FaEdit className="m__category__wrapper__edit" onClick={handleEdit} />
      </div>
    );
  }
};

export default MainCategory;
