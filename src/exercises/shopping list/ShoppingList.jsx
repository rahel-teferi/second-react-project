import { useState } from "react";
import { AddedList } from "./AddedList";
import { Link, useNavigate } from "react-router-dom";
import { faScroll } from "@fortawesome/free-solid-svg-icons";

export const ShoppingList = () => {
  const [item, setItem] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function changeInputValue(e) {
    setInputValue(e.target.value);
  }
  function addToTheList(e) {
    // e.preventDefault();
    // const form = e.target;
    // const formData = new FormData(form);
    // const formJson = Object.fromEntries(formData.entries());
    // console.log(formData);
    // setItem([...item, Object.values(formJson)]);
    // const newItem = e.target.value;

    // console.log(newItem);
    if (inputValue.trim() !== "") {
      setItem((item) => [...item, inputValue]);
      setInputValue((i) => (i = ""));
      // form.reset();
    }
  }
  function moveDown(index) {
    if (index < item.length - 1) {
      const updatedList = [...item];

      [updatedList[index], updatedList[index + 1]] = [
        updatedList[index + 1],
        updatedList[index],
      ];
      setItem(updatedList);
    }
  }
  function moveUp(index) {
    if (index > 0) {
      const updatedList = [...item];

      [updatedList[index], updatedList[index - 1]] = [
        updatedList[index - 1],
        updatedList[index],
      ];
      setItem(updatedList);
    }
  }

  function deleteItem(index) {
    const undeletedItems = item.filter((_, i) => i !== index);
    setItem(undeletedItems);
  }
  function goBackHome(e) {
    e.preventDefault();
    navigate("/");
  }
  const styleForList = {
    paddingLeft: "50px",
    width: "100%",
    padding: "20px 40px",
    textAlign: "left",
    maxHeight: "350px",
    overflowY: "scroll",
  };
  const navigate = useNavigate();
  return (
    <>
      <section
        style={{
          width: "500px",
          backgroundColor: "lightgrey",
          margin: "100px auto",
          height: "60vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={{ margin: "20px" }}>Shopping list</h1>

        <form>
          <input
            type="text"
            name="itemToAdd"
            placeholder="Add new item"
            value={inputValue}
            onChange={changeInputValue}
          />
          <button type="button" onClick={addToTheList}>
            Add
          </button>
        </form>
        <AddedList
          data={item}
          onDeleteItem={deleteItem}
          onMoveUp={moveUp}
          onMoveDown={moveDown}
          sl={styleForList}
        />
      </section>
      <section style={{ position: "absolute", bottom: "150px" }}>
        <p>
          Go back to <Link to="/">Home</Link>
        </p>
        {/* <p>
          Return to
          <a href="#" onClick={() => navigate("/")}>
            Home Page
          </a>
        </p> */}
        <p>
          Go back to
          <a href="#" onClick={() => navigate(-1)}>
            Previous page
          </a>
        </p>
      </section>
    </>
  );
};
