import Button from "@material-ui/core/Button";

import React, { useState, useEffect } from "react";
const ShopingListForm = () => {
  const initialValue = {
    name: "",
    note: "",
    img: "",
    category: "",
  };
  const [values, setValues] = useState(initialValue);
  return (
    <div className="shop__form">
      <form>
        <label for="fname" className="label">
          First Name
        </label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        ></input>
        <label for="fname">Note</label>
        <input type="text" placeholder="Your last name.."></input>

        <label for="fname">Image</label>
        <input type="text"></input>
        <label for="fname">Category</label>
        <input type="text" placeholder="Your last name.."></input>
        <Button
          variant="contained"
          style={{
            marginRight: "5px",
            padding: "10px 16px",
            fontSize: "18px",
          }}
        >
          Cancel
        </Button>
        <Button
          style={{
            backgroundColor: "#f9a109",
            padding: "10px 16px",
            fontSize: "18px",
          }}
          variant="contained"
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default ShopingListForm;
