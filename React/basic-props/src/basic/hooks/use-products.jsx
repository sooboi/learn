import React, { useState, useEffect } from "react";

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => setError("에러 발생 비상 !"))
      .finally(() => setLoading(false));

    return () => {
      console.log("언마운트");
    };
  }, [salesOnly]);

  return [loading, error, products];
}

// Hooks은 (함수들은) 값의 재사용이 아니라 로직의 재사용을 위한 것이다.
