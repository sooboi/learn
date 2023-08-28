import React, { useState } from "react";
import useProducts from "../hooks/use-products";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(0);
  const [loading, error, products] = useProducts({ salesOnly: checked });

  const handleClick = (e) => {
    setCount((prev) => prev + 1);
  };

  const handleCheck = () => {
    setChecked((prev) => !prev);
  };

  if (loading) return <p>Loading . . .</p>;
  if (error) return <p>{error}</p>;

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
