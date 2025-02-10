export const AddedList = ({ data, onDeleteItem, onMoveUp, onMoveDown, sl }) => {
  return (
    <div>
      <ol style={sl}>
        {data.map((item, index) => (
          <li key={index}>
            {item}
            <button
              type="button"
              onClick={() => {
                onDeleteItem(index);
              }}
              style={{ marginLeft: "20px" }}
            >
              X
            </button>{" "}
            <button type="button" onClick={() => onMoveUp(index)}>
              Up
            </button>
            <button type="button" onClick={() => onMoveDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
      <p>
        Total items: <span>{data.length}</span>
      </p>
    </div>
  );
};
