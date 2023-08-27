import React, { useState } from "react";

export default function AppForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: [value] });

    /** 아래가 편한데 보기에는 위에가 더 짧고 간결 ? 나한텐 아래가 더 직관적인 것 같음 고민. */

    // setData({
    //   ...data,
    //   [e.target.name]: e.target.value,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
