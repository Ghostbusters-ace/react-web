import React, { useState } from "react";
import useStore from "../store/useStore";
import { Typography } from "antd";

const Create = () => {
  const [title, setTitle] = useState("Titre");
  const [description, setDescription] = useState("Description");
  const addReceipts = useStore((state) => state.addReceipts);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const addReceipt = (event) => {
    event.preventDefault();
    console.log(title);
    console.log(description);
    addReceipts({ title: title, description: description });
    clear();
  };

  const clear = () => {
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <Typography.Title level={2}>Mes recettes</Typography.Title>
      <form onSubmit={addReceipt}>
        <div className="form_controls">
          <div className="form_control">
            <input
              value={title}
              onChange={titleChangeHandler}
              type="text"
              required
            />
          </div>
          <div className="form_control">
            <input
              value={description}
              onChange={descriptionChangeHandler}
              type="text"
              required
            />
          </div>
        </div>
        <div className="form_actions">
          <button type="submit">Créer ma recette</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
