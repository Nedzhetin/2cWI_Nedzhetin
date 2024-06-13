import React from "react";

import { useState } from "react";

export default function User() {
  const [name, setName] = useState(".........");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setName(event.target.value);
    }
  };

  return (
    <>
      <input placeholder="Lastname" type="text" onKeyPress={handleKeyPress} />
      <h2>hello {name}</h2>
    </>
  );
}
