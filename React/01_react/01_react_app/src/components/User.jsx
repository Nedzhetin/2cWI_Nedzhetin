import React from "react";

export default function User() {
  const name = "Stefani";
  return (
    <>
      <input placeholder="Lastname" type="text" />
      <h2> hello {name}</h2>
    </>
  );
}
