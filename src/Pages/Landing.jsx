import React from "react";
import logo from "../img/logo.svg";
import mainCategory from "../data/mCategory";
import MainCategory from "../Components/MainCategory";
import SubCategory from "../Components/SubCategory";
import {
  FaList,
  FaHistory,
  FaRegChartBar,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
const Landing = () => {
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
        <div>
          <div>
            <h1>
              <span className="landing__mid_heading">Shopping</span> allows you
              take your shopping list whereever you go
            </h1>
            <div>
              <FaSearch />
              <input type="text" placeholder="search item" />
            </div>
          </div>
        </div>
        <div>
          {mainCategory.map((mCategory) => {
            return (
              <>
                <MainCategory mCategory={mCategory} />;
                <SubCategory mCategory={mCategory} />
              </>
            );
          })}
        </div>
      </section>
      <section className="landing__right"></section>
    </main>
  );
};

export default Landing;
