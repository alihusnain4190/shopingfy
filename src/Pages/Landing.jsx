import React, { useEffect, useState } from "react";
import logo from "../img/logo.svg";
import mainCategory from "../data/mCategory";
import MainCategory from "../Components/MainCategory";
import SubCategory from "../Components/SubCategory";
import ShoppingList from "../Components/ShoppingList";

import {
  FaList,
  FaHistory,
  FaRegChartBar,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
const Landing = () => {
  const [item, setItem] = useState({ id: 0, name: "", m_id: 0 });
  const itemName = (name, id, m_id) => {
    setItem({ id: id, name: name, m_id: m_id });
  };
  const [mCategory, setMainCategory] = useState([]);
  useEffect(() => {
    setMainCategory(mainCategory);
  }, [mCategory]);
  const changeMainHeading = (heading) => {
    const newArr = mCategory.map((category) => {
      if (category.m_id === heading.m_id) {
        return { m_name: heading.m_name };
      }
      return category;
    });

    setMainCategory(newArr);
  };
  console.log(mCategory);
  return (
    <main className="landing">
      <section className="landing__left">
        <div className="landing__img__wrapper">
          <img src={logo} alt="logo" className="landing__img" />
        </div>
        <div className="landing__list__wrapper">
          <div className="landing__list">
            <FaList />
          </div>
          <div className="landing__list">
            <FaHistory />
          </div>
          <div className="landing__list">
            <FaRegChartBar />
          </div>
        </div>
        <div className="landing__cart__wrapper">
          <FaShoppingCart className="landing__cart" />
        </div>
      </section>
      <section className="landing__mid">
        <div className="landing__header__wrapper">
          <div className="landing__header__heading">
            <h1 className="landing__header__h">
              <span className="landing__mid_heading">Shopping</span> allows you
              take your shopping list whereever you go
            </h1>
          </div>
          <div className="landing__header__input__wrapper">
            <FaSearch className="landing__header__search" />
            <input
              className="landing__header__input"
              type="text"
              placeholder="search item"
            />
          </div>
        </div>
        <div className="landing__category__wrapper">
          {mCategory.map((mCategory) => {
            return (
              <div key={mCategory.m_id} className="main__sub__wrapper">
                <MainCategory
                  mCategory={mCategory}
                  changeMainHeading={changeMainHeading}
                />
                <SubCategory mCategory={mCategory} itemName={itemName} />
              </div>
            );
          })}
        </div>
      </section>
      <section className="landing__right">
        <ShoppingList item={item} />
      </section>
    </main>
  );
};

export default Landing;
