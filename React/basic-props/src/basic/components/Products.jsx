import React, { useEffect, useState } from "react";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
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
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => setError("에러 발생 비상 !"))
      .finally(() => setLoading(false));

    return () => {
      console.log("언마운트");
    };
  }, [checked]);

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
