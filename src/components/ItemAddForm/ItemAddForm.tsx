import React, { useState } from "react";
import "./ItemAddForm.css";

const ItemAddForm = ({ onItemAdded }: { onItemAdded: Function }) => {
  const [label, setLabel] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLabel("");
    onItemAdded({ label: label, important: false });
  };

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  return (
    <form className="item-add-form d-flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        onChange={handleLabelChange}
        placeholder="What needs to be done"
        value={label}
      />
      <button className="btn btn-outline-secondary">Add Item</button>
    </form>
  );
};

export default ItemAddForm;
