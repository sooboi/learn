import React, { useEffect, useState } from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleClick = (e) => {
    setCount((prev) => prev + 1);
  };

  const handleCheck = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
    return () => {
      console.log("언마운트");
    };
  }, [checked]);

  return (
    <div className="Products">
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleCheck}
      />
      <label htmlFor="checkbox">Show Only Sale</label>
      <ul>
        {products.map((it) => (
          <li key={it.id}>
            <article>
              <h3>{it.name}</h3>
              <p>{it.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
