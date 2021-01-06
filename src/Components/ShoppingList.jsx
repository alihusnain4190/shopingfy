import React, { useEffect, useState } from "react";
import shop from "../img/source.svg";
import Button from "@material-ui/core/Button";
import { FaEdit } from "react-icons/fa";

import mainCategory from "../data/mCategory";

const ShoppingList = (props) => {
  const [items, setItems] = useState([]);
  const [mCategory, setCategory] = useState([]);
  useEffect(() => {
    setCategory(mainCategory);
    setItems(props.item);
  }, [props.item]);
  const result = mCategory.filter((c) => {
    if (c.m_id === items.m_id) return items.name;
  });
  console.log(result);
  return (
    <div className="shopping__list">
      <div className="shopping__list__add">
        <img src={shop} alt="shop" className="shopping__list__add__img"></img>
        <div className="shopping__list__wrapper">
          <h4 className="shopping__list__wrapper__p">
            Didn't find What you need
          </h4>
          <Button className="btn" variant="contained">
            Add item
          </Button>
        </div>
      </div>
      <div className="shopping">
        <div>
          <h4>Shopping list </h4>
          <FaEdit />
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
