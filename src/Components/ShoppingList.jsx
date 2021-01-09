import React, { useEffect, useState } from "react";
import shop from "../img/source.svg";
import Button from "@material-ui/core/Button";
import ShopingListForm from "./ShopingListForm";
import { FaEdit, FaTrash } from "react-icons/fa";

import mainCategory from "../data/mCategory";

const ShoppingList = (props) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState(false);
  const [items, setItems] = useState([]);
  const [mCategory, setCategory] = useState([]);
  useEffect(() => {
    setCategory(mainCategory);
    setItems(props.item);
  }, [props.item]);
  const result = mCategory.filter((c) => {
    if (c.m_id === items.m_id) return items.name;
  });
  const handleShow = () => {
    setShow(!show);
  };
  const handleAddForm = () => {
    setForm(true);
  };
  if (form === true) return <ShopingListForm />;
  if (show === false)
    return (
      <div className="shopping__list">
        <div className="shopping__list__add">
          <img src={shop} alt="shop" className="shopping__list__add__img"></img>
          <div className="shopping__list__wrapper">
            <h4 className="shopping__list__wrapper__p">
              Didn't find What you need
            </h4>
            <Button
              className="btn"
              variant="contained"
              onClick={handleAddForm}
            >AddItem</Button>
          </div>
        </div>
        <div className="shopping">
          <div className="shop">
            <h4 className="shop__h4">Shopping list </h4>
            <FaEdit className="" />
          </div>
          <div className="shopping_item">
            <p>Avocado</p>

            <div className="shopping_item_detail">
              {/* <FaTrash className="shop__del" /> */}
              <div className="item__quantity">
                {/* <p className="item_p">+</p> */}
                <p className="item_q" onClick={handleShow}>
                  2pcs
                </p>
                {/* <p className="item_p">-</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="shopping__list__input">
          <Button variant="contained" className="list__btn">
            Save
          </Button>
          <input
            type="text"
            placeholder="Enter a name"
            className="list__input"
          ></input>
        </div>
      </div>
    );
  else if (show === true)
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
          <div className="shop">
            <h4 className="shop__h4">Shopping list </h4>
            <FaEdit className="" />
          </div>
          <div className="shopping_item">
            <p>Avocado</p>

            <div className="shopping_item_detail">
              <FaTrash className="shop__del" />
              <div className="item__quantity">
                <p className="item_p">+</p>
                <p className="item_q" onClick={handleShow}>
                  2pcs
                </p>
                <p className="item_p">-</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shopping__list__input">
          <Button variant="contained" className="list__btn">
            Save
          </Button>
          <input
            type="text"
            placeholder="Enter a name"
            className="list__input"
          ></input>
        </div>
      </div>
    );
};

export default ShoppingList;
