export const AddedList = ({ data, onDeleteItem, onMoveUp, onMoveDown, sl }) => {
  return (
    <>
      {data.length > 0 ? (
        <table>
          <thead>
            <td>Number</td>
            <td>Item</td>
            <td>Delete</td>
            <td>Move up</td>
            <td>Move down</td>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr>
                <td key={index}>{index + 1}</td>
                <td key={index}>{item}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      onDeleteItem(index);
                    }}
                    style={{ marginLeft: "20px" }}
                  >
                    X
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => onMoveUp(index)}>
                    Up
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => onMoveDown(index)}>
                    Down
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5" style={{ paddingTop: "50px" }}>
                Total items: <span>{data.length}</span>
              </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p style={{ paddingTop: "50px" }}>No items are added yet</p>
      )}
    </>
  );
};
