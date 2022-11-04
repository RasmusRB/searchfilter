import React, { useMemo, useRef, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = useMemo(() => {
    return items.filter((val) => {
      return val.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  function onSubmit(e) {
    e.preventDefault();
    const value = inputRef.current.value;

    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });
    inputRef.current.value = "";
  }

  return (
    <>
      <label>Search...</label>
      <input type="search" onChange={(e) => setQuery(e.target.value)} />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        <label>New item</label>
        <input type={"text"} ref={inputRef} />
        <button type="submit">Add</button>
        {filteredItems.map((val) => {
          return <div key={Math.random()}>{val}</div>;
        })}
      </form>
    </>
  );
}

export default App;
